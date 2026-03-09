// Zod: Model, ModelProvider, ModelConfig

import { z } from "zod";
import OPENROUTER_MODELS from "../constants/openrouterModels";
import { MARKUP } from "../constants/tiers";

export const ModelTierSchema = z.enum([
    "free", "cheap", "mid", "premium", "ultra"
]);

export type ModelId = (keyof typeof OPENROUTER_MODELS);

export const ModelSchema = z.object({
    id: z.string<ModelId>(), // e.g. "anthropic/claude-sonnet-4"
    name: z.string(), // e.g. "Claude Sonnet 4"
    provider: z.string(), // e.g. "Anthropic"
    tier: ModelTierSchema,
    contextWindow: z.number().int().nullable(),
    maxOutput: z.number().int().nullable(),
    supportsImages: z.boolean().default(false),
    supportsPdf: z.boolean().default(false),
    supportsTools: z.boolean().default(false),
    reasoning: z.boolean().default(false),
    pointCostEstimate: z.number(),
    inputPricePer1M: z.number(),
    outputPricePer1M: z.number(),
});

export const ModelListResponseSchema = z.object({
    models: z.array(ModelSchema),
});

export type ModelTier = z.infer<typeof ModelTierSchema>;
export type Model = z.infer<typeof ModelSchema>;


// helpers

/**
 * Takes in a modelId (e.g. "google/gemini-3-flash-preview") and returns the provider name (e.g. "Google")
 * @param modelId
 * @returns <string>
 */
const getProviderName = (modelId: ModelId): string => {
  if (!modelId) throw new Error("Invalid model ID");
  if (!modelId.includes("/")) throw new Error("Invalid model ID");

  const expression = /\/([^/]+)/;
  const match = modelId.match(expression);
  return match && match[1] ? match[1] : "Unknown";
}

/**
 * Estimate the cost of a typical request in cents (1 point = 1 cent).
 * Uses ~2000 input tokens + ~1000 output tokens as a baseline,
 * multiplied by MARKUP.
 */
function estimatePointCost(promptPricePerToken: number, completionPricePerToken: number): number {
  const estimatedInputTokens = 2000;
  const estimatedOutputTokens = 1000;
  const costDollars =
    estimatedInputTokens * promptPricePerToken +
    estimatedOutputTokens * completionPricePerToken;
  const costCents = costDollars * 100 * MARKUP;
  // Free models → 0; paid models → at least 0.01 (we use fractional cents)
  return Math.round(costCents * 100) / 100; // round to 2 decimal places
}

export const parseModelById = (props: {modelId: ModelId, name?: string, tier?: ModelTier}): Model => {
  const promptPrice = parseFloat(OPENROUTER_MODELS[props.modelId].pricing.prompt);
  const completionPrice = parseFloat(OPENROUTER_MODELS[props.modelId].pricing.completion);
  return {
    id: props.modelId,
    name: props.name || OPENROUTER_MODELS[props.modelId].name,
    provider: getProviderName(props.modelId),
    tier: props.tier ?? "free",
    contextWindow: OPENROUTER_MODELS[props.modelId].context_length,
    maxOutput: OPENROUTER_MODELS[props.modelId].top_provider.max_completion_tokens,
    supportsImages: (OPENROUTER_MODELS[props.modelId].architecture.input_modalities as readonly string[]).includes("image"),
    supportsPdf: (OPENROUTER_MODELS[props.modelId].architecture.input_modalities as readonly string[]).includes("file"),
    supportsTools: (OPENROUTER_MODELS[props.modelId].supported_parameters as readonly string[] | undefined)?.includes("tools") ?? false,
    reasoning: (OPENROUTER_MODELS[props.modelId].supported_parameters as readonly string[]).includes("reasoning"),
    pointCostEstimate: estimatePointCost(promptPrice, completionPrice),
    inputPricePer1M: promptPrice * 1_000_000,
    outputPricePer1M: completionPrice * 1_000_000,
  }
};
