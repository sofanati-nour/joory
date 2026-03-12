import type { Model } from "@app/shared";
import type { conversations } from "../db/schema";
import type { MessageRow } from "./messageHistory";

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

const TOOL_SYSTEM_PROMPT =
  "When you use a tool that returns formatted content, present it to the user as-is. Never rewrite or summarize tool results — reproduce the markdown exactly, including every link ([text](url)). Omitting a link is not allowed.";

/**
 * Assembles the message array to send to the LLM:
 *   [system prompt?] [tool instruction?] [history...] [new user message]
 */
export function buildChatMessages(
  conversation: typeof conversations.$inferSelect,
  modelMeta: Model,
  history: MessageRow[],
  userMessage: string,
): ChatMessage[] {
  const msgs: ChatMessage[] = [];

  if (conversation.systemPrompt) {
    msgs.push({ role: "system", content: conversation.systemPrompt });
  }

  if (modelMeta.supportsTools) {
    msgs.push({ role: "system", content: TOOL_SYSTEM_PROMPT });
  }

  for (const msg of history) {
    msgs.push({ role: msg.role as "user" | "assistant", content: msg.content });
  }

  msgs.push({ role: "user", content: userMessage });
  return msgs;
}
