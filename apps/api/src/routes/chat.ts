import { Hono } from "hono";
import { streamSSE } from "hono/streaming";
import { authMiddleware, type UserWithTier } from "../middleware/auth";
import { logger } from "../lib/logger";
import { db } from "../db";
import { conversations } from "../db/schema";
import { eq } from "drizzle-orm";
import { openrouter } from "../lib/openrouter";
import { streamText } from "ai";
import { checkAndDeduct, settleUsage, getActualCostCents } from "../lib/rateLimiter";
import type { ChatStreamEvent } from "@app/shared";
import { MODEL_MAP } from "@app/shared";
import { isValidUUID } from "../lib/validation";
import { getMessageHistory } from "../lib/messageHistory";
import { resolveConversation } from "../lib/conversationResolver";
import { generateTitle } from "../lib/titleGenerator";
import { insertUserMessage, insertAssistantMessage } from "../lib/messageInserter";
import { buildChatMessages } from "../lib/chatMessages";
import { CHAT_TOOLS } from "../tools";

type Env = {
  Variables: {
    user: UserWithTier;
  };
};

/** Sensible output-token ceiling so we never starve the context window */
const MAX_OUTPUT_TOKENS_CAP = 16_384;

const app = new Hono<Env>();

app.use("/*", authMiddleware);

