/ apps/api/src/db/schema.ts

import {
  pgTable, pgEnum,
  text, integer, boolean, real, serial,
  timestamp, jsonb, uuid, varchar,
  index, uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ════════════════════════════════════════════════════════════
// ENUMS
// ════════════════════════════════════════════════════════════

export const messageRoleEnum = pgEnum("message_role", [
  "system", "user", "assistant",
]);

export const attachmentTypeEnum = pgEnum("attachment_type", [
  "image", "pdf", "text", "code",
]);

export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "active", "past_due", "canceled", "trialing", "unpaid",
]);

// ════════════════════════════════════════════════════════════
// USERS & AUTH
// ════════════════════════════════════════════════════════════
// Better Auth manages its own tables (user, session, account).
// This table extends the user with app-specific fields.

export const userProfiles = pgTable("user_profiles", {
  userId: text("user_id").primaryKey(),              // FK to Better Auth user.id
  displayName: text("display_name"),
  avatarUrl: text("avatar_url"),
  defaultModel: text("default_model")
    .default("anthropic/claude-sonnet-4"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// ════════════════════════════════════════════════════════════
// SUBSCRIPTIONS & USAGE
// ════════════════════════════════════════════════════════════

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().unique(),
  stripeCustomerId: text("stripe_customer_id").notNull().unique(),
  stripeSubscriptionId: text("stripe_subscription_id").unique(),
  stripePriceId: text("stripe_price_id"),
  status: subscriptionStatusEnum("status").notNull().default("trialing"),
  tier: text("tier").notNull().default("free"),       // "free" | "pro" | "team"
  currentPeriodStart: timestamp("current_period_start"),
  currentPeriodEnd: timestamp("current_period_end"),
  cancelAtPeriodEnd: boolean("cancel_at_period_end").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Rolling usage per billing period — for cost tracking and analytics only.
// Rate limiting is handled by the usage_buckets table below.
export const usagePeriods = pgTable("usage_periods", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  periodStart: timestamp("period_start").notNull(),
  periodEnd: timestamp("period_end").notNull(),
  inputTokens: integer("input_tokens").notNull().default(0),
  outputTokens: integer("output_tokens").notNull().default(0),
  requestCount: integer("request_count").notNull().default(0),
  estimatedCostCents: real("estimated_cost_cents").notNull().default(0),
}, (t) => [
  index("idx_usage_user_period").on(t.userId, t.periodStart),
]);

// ════════════════════════════════════════════════════════════
// DUAL-BUCKET RATE LIMITING
// ════════════════════════════════════════════════════════════
//
// How it works:
//
//   ┌──────────────────┐    ┌──────────────────────┐
//   │  4-HOUR BUCKET   │    │   OVERAGE BUCKET     │
//   │  (replenishes)   │───▶│   (monthly pool)     │
//   │                  │    │                      │
//   │  Free:  10 pts   │    │  Free:  100 pts      │
//   │  Pro:   20 pts   │    │  Pro:   200 pts      │
//   └──────────────────┘    └──────────────────────┘
//
// 1. Each request costs "points" (mapped from model + tokens)
// 2. Deduct from 4-hour bucket first
// 3. If 4-hour bucket empty → deduct from overage
// 4. If both empty → reject with retry-after header
// 5. 4-hour bucket resets every 4 hours
// 6. Overage bucket resets at billing period start
//
// The UI bar shows (window_remaining + overage_remaining)
// out of (window_capacity + overage_capacity).

export const usageBuckets = pgTable("usage_buckets", {
  userId: text("user_id").primaryKey(),

  // 4-hour rolling window
  windowCapacity: integer("window_capacity").notNull().default(20),
  windowRemaining: integer("window_remaining").notNull().default(20),
  windowResetsAt: timestamp("window_resets_at").notNull(),

  // Monthly overage pool
  overageCapacity: integer("overage_capacity").notNull().default(200),
  overageRemaining: integer("overage_remaining").notNull().default(200),
  overageResetsAt: timestamp("overage_resets_at").notNull(),

  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ════════════════════════════════════════════════════════════
// SYSTEM PROMPT PRESETS
// ════════════════════════════════════════════════════════════

export const presets = pgTable("presets", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),                      // "Code Reviewer", "Translator"
  systemPrompt: text("system_prompt").notNull(),
  model: text("model"),                              // Optional model override
  temperature: real("temperature"),
  isDefault: boolean("is_default").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (t) => [
  index("idx_presets_user").on(t.userId),
]);

// ════════════════════════════════════════════════════════════
// CONVERSATIONS
// ════════════════════════════════════════════════════════════

export const conversations = pgTable("conversations", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  title: text("title"),                              // Auto-generated or user-set
  model: text("model").notNull(),                    // Current model for this chat
  presetId: uuid("preset_id"),                       // Which preset was used
  systemPrompt: text("system_prompt"),               // Snapshot (doesn't change if preset updates)

  // Branching: which leaf message is "active" in the UI
  activeLeafId: uuid("active_leaf_id"),

  isArchived: boolean("is_archived").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (t) => [
  index("idx_conversations_user").on(t.userId),
  index("idx_conversations_updated").on(t.updatedAt),
]);

// ════════════════════════════════════════════════════════════
// MESSAGES (tree structure for branching)
// ════════════════════════════════════════════════════════════
//
// Branching model:
//
//   msg_1 (user: "explain monads")
//     └─ msg_2 (assistant: "A monad is...")
//          ├─ msg_3 (user: "simpler please")        ← branch A
//          │    └─ msg_4 (assistant: "Think of it...")
//          └─ msg_5 (user: "give me code")          ← branch B
//               └─ msg_6 (assistant: "Here's...")
//
// Each message has a parent_id forming a tree.
// To render: walk from active_leaf_id up to root via parent_id.
// At each fork (node with multiple children), store which
// child is "selected" on the conversation's active path.
//

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  conversationId: uuid("conversation_id").notNull(),
  parentId: uuid("parent_id"),                       // null = root message
  role: messageRoleEnum("role").notNull(),
  content: text("content").notNull(),

  // Model info (for assistant messages)
  model: text("model"),
  inputTokens: integer("input_tokens"),
  outputTokens: integer("output_tokens"),
  durationMs: integer("duration_ms"),

  // Ordering within siblings (for deterministic branch ordering)
  siblingIndex: integer("sibling_index").notNull().default(0),

  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_messages_conversation").on(t.conversationId),
  index("idx_messages_parent").on(t.parentId),
]);

// ════════════════════════════════════════════════════════════
// ATTACHMENTS
// ════════════════════════════════════════════════════════════

export const attachments = pgTable("attachments", {
  id: uuid("id").defaultRandom().primaryKey(),
  messageId: uuid("message_id").notNull(),
  type: attachmentTypeEnum("type").notNull(),
  filename: text("filename").notNull(),
  mimeType: text("mime_type").notNull(),
  sizeBytes: integer("size_bytes").notNull(),
  storagePath: text("storage_path").notNull(),       // Local path or S3 key
  width: integer("width"),                           // For images
  height: integer("height"),                         // For images
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_attachments_message").on(t.messageId),
]);

// ════════════════════════════════════════════════════════════
// SHARING
// ════════════════════════════════════════════════════════════

export const shareLinks = pgTable("share_links", {
  id: uuid("id").defaultRandom().primaryKey(),
  conversationId: uuid("conversation_id").notNull(),
  createdBy: text("created_by").notNull(),           // user_id

  // The share token in the URL: /share/{token}
  token: varchar("token", { length: 32 }).notNull().unique(),

  // Optional password protection (bcrypt hash)
  passwordHash: text("password_hash"),

  // Snapshot: which leaf was active when shared
  // Viewers see this specific branch, not the owner's current view
  snapshotLeafId: uuid("snapshot_leaf_id"),

  isEnabled: boolean("is_enabled").notNull().default(true),
  expiresAt: timestamp("expires_at"),                // Optional expiry
  viewCount: integer("view_count").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  uniqueIndex("idx_share_token").on(t.token),
  index("idx_share_conversation").on(t.conversationId),
]);

// ════════════════════════════════════════════════════════════
// WIDE EVENTS (observability — from earlier discussion)
// ════════════════════════════════════════════════════════════

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
  requestId: text("request_id").notNull(),
  service: text("service").notNull(),
  path: text("path").notNull(),
  statusCode: text("status_code").notNull(),
  outcome: text("outcome").notNull(),
  userId: text("user_id"),
  model: text("model"),
  data: jsonb("data").notNull(),
}, (t) => [
  index("idx_events_timestamp").on(t.timestamp),
  index("idx_events_user_id").on(t.userId),
  index("idx_events_outcome").on(t.outcome),
  index("idx_events_model").on(t.model),
]);

