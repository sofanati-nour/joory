// Zod: Message, Conversation, ChatRequest

import { z } from "zod";

export const MesssageRoleSchema = z.enum(["user", "assistant", "system"]);

export const ConversationSchema = z.object({
    id: z.uuid(),
    userId: z.string(),
    title: z.string().nullable(),
    presetId: z.uuid().nullable(),
    systenPrompt: z.string().nullable(),
    activeLeafId: z.uuid().nullable(),
    isArchived: z.boolean().default(false),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime().optional(),
});

export const MessageSchema = z.object({
    id: z.uuid(),
    conversationId: z.uuid(),
    parentId: z.uuid().nullable(),
    role: MesssageRoleSchema,
    content: z.string(),
    model: z.string().nullable(),
    inputTokens: z.number().int().nullable(),
    outputTokens: z.number().int().nullable(),
    durationMs: z.number().int().nullable(),
    siblingIndex: z.number().int().default(0),
    createdAt: z.iso.datetime(),
});

export const ConversationListItemSchema = ConversationSchema.pick({
    id: true,
    title: true,
    createdAt: true,
    updatedAt: true,
    isArchived: true,
});

// API request/response schemas

export const ChatRequestSchema = z.object({
    model: z.string(),
    conversationId: z.uuid().optional(), // Omit for new conversations
    parentMessageId: z.uuid().optional(), // for branching.
    content: z.string().min(1).max(100_000),
    attachmentIds: z.array(z.uuid()).max(10).default([]),
    systemPrompt: z.string().max(10_000).optional(),
    presetId: z.uuid().optional(),
});

export const CreateConversationSchema = z.object({
    model: z.string(),
    title: z.string().max(100).optional(),
    presetId: z.uuid().optional(),
    systemPrompt: z.string().max(10_000).optional(),
});

export const UpdateConversationSchema = z.object({
    title: z.string().max(100).optional(),
    model: z.string().optional(),
    activeLeafId: z.uuid().optional(),
    isArchived: z.boolean().optional(),
});

// Branch navigation

export const BranchInfoSchema = z.object({
    messageId: z.uuid(),
    siblingIds: z.array(z.uuid()),
    currentIndex: z.number().int(),
    totalSiblings: z.number().int(),
});

export type Message = z.infer<typeof MessageSchema>;
export type Conversation = z.infer<typeof ConversationSchema>;
export type ConversationListItem = z.infer<typeof ConversationListItemSchema>;
export type ChatRequest = z.infer<typeof ChatRequestSchema>;
export type CreateConversation = z.infer<typeof CreateConversationSchema>;
export type UpdateConversation = z.infer<typeof UpdateConversationSchema>;
export type BranchInfo = z.infer<typeof BranchInfoSchema>;

// Chat stream event protocol
// The API pipes raw AI SDK fullStream parts plus custom events.
// Each SSE `data:` field is a JSON-serialised ChatStreamEvent.
// Two 'finish' events are emitted: the AI SDK's own (has 'response' field,
// client ignores it) and our custom done signal (no 'response' field).

export const ChatStreamEventSchema = z.discriminatedUnion("type", [
    // AI SDK fullStream parts (subset the client cares about)
    z.object({ type: z.literal("text-delta"), textDelta: z.string() }),
    z.object({ type: z.literal("reasoning"), textDelta: z.string() }),
    z.object({ type: z.literal("step-start") }).passthrough(),
    z.object({ type: z.literal("step-finish") }).passthrough(),
    // 'finish' covers both variants; client checks for 'response' at runtime
    z.object({ type: z.literal("finish"), finishReason: z.string(), response: z.unknown().optional() }).passthrough(),
    // Custom events
    z.object({ type: z.literal("title"), value: z.string() }),
    z.object({ type: z.literal("error"), message: z.string() }),
]);

export type ChatStreamEvent = z.infer<typeof ChatStreamEventSchema>;