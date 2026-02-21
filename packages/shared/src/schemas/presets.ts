
import { z } from "zod";

export const PresetSchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  name: z.string().min(1).max(100),
  systemPrompt: z.string().min(1).max(10_000),
  model: z.string().nullable(),
  temperature: z.number().min(0).max(2).nullable(),
  isDefault: z.boolean().default(false),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const CreatePresetSchema = z.object({
  name: z.string().min(1).max(100),
  systemPrompt: z.string().min(1).max(10_000),
  model: z.string().optional(),
  temperature: z.number().min(0).max(2).optional(),
  isDefault: z.boolean().default(false),
});

export const UpdatePresetSchema = CreatePresetSchema.partial();

export type Preset = z.infer<typeof PresetSchema>;
export type CreatePreset = z.infer<typeof CreatePresetSchema>;
export type UpdatePreset = z.infer<typeof UpdatePresetSchema>;

