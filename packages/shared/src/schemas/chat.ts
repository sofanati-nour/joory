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