// ════════════════════════════════════════════════════════════
// RELATIONS
// ════════════════════════════════════════════════════════════

export const userProfilesRelations = relations(userProfiles, ({ many, one }) => ({
  conversations: many(conversations),
  presets: many(presets),
  subscription: one(subscriptions, {
    fields: [userProfiles.userId],
    references: [subscriptions.userId],
  }),
  paymentAccounts: many(paymentAccounts),
}));

export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({
  user: one(userProfiles, {
    fields: [subscriptions.userId],
    references: [userProfiles.userId],
  }),
}));

export const paymentAccountsRelations = relations(paymentAccounts, ({ one, many }) => ({
  user: one(userProfiles, {
    fields: [paymentAccounts.userId],
    references: [userProfiles.userId],
  }),
  events: many(paymentEvents),
}));

export const paymentEventsRelations = relations(paymentEvents, ({ one }) => ({
  paymentAccount: one(paymentAccounts, {
    fields: [paymentEvents.paymentAccountId],
    references: [paymentAccounts.id],
  }),
}));

export const conversationsRelations = relations(conversations, ({ one, many }) => ({
  owner: one(userProfiles, {
    fields: [conversations.userId],
    references: [userProfiles.userId],
  }),
  preset: one(presets, {
    fields: [conversations.presetId],
    references: [presets.id],
  }),
  messages: many(messages),
  shareLinks: many(shareLinks),
}));

