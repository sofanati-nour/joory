import { db } from "../db";
import { conversations, messages } from "../db/schema";
import { eq, sql } from "drizzle-orm";
import { getMessageHistory, type MessageRow } from "./messageHistory";

type InsertUserMessageResult = {
  userMessage: typeof messages.$inferSelect;
  messageHistory: MessageRow[];
};

/**
 * Inserts a user message under `parentMessageId` (or as a root message if null).
 * Uses a Postgres advisory lock inside a transaction to prevent concurrent requests
 * from assigning the same sibling index.
 *
 * Also fetches the current message history while inside the transaction so the
 * snapshot is consistent with the insertion point.
 */
export async function insertUserMessage(
  conversationId: string,
  parentMessageId: string | null,
  content: string,
): Promise<InsertUserMessageResult> {
  return db.transaction(async (tx) => {
    const lockKey = parentMessageId
      ? sql`hashtext(${parentMessageId})`
      : sql`hashtext(${conversationId} || '_root')`;
    await tx.execute(sql`SELECT pg_advisory_xact_lock(${lockKey})`);

    const siblingCountResult = await tx.execute(sql`
      SELECT COUNT(*) AS count FROM messages
      WHERE conversation_id = ${conversationId}
        AND parent_id ${parentMessageId ? sql`= ${parentMessageId}` : sql`IS NULL`}
    `);
    const siblingIndex = Number((siblingCountResult as any[])[0]?.count ?? 0);

    const [userMessage] = await tx.insert(messages).values({
      conversationId,
      parentId: parentMessageId,
      role: "user",
      content,
      siblingIndex,
    }).returning();

    const messageHistory = await getMessageHistory(conversationId, parentMessageId);
    return { userMessage, messageHistory };
  });
}

type InsertAssistantMessageOptions = {
  conversationId: string;
  userMessageId: string;
  content: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  durationMs: number;
};

/**
 * Inserts the assistant reply as a child of `userMessageId` and advances
 * `activeLeafId` to the new message. Uses an advisory lock to prevent concurrent
 * regenerations from colliding on sibling index.
 */
export async function insertAssistantMessage(opts: InsertAssistantMessageOptions): Promise<void> {
  const { conversationId, userMessageId, content, model, inputTokens, outputTokens, durationMs } =
    opts;

  await db.transaction(async (tx) => {
    const lockKey = sql`hashtext(${userMessageId})`;
    await tx.execute(sql`SELECT pg_advisory_xact_lock(${lockKey})`);

    const assistantSiblingCount = await tx.execute(sql`
      SELECT COUNT(*) AS count FROM messages
      WHERE conversation_id = ${conversationId}
        AND parent_id = ${userMessageId}
    `);
    const siblingIndex = Number((assistantSiblingCount as any[])[0]?.count ?? 0);

    const [assistantMessage] = await tx.insert(messages).values({
      conversationId,
      parentId: userMessageId,
      role: "assistant",
      content,
      model,
      inputTokens,
      outputTokens,
      durationMs,
      siblingIndex,
    }).returning();

    await tx.update(conversations)
      .set({ activeLeafId: assistantMessage.id, updatedAt: new Date() })
      .where(eq(conversations.id, conversationId));
  });
}