// ─── POST /  — send a message and stream the assistant reply ────────────────
app.post("/", async (c) => {
  const user = c.get("user");

  logger.info("chat_request_received", { userId: user.id, tier: user.tier });

  let body: Record<string, unknown>;
  try {
    body = await c.req.json();
  } catch (err) {
    logger.warn("chat_invalid_json", { userId: user.id, errorMessage: String(err) });
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  const message = body.message as string;
  const model = body.model as string;
  const chatId = body.chatId as string | undefined;
  const systemPrompt = body.systemPrompt as string | undefined;

  logger.debug("chat_request_body_parsed", {
    userId: user.id,
    model,
    chatId: chatId ?? null,
    messageLength: typeof message === "string" ? message.length : null,
    hasSystemPrompt: !!systemPrompt,
  });

  if (!message?.trim()) {
    logger.warn("chat_validation_failed", { userId: user.id, reason: "message_empty" });
    return c.json({ error: "Message is required" }, 400);
  }

  if (!model) {
    logger.warn("chat_validation_failed", { userId: user.id, reason: "model_missing" });
    return c.json({ error: "Model is required" }, 400);
  }

  if (!Object.hasOwn(MODEL_MAP, model)) {
    logger.warn("chat_validation_failed", { userId: user.id, reason: "model_unsupported", model });
    return c.json({ error: "Unsupported model" }, 400);
  }

  const modelMeta = MODEL_MAP[model];
  logger.debug("chat_model_resolved", { userId: user.id, model, supportsTools: modelMeta.supportsTools, maxOutput: modelMeta.maxOutput });

  // ── Rate-limit ──────────────────────────────────────────────────────────
  logger.debug("chat_rate_limit_checking", { userId: user.id, tier: user.tier, model });
  let rateLimitResult: Awaited<ReturnType<typeof checkAndDeduct>>;
  try {
    rateLimitResult = await checkAndDeduct(user.id, user.tier, model);
  } catch (err) {
    logger.error("chat_rate_limit_error", err, { userId: user.id, model });
    return c.json({ error: "Internal server error" }, 500);
  }

  logger.info("chat_rate_limit_result", {
    userId: user.id,
    model,
    allowed: rateLimitResult.allowed,
    windowRemaining: rateLimitResult.windowRemaining,
    overageRemaining: rateLimitResult.overageRemaining,
    totalCapacity: rateLimitResult.totalCapacity,
    reservedCost: rateLimitResult.reservedCost,
    retryAfterMs: rateLimitResult.retryAfterMs ?? null,
  });

  if (!rateLimitResult.allowed) {
    logger.warn("chat_rate_limit_exceeded", {
      userId: user.id,
      model,
      retryAfterMs: rateLimitResult.retryAfterMs,
    });
    c.header("Retry-After", String(Math.ceil(rateLimitResult.retryAfterMs / 1000)));
    return c.json({
      error: {
        code: "quota_exceeded",
        message: "Usage limit reached. Resets soon.",
        retryAfterMs: rateLimitResult.retryAfterMs,
      },
    }, 429);
  }

  // ── Resolve or create conversation ──────────────────────────────────────
  logger.debug("chat_conversation_resolving", { userId: user.id, chatId: chatId ?? null });
  const resolved = await resolveConversation(user.id, chatId, model, systemPrompt);
  if (!resolved.ok) {
    logger.warn("chat_conversation_resolve_failed", { userId: user.id, chatId: chatId ?? null, error: resolved.error, status: resolved.status });
    return c.json({ error: resolved.error }, resolved.status);
  }
  const { conversationId, conversation, isNew } = resolved;

  logger.info("chat_conversation_resolved", {
    userId: user.id,
    conversationId,
    isNew,
    activeLeafId: conversation.activeLeafId ?? null,
  });

  c.header("X-Chat-Id", conversationId);
  c.header("X-Usage-Remaining", String(rateLimitResult.windowRemaining + rateLimitResult.overageRemaining));
  c.header("X-Usage-Capacity", String(rateLimitResult.totalCapacity));

  // ── Insert user message ─────────────────────────────────────────────────
  logger.debug("chat_user_message_inserting", { userId: user.id, conversationId, parentLeafId: conversation.activeLeafId ?? null });
  let userMessage: Awaited<ReturnType<typeof insertUserMessage>>["userMessage"];
  let messageHistory: Awaited<ReturnType<typeof insertUserMessage>>["messageHistory"];
  try {
    ({ userMessage, messageHistory } = await insertUserMessage(
      conversationId,
      conversation.activeLeafId ?? null,
      message,
    ));
  } catch (err) {
    logger.error("chat_user_message_insert_failed", err, { userId: user.id, conversationId });
    return c.json({ error: "Failed to save message" }, 500);
  }
  logger.info("chat_user_message_inserted", { userId: user.id, conversationId, userMessageId: userMessage.id, historyLength: messageHistory.length });

  // ── Build LLM message array ─────────────────────────────────────────────
  const chatMessages = buildChatMessages(conversation, modelMeta, messageHistory, message);
  const maxTokens = Math.min(modelMeta.maxOutput ?? MAX_OUTPUT_TOKENS_CAP, MAX_OUTPUT_TOKENS_CAP);
  logger.debug("chat_llm_payload_built", { userId: user.id, conversationId, chatMessageCount: chatMessages.length, maxTokens });

  const send = (stream: Parameters<Parameters<typeof streamSSE>[1]>[0], event: ChatStreamEvent) =>
    stream.writeSSE({ data: JSON.stringify(event) });

  // ── Stream the response ─────────────────────────────────────────────────
  logger.info("chat_stream_starting", { userId: user.id, conversationId, model, maxTokens, supportsTools: !!modelMeta.supportsTools });
  return streamSSE(c, async (stream) => {
    const startTime = Date.now();
    let fullContent = "";
    let finishReason = "stop";
    let inputTokens = 0;
    let outputTokens = 0;
    let textDeltaCount = 0;
    let toolCallCount = 0;
    let stepCount = 0;

    try {
      logger.debug("chat_streamtext_invoked", { userId: user.id, conversationId, model });
      const { fullStream, usage } = streamText({
        model: openrouter(model),
        messages: chatMessages,
        maxTokens,
        ...(modelMeta.supportsTools && { tools: CHAT_TOOLS, maxSteps: 5 }),
      });

      for await (const part of fullStream) {
        await stream.writeSSE({ data: JSON.stringify(part) });

        switch (part.type) {
          case "text-delta":
            fullContent += part.textDelta;
            textDeltaCount++;
            // Log every 50 deltas to avoid flooding while still showing progress
            if (textDeltaCount % 50 === 0) {
              logger.debug("chat_stream_progress", { userId: user.id, conversationId, textDeltaCount, contentLength: fullContent.length });
            }
            break;
          case "tool-call":
            toolCallCount++;
            logger.info("chat_stream_tool_call", { userId: user.id, conversationId, toolName: part.toolName, toolCallId: part.toolCallId, argsLength: JSON.stringify(part.args).length });
            break;
          case "tool-result":
            logger.info("chat_stream_tool_result", { userId: user.id, conversationId, toolName: part.toolName, toolCallId: part.toolCallId, isError: part.isError ?? false });
            break;
          case "tool-call-streaming-start":
            logger.debug("chat_stream_tool_call_streaming_start", { userId: user.id, conversationId, toolName: part.toolName, toolCallId: part.toolCallId });
            break;
          case "step-start":
            stepCount++;
            logger.debug("chat_stream_step_start", { userId: user.id, conversationId, stepCount });
            break;
          case "step-finish":
            logger.info("chat_stream_step_finish", {
              userId: user.id,
              conversationId,
              stepCount,
              finishReason: part.finishReason,
              usage: part.usage ?? null,
              isContinued: part.isContinued,
            });
            break;
          case "finish":
            finishReason = part.finishReason ?? "stop";
            logger.info("chat_stream_finish", {
              userId: user.id,
              conversationId,
              finishReason,
              usage: part.usage ?? null,
              totalSteps: stepCount,
              totalToolCalls: toolCallCount,
              totalTextDeltas: textDeltaCount,
              contentLength: fullContent.length,
              durationMs: Date.now() - startTime,
            });
            break;
          case "error":
            logger.error("chat_stream_part_error", part.error, { userId: user.id, conversationId });
            break;
          default:
            logger.debug("chat_stream_part_unhandled", { userId: user.id, conversationId, partType: (part as { type: string }).type });
        }
      }

      // Generate title from first exchange for new conversations
      logger.info("title_check", { isNew, hasContent: !!fullContent, contentLength: fullContent.length, conversationId });
      if (isNew && fullContent) {
        try {
          logger.info("title_generating", { conversationId, userId: user.id });
          const resolvedTitle = await generateTitle(message, fullContent);
          logger.info("title_generated", { conversationId, title: resolvedTitle });
          await db.update(conversations)
            .set({ title: resolvedTitle })
            .where(eq(conversations.id, conversationId));
          logger.info("title_saved", { conversationId });
          await send(stream, { type: "title", value: resolvedTitle });
        } catch (err) {
          logger.error("title_generation_failed", err, { conversationId, userId: user.id });
        }
      }

      await send(stream, { type: "finish", finishReason });
      logger.debug("chat_finish_event_sent", { userId: user.id, conversationId, finishReason });

      // ── Persist result ────────────────────────────────────────────────
      if (fullContent) {
        logger.debug("chat_usage_resolving", { userId: user.id, conversationId });
        const awaitedUsage = await usage;
        inputTokens = awaitedUsage?.promptTokens ?? 0;
        outputTokens = awaitedUsage?.completionTokens ?? 0;
        logger.info("chat_usage_resolved", { userId: user.id, conversationId, model, inputTokens, outputTokens });

        try {
          await insertAssistantMessage({
            conversationId,
            userMessageId: userMessage.id,
            content: fullContent,
            model,
            inputTokens,
            outputTokens,
            durationMs: Date.now() - startTime,
          });
          logger.info("chat_assistant_message_inserted", { userId: user.id, conversationId, userMessageId: userMessage.id, contentLength: fullContent.length, durationMs: Date.now() - startTime });
        } catch (err) {
          logger.error("chat_assistant_message_insert_failed", err, { userId: user.id, conversationId });
        }
      } else {
        // No content — keep the thread consistent by pointing leaf at the user message
        logger.warn("chat_no_content_produced", { userId: user.id, conversationId, model, finishReason, durationMs: Date.now() - startTime });
        try {
          await db.update(conversations)
            .set({ activeLeafId: userMessage.id })
            .where(eq(conversations.id, conversationId));
          logger.debug("chat_leaf_reset_to_user_message", { userId: user.id, conversationId, userMessageId: userMessage.id });
        } catch (err) {
          logger.error("chat_leaf_reset_failed", err, { userId: user.id, conversationId });
        }
      }

      const actualCost = getActualCostCents(model, inputTokens, outputTokens);
      logger.info("chat_settle_usage", { userId: user.id, model, reservedCost: rateLimitResult.reservedCost, actualCost });
      try {
        await settleUsage(user.id, rateLimitResult.reservedCost, actualCost);
        logger.debug("chat_settle_usage_ok", { userId: user.id });
      } catch (err) {
        logger.error("chat_settle_usage_failed", err, { userId: user.id, reservedCost: rateLimitResult.reservedCost, actualCost });
      }
    } catch (error) {
      const durationMs = Date.now() - startTime;
      logger.error("chat_stream_error", error, {
        userId: user.id,
        conversationId,
        model,
        durationMs,
        contentLengthSoFar: fullContent.length,
        textDeltaCount,
        toolCallCount,
        stepCount,
        finishReason,
      });
      await send(stream, { type: "error", message: "An error occurred while processing your request" });

      try {
        logger.debug("chat_settle_usage_on_error", { userId: user.id, reservedCost: rateLimitResult.reservedCost });
        await settleUsage(user.id, rateLimitResult.reservedCost, 0);
      } catch (err) {
        logger.error("settle_usage_on_error_failed", err, { userId: user.id });
      }

      try {
        logger.debug("chat_leaf_reset_on_error", { userId: user.id, conversationId, userMessageId: userMessage.id });
        await db.update(conversations)
          .set({ activeLeafId: userMessage.id })
          .where(eq(conversations.id, conversationId));
      } catch (err) {
        logger.error("update_leaf_on_error_failed", err, { userId: user.id, conversationId });
      }
    } finally {
      logger.debug("chat_stream_closed", { userId: user.id, conversationId, totalDurationMs: Date.now() - startTime });
      await stream.close();
    }
  });
});

// ─── GET /:id  — load conversation messages ─────────────────────────────────
app.get("/:id", async (c) => {
  const user = c.get("user");
  const conversationId = c.req.param("id");

  logger.info("chat_load_request", { userId: user.id, conversationId });

  if (!isValidUUID(conversationId)) {
    logger.warn("chat_load_invalid_uuid", { userId: user.id, conversationId });
    return c.json({ error: "Invalid conversation ID" }, 400);
  }

  let conversation: Awaited<ReturnType<typeof db.query.conversations.findFirst>>;
  try {
    conversation = await db.query.conversations.findFirst({
      where: (t, { and, eq }) => and(eq(t.id, conversationId), eq(t.userId, user.id)),
    });
  } catch (err) {
    logger.error("chat_load_db_error", err, { userId: user.id, conversationId });
    return c.json({ error: "Internal server error" }, 500);
  }

  if (!conversation) {
    logger.warn("chat_load_not_found", { userId: user.id, conversationId });
    return c.json({ error: "Conversation not found" }, 404);
  }

  const leafId = conversation.activeLeafId;
  logger.debug("chat_load_leaf", { userId: user.id, conversationId, leafId: leafId ?? null });

  if (!leafId) {
    logger.info("chat_load_empty_conversation", { userId: user.id, conversationId });
    return c.json([]);
  }

  let messageHistory: Awaited<ReturnType<typeof getMessageHistory>>;
  try {
    messageHistory = await getMessageHistory(conversationId, leafId);
  } catch (err) {
    logger.error("chat_load_history_error", err, { userId: user.id, conversationId, leafId });
    return c.json({ error: "Failed to load messages" }, 500);
  }

  logger.info("chat_load_success", { userId: user.id, conversationId, messageCount: messageHistory.length });

  return c.json(messageHistory.map(msg => ({
    role: msg.role,
    content: msg.content,
    model: msg.model,
    messageId: msg.id,
  })));
});

export default app;
