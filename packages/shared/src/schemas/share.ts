
import { z } from "zod";

export const ShareLinkSchema = z.object({
  id: z.string().uuid(),
  conversationId: z.string().uuid(),
  token: z.string().length(32),
  hasPassword: z.boolean(),         // Don't expose the hash to clients
  isEnabled: z.boolean(),
  expiresAt: z.string().datetime().nullable(),
  viewCount: z.number().int(),
  createdAt: z.string().datetime(),
});

export const CreateShareLinkSchema = z.object({
  conversationId: z.string().uuid(),
  password: z.string().min(4).max(128).optional(),
  expiresInHours: z.number().int().min(1).max(8760).optional(), // max 1 year
});

export const AccessShareSchema = z.object({
  token: z.string().length(32),
  password: z.string().optional(),
});

export const SharedConversationSchema = z.object({
  title: z.string().nullable(),
  model: z.string(),
  messages: z.array(z.object({
    role: z.enum(["system", "user", "assistant"]),
    content: z.string(),
    model: z.string().nullable(),
    attachments: z.array(z.object({
      type: z.string(),
      filename: z.string(),
      url: z.string().url(),
    })).default([]),
    createdAt: z.string().datetime(),
  })),
  createdBy: z.string().nullable(),  // Display name, null if anonymous
  sharedAt: z.string().datetime(),
});

export type ShareLink = z.infer<typeof ShareLinkSchema>;
export type CreateShareLink = z.infer<typeof CreateShareLinkSchema>;
export type AccessShare = z.infer<typeof AccessShareSchema>;
export type SharedConversation = z.infer<typeof SharedConversationSchema>;