export const messagesRelations = relations(messages, ({ one, many }) => ({
  conversation: one(conversations, {
    fields: [messages.conversationId],
    references: [conversations.id],
  }),
  parent: one(messages, {
    fields: [messages.parentId],
    references: [messages.id],
    relationName: "message_tree",
  }),
  children: many(messages, { relationName: "message_tree" }),
  attachments: many(attachments),
}));

export const attachmentsRelations = relations(attachments, ({ one }) => ({
  message: one(messages, {
    fields: [attachments.messageId],
    references: [messages.id],
  }),
}));

export const shareLinksRelations = relations(shareLinks, ({ one }) => ({
  conversation: one(conversations, {
    fields: [shareLinks.conversationId],
    references: [conversations.id],
  }),
}));


// ════════════════════════════════════════════════════════════
// HELPER: Reconstruct a branch path from leaf to root
// ════════════════════════════════════════════════════════════
//
// This is the core query for rendering a conversation.
// Given a leaf message ID, walk up the tree to get the
// full ordered message list for that branch.
//
// WITH RECURSIVE branch AS (
//   SELECT *, 0 as depth
//   FROM messages
//   WHERE id = :leafId
//
//   UNION ALL
//
//   SELECT m.*, b.depth + 1
//   FROM messages m
//   JOIN branch b ON m.id = b.parent_id
// )
// SELECT * FROM branch ORDER BY depth DESC;
//
// This returns messages root-first. Fast even with deep
// trees because it follows indexed parent_id pointers.
//
// In Drizzle, use db.execute(sql`...`) for this recursive CTE
// until Drizzle adds native recursive query support.