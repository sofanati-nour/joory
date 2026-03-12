import { Hono } from "hono";
import { streamSSE } from "hono/streaming";
import { authMiddleware, type UserWithTier } from "../middleware/auth";
import { logger } from "../lib/logger";
import { db } from "../db";
import { conversations, messages } from "../db/schema";
import { eq, and, sql } from "drizzle-orm";
import { openrouter } from "../lib/openrouter";
import { generateText, streamText } from "ai";
import { checkAndDeduct, settleUsage, getActualCostCents } from "../lib/rateLimiter";
import type { ChatStreamEvent } from "@app/shared";
import { MODEL_MAP } from "@app/shared";
import { fetchSanaFeedTool } from "../tools/fetchSanaFeed";
import { fetchSpTodayTool } from "../tools/fetchSpToday";
import { fetchAlikhbariaFeedTool } from "../tools/fetchAlikhbariaFeed";
import {
  getVerseTool,
  getVersesByChapterTool,
  getRandomVerseTool,
  listChaptersTool,
  getChapterTool,
  getChapterInfoTool,
  searchQuranTool,
  listTranslationsTool,
  listJuzsTool,
} from "../tools/quran.com";

type Env = {
  Variables: {
    user: UserWithTier;
  };
};

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isValidUUID(id: string): boolean {
  return UUID_RE.test(id);
}

const app = new Hono<Env>();

app.use("/*", authMiddleware);

