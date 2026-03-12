import type { Model } from "@app/shared";
import type { CoreMessage, ImagePart, FilePart, TextPart } from "ai";
import type { conversations } from "../db/schema";
import type { MessageRow } from "./messageHistory";

/** A file attachment sent from the frontend (base64 data-URL). */
export type ChatFile = { name: string; type: string; data: string };

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
  files?: ChatFile[],
): CoreMessage[] {
  const msgs: CoreMessage[] = [];

  if (conversation.systemPrompt) {
    msgs.push({ role: "system", content: conversation.systemPrompt });
  }

  if (modelMeta.supportsTools) {
    msgs.push({ role: "system", content: TOOL_SYSTEM_PROMPT });
  }

  for (const msg of history) {
    msgs.push({ role: msg.role as "user" | "assistant", content: msg.content });
  }

  // Build the final user message — multimodal if files are attached
  if (files && files.length > 0) {
    const parts: (TextPart | ImagePart | FilePart)[] = [];

    for (const file of files) {
      if (file.type.startsWith("image/")) {
        parts.push({ type: "image", image: file.data });
      } else {
        parts.push({ type: "file", data: file.data, mimeType: file.type });
      }
    }

    // Text part goes last so the model sees attachments first
    if (userMessage.trim()) {
      parts.push({ type: "text", text: userMessage });
    }

    msgs.push({ role: "user", content: parts });
  } else {
    msgs.push({ role: "user", content: userMessage });
  }

  return msgs;
}
