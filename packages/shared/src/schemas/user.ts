// Zod: User, Session, Preferences

import { z } from "zod";

export const UserProfileSchema = z.object({
    userId: z.string(),
    displayName: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    defaultModel: z.string().default("anthropics/claude-sonnet-4"),
    createdAt: z.iso.datetime(),
});

export const UserPreferencesSchema = z.object({
    defaultModel: z.string(),
    displayName: z.string().min(1).max(50).optional(),
    theme: z.enum(["system", "light", "dark"]).default("system"),
    sendWithEnter: z.boolean().default(true),
    showTokenCounts: z.boolean().default(false),
    showPointCosts: z.boolean().default(false),
})

export type UserProfile = z.infer<typeof UserProfileSchema>;
export type UserPreferences = z.infer<typeof UserPreferencesSchema>;