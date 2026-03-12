import { db } from "../db";
import { sql } from "drizzle-orm";

export interface MessageRow {
  id: string;
  conversationId: string;
  parentId: string | null;
  role: "system" | "user" | "assistant";
  content: string;
  model: string | null;
  inputTokens: number | null;
  outputTokens: number | null;
  durationMs: number | null;
  siblingIndex: number;
  createdAt: Date;
}

/**
 * Walks the parent chain from `leafId` upward via a recursive CTE.
 * Returns only the messages on the active path, ordered chronologically.
 */
export async function getMessageHistory(
  conversationId: string,
  leafId: string | null,
): Promise<MessageRow[]> {
  if (!leafId) return [];

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
