import {
  pgTable, pgEnum,
  text, integer, boolean, real, serial,
  timestamp, jsonb, uuid, varchar,
  index, uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const messageRoleEnum = pgEnum("message_role", [
  "system", "user", "assistant",
]);

export const attachmentTypeEnum = pgEnum("attachment_type", [
  "image", "pdf", "text", "code",
]);

export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "active", "past_due", "canceled", "trialing", "unpaid",
]);

export const userProfiles = pgTable("user_profiles", {
  userId: text("user_id").primaryKey(),
  displayName: text("display_name"),
  avatarUrl: text("avatar_url"),
  defaultModel: text("default_model")
    .default("anthropic/claude-sonnet-4"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().unique(),
  stripeCustomerId: text("stripe_customer_id").unique(),
  stripeSubscriptionId: text("stripe_subscription_id").unique(),
  stripePriceId: text("stripe_price_id"),
  status: subscriptionStatusEnum("status").notNull().default("trialing"),
  tier: text("tier").notNull().default("free"),
  currentPeriodStart: timestamp("current_period_start"),
  currentPeriodEnd: timestamp("current_period_end"),
  cancelAtPeriodEnd: boolean("cancel_at_period_end").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

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

export const usageBuckets = pgTable("usage_buckets", {
  userId: text("user_id").primaryKey(),
  windowCapacity: integer("window_capacity").notNull().default(20),
  windowRemaining: integer("window_remaining").notNull().default(20),
  windowResetsAt: timestamp("window_resets_at").notNull(),
  overageCapacity: integer("overage_capacity").notNull().default(200),
  overageRemaining: integer("overage_remaining").notNull().default(200),
  overageResetsAt: timestamp("overage_resets_at").notNull(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const presets = pgTable("presets", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  systemPrompt: text("system_prompt").notNull(),
  model: text("model"),
  temperature: real("temperature"),
  isDefault: boolean("is_default").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (t) => [
  index("idx_presets_user").on(t.userId),
]);

export const conversations = pgTable("conversations", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  title: text("title"),
  model: text("model").notNull(),
  presetId: uuid("preset_id"),
  systemPrompt: text("system_prompt"),
  activeLeafId: uuid("active_leaf_id"),
  isArchived: boolean("is_archived").notNull().default(false),
  isPinned: boolean("is_pinned").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (t) => [
  index("idx_conversations_user").on(t.userId),
  index("idx_conversations_updated").on(t.updatedAt),
]);

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  conversationId: uuid("conversation_id").notNull(),
  parentId: uuid("parent_id"),
  role: messageRoleEnum("role").notNull(),
  content: text("content").notNull(),
  model: text("model"),
  inputTokens: integer("input_tokens"),
  outputTokens: integer("output_tokens"),
  durationMs: integer("duration_ms"),
  siblingIndex: integer("sibling_index").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_messages_conversation").on(t.conversationId),
  index("idx_messages_parent").on(t.parentId),
]);

export const attachments = pgTable("attachments", {
  id: uuid("id").defaultRandom().primaryKey(),
  messageId: uuid("message_id").notNull(),
  type: attachmentTypeEnum("type").notNull(),
  filename: text("filename").notNull(),
  mimeType: text("mime_type").notNull(),
  sizeBytes: integer("size_bytes").notNull(),
  storagePath: text("storage_path").notNull(),
  width: integer("width"),
  height: integer("height"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_attachments_message").on(t.messageId),
]);

export const shareLinks = pgTable("share_links", {
  id: uuid("id").defaultRandom().primaryKey(),
  conversationId: uuid("conversation_id").notNull(),
  createdBy: text("created_by").notNull(),
  token: varchar("token", { length: 32 }).notNull().unique(),
  passwordHash: text("password_hash"),
  snapshotLeafId: uuid("snapshot_leaf_id"),
  isEnabled: boolean("is_enabled").notNull().default(true),
  expiresAt: timestamp("expires_at"),
  viewCount: integer("view_count").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  uniqueIndex("idx_share_token").on(t.token),
  index("idx_share_conversation").on(t.conversationId),
]);

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

export const paymentAccounts = pgTable("payment_accounts", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("provider_account_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_payment_accounts_user").on(t.userId),
]);

export const paymentEvents = pgTable("payment_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  paymentAccountId: uuid("payment_account_id").notNull(),
  type: text("type").notNull(),
  amountCents: integer("amount_cents").notNull(),
  status: text("status").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (t) => [
  index("idx_payment_events_account").on(t.paymentAccountId),
]);

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

export const presetsRelations = relations(presets, ({ one }) => ({
  user: one(userProfiles, {
    fields: [presets.userId],
    references: [userProfiles.userId],
  }),
}));



export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