app.post("/", async (c) => {
  const user = c.get("user");
  const body = await c.req.json();

  const message = body.message as string;
  const model = body.model as string;
  const chatId = body.chatId as string | undefined;
  const systemPrompt = body.systemPrompt as string | undefined;

  if (!message?.trim()) {
    return c.json({ error: "Message is required" }, 400);
  }

  if (!model) {
    return c.json({ error: "Model is required" }, 400);
  }

  if (!MODEL_MAP[model]) {
    return c.json({ error: "Unsupported model" }, 400);
  }

  const rateLimitResult = await checkAndDeduct(user.id, user.tier, model);

  if (!rateLimitResult.allowed) {
    c.header("Retry-After", String(Math.ceil(rateLimitResult.retryAfterMs / 1000)));
    return c.json({
      error: {
        code: "quota_exceeded",
        message: "Usage limit reached. Resets soon.",
        retryAfterMs: rateLimitResult.retryAfterMs,
      },
    }, 429);
  }

  // Resolve conversation — either existing or newly created
  let conversationId: string;
  let conversation: typeof conversations.$inferSelect;
  let titlePromise: Promise<string> | undefined;

  if (chatId) {
    if (!isValidUUID(chatId)) {
      return c.json({ error: "Invalid conversation ID" }, 400);
    }
    const found = await db.query.conversations.findFirst({
      where: and(
        eq(conversations.id, chatId),
        eq(conversations.userId, user.id)
      ),
    });
    if (!found) return c.json({ error: "Conversation not found" }, 404);
    conversationId = chatId;
    conversation = found;
  } else {
    titlePromise = generateTitle(message, model);
    const [newConversation] = await db.insert(conversations).values({
      userId: user.id,
      model,
      systemPrompt: systemPrompt,
      title: null,
    }).returning();
    conversationId = newConversation.id;
    conversation = newConversation;
  }

  c.header("X-Chat-Id", conversationId);
  c.header("X-Usage-Remaining", String(rateLimitResult.windowRemaining + rateLimitResult.overageRemaining));
  c.header("X-Usage-Capacity", String(rateLimitResult.totalCapacity));

  const parentMessageId = conversation.activeLeafId ?? null;

  const [siblingCountResult, messageHistory] = await Promise.all([
    db.execute(sql`
      SELECT COUNT(*) AS count FROM messages
      WHERE conversation_id = ${conversationId}
        AND parent_id ${parentMessageId ? sql`= ${parentMessageId}` : sql`IS NULL`}
    `),
    getMessageHistory(conversationId, parentMessageId),
  ]);

  const userSiblingIndex = Number((siblingCountResult as any[])[0]?.count ?? 0);

  const [userMessage] = await db.insert(messages).values({
    conversationId,
    parentId: parentMessageId,
    role: "user",
    content: message,
    siblingIndex: userSiblingIndex,
  }).returning();

  await db.update(conversations)
    .set({ activeLeafId: userMessage.id })
    .where(eq(conversations.id, conversationId));

  const modelMeta = MODEL_MAP[model];

  const chatMessages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [];

  if (conversation.systemPrompt || systemPrompt) {
    chatMessages.push({
      role: "system",
      content: conversation.systemPrompt ?? systemPrompt!,
    });
  }

  if (modelMeta?.supportsTools) {
    chatMessages.push({
      role: "system",
      content:
        "When you use a tool that returns formatted content, present it to the user as-is. Never rewrite or summarize tool results — reproduce the markdown exactly, including every link ([text](url)). Omitting a link is not allowed.",
    });
  }

  for (const msg of messageHistory) {
    chatMessages.push({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    });
  }

  chatMessages.push({ role: "user", content: message });

  const startTime = Date.now();
  const userMessageId = userMessage.id;

  const send = (stream: Parameters<Parameters<typeof streamSSE>[1]>[0], event: ChatStreamEvent) =>
    stream.writeSSE({ data: JSON.stringify(event) });

  return streamSSE(c, async (stream) => {
    let fullContent = "";
    let finishReason = "stop";

    try {
      const { fullStream, usage } = streamText({
        model: openrouter(model),
        messages: chatMessages,
        ...(modelMeta?.supportsTools && {
          tools: {
            fetchSanaFeed: fetchSanaFeedTool,
            fetchSpToday: fetchSpTodayTool,
            fetchAlikhbariaFeed: fetchAlikhbariaFeedTool,
            // quranGetVerse: getVerseTool,
            // quranGetVersesByChapter: getVersesByChapterTool,
            // quranGetRandomVerse: getRandomVerseTool,
            // quranListChapters: listChaptersTool,
            // quranGetChapter: getChapterTool,
            // quranGetChapterInfo: getChapterInfoTool,
            // quranSearch: searchQuranTool,
            // quranListTranslations: listTranslationsTool,
            // quranListJuzs: listJuzsTool,
          },
          maxSteps: 5,
        }),
      });

      for await (const part of fullStream) {
        await stream.writeSSE({ data: JSON.stringify(part) });
        if (part.type === "text-delta") {
          fullContent += part.textDelta;
        } else if (part.type === "finish") {
          finishReason = part.finishReason ?? "stop";
        }
      }

      // Title ran concurrently — resolve and send before finish so the client
      // receives it before the stream closes
      if (titlePromise) {
        try {
          const resolvedTitle = await titlePromise;
          await db.update(conversations)
            .set({ title: resolvedTitle })
            .where(eq(conversations.id, conversationId));
          await send(stream, { type: "title", value: resolvedTitle });
        } catch (err) {
          logger.error("title_generation_failed", err);
        }
      }

      await send(stream, { type: "finish", finishReason });

      if (fullContent) {
        const durationMs = Date.now() - startTime;

        const assistantSiblingCount = await db.execute(sql`
          SELECT COUNT(*) AS count FROM messages
          WHERE conversation_id = ${conversationId}
            AND parent_id = ${userMessageId}
        `);
        const assistantSiblingIndex = Number((assistantSiblingCount as any[])[0]?.count ?? 0);

        const awaitedUsage = await usage;
        const inputTokens = awaitedUsage?.promptTokens ?? 0;
        const outputTokens = awaitedUsage?.completionTokens ?? 0;

        const [assistantMessage] = await db.insert(messages).values({
          conversationId,
          parentId: userMessageId,
          role: "assistant",
          content: fullContent,
          model,
          inputTokens,
          outputTokens,
          durationMs,
          siblingIndex: assistantSiblingIndex,
        }).returning();

        await db.update(conversations)
          .set({
            activeLeafId: assistantMessage.id,
            updatedAt: new Date(),
          })
          .where(eq(conversations.id, conversationId));

        // Settle actual cost vs reserved estimate
        const actualCost = getActualCostCents(model, inputTokens, outputTokens);
        await settleUsage(user.id, rateLimitResult.reservedCost, actualCost);
      }
    } catch (error) {
      logger.error("chat_stream_error", error);
      await send(stream, {
        type: "error",
        message: "An error occurred while processing your request",
      });
    } finally {
      await stream.close();
    }
  });
});

