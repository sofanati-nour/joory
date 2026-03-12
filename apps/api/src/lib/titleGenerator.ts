import { generateText } from "ai";
import { openrouter } from "./openrouter";
import { logger } from "./logger";

const TITLE_MODEL = "google/gemini-2.5-flash-lite";

const SYSTEM_PROMPT = `Generate a concise 3-5 word title for a chat conversation. You may start with a relevant emoji. Reply with ONLY the title text, nothing else. Use the conversation's language; default to English if multilingual.`;

/**
 * Generate a short title for a new conversation based on the first exchange.
 * Falls back to a truncated version of the user message on failure.
 */
export async function generateTitle(userMessage: string, assistantResponse: string): Promise<string> {
  try {
    // Truncate assistant response — first ~500 chars is enough context for a title
    const truncatedResponse = assistantResponse.slice(0, 500);
    const { text } = await generateText({
      model: openrouter(TITLE_MODEL),
      system: SYSTEM_PROMPT,
      prompt: `User: ${userMessage}\n\nAssistant: ${truncatedResponse}`,
    });

    // Strip any quotes the model might wrap around the title
    const title = text.replace(/^["']+|["']+$/g, "").trim();
    return title.slice(0, 100) || fallback(userMessage);
  } catch (error) {
    logger.error("title_generation_error", error);
    return fallback(userMessage);
  }
}

function fallback(message: string): string {
  return message.slice(0, 50) + (message.length > 50 ? "…" : "");
}
