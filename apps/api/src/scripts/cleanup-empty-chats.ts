/**
 * Cleanup script: delete conversations that have only user messages
 * (no assistant messages) and were created more than 5 minutes ago.
 *
 * Usage:
 *   bun run apps/api/src/scripts/cleanup-empty-chats.ts
 *
 * Add --dry-run to preview without deleting:
 *   bun run apps/api/src/scripts/cleanup-empty-chats.ts --dry-run
 */

import { db } from '../db'
import { sql } from 'drizzle-orm'

const DRY_RUN = process.argv.includes('--dry-run')
const CUTOFF_MINUTES = 5

async function main() {
  console.log(`[cleanup-empty-chats] Starting${DRY_RUN ? ' (DRY RUN)' : ''}`)
  console.log(`[cleanup-empty-chats] Cutoff: conversations older than ${CUTOFF_MINUTES} minutes with no assistant messages`)

  // Find conversations older than the cutoff that have NO assistant messages
  const candidates = await db.execute(sql`
    SELECT c.id
    FROM conversations c
    WHERE
      c.created_at < NOW() - INTERVAL '${sql.raw(String(CUTOFF_MINUTES))} minutes'
      AND c.is_archived = false
      AND NOT EXISTS (
        SELECT 1 FROM messages m
        WHERE m.conversation_id = c.id
          AND m.role = 'assistant'
      )
  `)

  const ids: string[] = (candidates as Array<{ id: string }>).map((r) => r.id)

  if (ids.length === 0) {
    console.log('[cleanup-empty-chats] No conversations to delete. Done.')
    process.exit(0)
  }

  console.log(`[cleanup-empty-chats] ${ids.length} conversation(s) to delete (user-only, no assistant reply):`)
  ids.forEach((id) => console.log(`  - ${id}`))

  if (DRY_RUN) {
    console.log('[cleanup-empty-chats] Dry run — skipping delete.')
    process.exit(0)
  }

  // Build a Postgres array literal for the IN clause
  const idList = ids.map((id) => `'${id}'`).join(', ')

  // Delete messages first, then conversations
  const deletedMessages = await db.execute(
    sql`DELETE FROM messages WHERE conversation_id = ANY(ARRAY[${sql.raw(idList)}]::uuid[])`
  )

  const deletedConversations = await db.execute(
    sql`DELETE FROM conversations WHERE id = ANY(ARRAY[${sql.raw(idList)}]::uuid[]) RETURNING id`
  )

  console.log(
    `[cleanup-empty-chats] Deleted ${(deletedConversations as unknown[]).length} conversation(s) and their messages.`
  )
  console.log('[cleanup-empty-chats] Done.')
  process.exit(0)
}

main().catch((err) => {
  console.error('[cleanup-empty-chats] Fatal error:', err)
  process.exit(1)
})
