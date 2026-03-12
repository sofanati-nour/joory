import { db } from "../db";
import { conversations } from "../db/schema";
import { eq, and } from "drizzle-orm";
import { isValidUUID } from "./validation";
import type { ContentfulStatusCode } from "hono/utils/http-status";

type Conversation = typeof conversations.$inferSelect;

export type ResolveConversationOk = {
  ok: true;
  conversationId: string;
  conversation: Conversation;
  /** True when this is a brand-new conversation that needs a title */
  isNew: boolean;
};

export type ResolveConversationError = {
  ok: false;
  error: string;
  status: ContentfulStatusCode;
};

export type ResolveConversationResult = ResolveConversationOk | ResolveConversationError;

/**
 * For existing conversations: validates the ID, authorises the user, and rejects
 * any attempt to change the system prompt.
 *
 * For new conversations: creates the row. Title generation happens later in the
 * chat route once the assistant response is available.
 */
export async function resolveConversation(
  userId: string,
  chatId: string | undefined,
  model: string,
  systemPrompt: string | undefined,
): Promise<ResolveConversationResult> {
  if (chatId) {
    if (!isValidUUID(chatId)) {
      return { ok: false, error: "Invalid conversation ID", status: 400 };
    }

    const found = await db.query.conversations.findFirst({
      where: and(
        eq(conversations.id, chatId),
        eq(conversations.userId, userId),
      ),
    });

    if (!found) {
      return { ok: false, error: "Conversation not found", status: 404 };
    }

    if (systemPrompt) {
      return {
        ok: false,
        error: "Cannot change system prompt on an existing conversation",
        status: 400,
      };
    }

    return { ok: true, conversationId: chatId, conversation: found, isNew: false };
  }

  // New conversation — insert row, title will be generated after first exchange
  const [newConversation] = await db.insert(conversations).values({
    userId,
    model,
    systemPrompt,
    title: null,
  }).returning();

  return {
    ok: true,
    conversationId: newConversation.id,
    conversation: newConversation,
    isNew: true,
  };
}