app.get("/:id", async (c) => {
  const user = c.get("user");
  const conversationId = c.req.param("id");

  if (!isValidUUID(conversationId)) {
    return c.json({ error: "Invalid conversation ID" }, 400);
  }

  const conversation = await db.query.conversations.findFirst({
    where: and(
      eq(conversations.id, conversationId),
      eq(conversations.userId, user.id)
    ),
  });

  if (!conversation) {
    return c.json({ error: "Conversation not found" }, 404);
  }

  const leafId = conversation.activeLeafId;
  if (!leafId) {
    return c.json([]);
  }

  const messageHistory = await getMessageHistory(conversationId, leafId);

  const formattedMessages = messageHistory.map(msg => ({
    role: msg.role,
    content: msg.content,
    model: msg.model,
    messageId: msg.id,
  }));

  return c.json(formattedMessages);
});

async function getMessageHistory(conversationId: string, leafId: string | null): Promise<typeof messages.$inferSelect[]> {
  if (!leafId) return [];

  // Recursive CTE walks the parent chain in Postgres — only fetches the path,
  // not the entire conversation's message table.
  const rows = await db.execute(sql`
    WITH RECURSIVE path AS (
      SELECT * FROM messages WHERE id = ${leafId}
      UNION ALL
      SELECT m.* FROM messages m
      INNER JOIN path p ON m.id = p.parent_id
        AND m.conversation_id = ${conversationId}
    )
    SELECT * FROM path ORDER BY created_at ASC
  `);

  return (rows as any[]).map((row) => ({
    id: row.id as string,
    conversationId: row.conversation_id as string,
    parentId: row.parent_id as string | null,
    role: row.role as "system" | "user" | "assistant",
    content: row.content as string,
    model: row.model as string | null,
    inputTokens: row.input_tokens as number | null,
    outputTokens: row.output_tokens as number | null,
    durationMs: row.duration_ms as number | null,
    siblingIndex: row.sibling_index as number,
    createdAt: row.created_at as Date,
  }));
}

async function generateTitle(firstMessage: string, model: string): Promise<string> {
  const DEFAULT_TITLE_GENERATION_PROMPT_TEMPLATE = `### Task:
      Generate a concise, 3-5 word title with an emoji summarizing the chat history.
      ### Guidelines:
      - The title should clearly represent the main theme or subject of the conversation.
      - Use emojis that enhance understanding of the topic, but avoid quotation marks or special formatting.
      - Write the title in the chat's primary language; default to English if multilingual.
      - Prioritize accuracy over excessive creativity; keep it clear and simple.
      - Your entire response must consist solely of the JSON object, without any introductory or concluding text.
      - The output must be a single, raw JSON object, without any markdown code fences or other encapsulating text.
      - Ensure no conversational text, affirmations, or explanations precede or follow the raw JSON output, as this will cause direct parsing failure.
      ### Output:
      JSON format: { "title": "your concise title here" }
      ### Examples:
      - { "title": "📉 Stock Market Trends" },
      - { "title": "🍪 Perfect Chocolate Chip Recipe" },
      - { "title": "Evolution of Music Streaming" },
      - { "title": "Remote Work Productivity Tips" },
      - { "title": "Artificial Intelligence in Healthcare" },
      - { "title": "🎮 Video Game Development Insights" }
      ### Chat History:
      <chat_history>
      ${firstMessage}
      </chat_history>`;
  try {
    const result = await generateText({
      model: openrouter("google/gemini-3.1-flash-lite-preview"),
      messages: [
        {
          role: "system",
          content: DEFAULT_TITLE_GENERATION_PROMPT_TEMPLATE,
        },
      ],
      toolChoice: "none",
    });

    const title = JSON.parse(result.text).title;
    return title.trim().slice(0, 100);
  } catch (error) {
    logger.error("title_generation_error", error);
    return firstMessage.slice(0, 50) + (firstMessage.length > 50 ? "..." : "");
  }
}

export default app;
