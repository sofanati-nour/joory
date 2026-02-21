// Zod: Model, ModelProvider, ModelConfig

import { z } from "zod";

export const ModelTierSchema = z.enum([
    "free", "cheap", "mid", "premium", "ultra"
]);

export const ModelSchema = z.object({
    id: z.string(), // e.g. "anthropic/claude-sonnet-4"
    name: z.string(), // e.g. "Claude Sonnet 4"
    provider: z.string(), // e.g. "Anthropic"
    tier: ModelTierSchema,
    contextWindow: z.number().int(),
    maxOutput: z.number().int(),
    supportsImages: z.boolean().default(false),
    supportsPdf: z.boolean().default(false),
    supportsTools: z.boolean().default(false),
    pointCostEstimate: z.number(),
    inputPricePer1M: z.number(),
    outputPricePer1M: z.number(),
});

export const ModelListResponseSchema = z.object({
    models: z.array(ModelSchema),
});

export type ModelTier = z.infer<typeof ModelTierSchema>;
export type Model = z.infer<typeof ModelSchema>;