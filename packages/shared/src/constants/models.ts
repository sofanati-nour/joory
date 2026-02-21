// Model IDs, display names, capabilities.


import type { Model } from "../schemas/models";

// This is the authoritative model catalog.
// Backend uses it for pricing. Frontend uses it for the picker.
// Prices are OpenRouter's raw rates (before your 1.7x markup).

export const MODEL_CATALOG: Model[] = [
    // ── Ultra ─────────────────────────────────────────────
    {
        id: "anthropic/claude-opus-4",
        name: "Claude Opus 4",
        provider: "Anthropic",
        tier: "ultra",
        contextWindow: 200_000,
        maxOutput: 4096,
        supportsImages: true,
        supportsPdf: true,
        supportsTools: true,
        pointCostEstimate: 15,
        inputPricePer1M: 15,
        outputPricePer1M: 75,
    },
    {
        id: "openai/gpt-5",
        name: "GPT-5",
        provider: "OpenAI",
        tier: "ultra",
        contextWindow: 128_000,
        maxOutput: 16384,
        supportsImages: true,
        supportsPdf: false,
        supportsTools: true,
        pointCostEstimate: 7,
        inputPricePer1M: 10,
        outputPricePer1M: 30,
    },

    // ── Premium ───────────────────────────────────────────
    {
        id: "anthropic/claude-sonnet-4",
        name: "Claude Sonnet 4",
        provider: "Anthropic",
        tier: "premium",
        contextWindow: 200_000,
        maxOutput: 8192,
        supportsImages: true,
        supportsPdf: true,
        supportsTools: true,
        pointCostEstimate: 3,
        inputPricePer1M: 3,
        outputPricePer1M: 15,
    },
    {
        id: "openai/gpt-4o",
        name: "GPT-4o",
        provider: "OpenAI",
        tier: "premium",
        contextWindow: 128_000,
        maxOutput: 16384,
        supportsImages: true,
        supportsPdf: false,
        supportsTools: true,
        pointCostEstimate: 4,
        inputPricePer1M: 5,
        outputPricePer1M: 15,
    },
    {
        id: "openai/o3",
        name: "o3",
        provider: "OpenAI",
        tier: "premium",
        contextWindow: 200_000,
        maxOutput: 100_000,
        supportsImages: true,
        supportsPdf: false,
        supportsTools: true,
        pointCostEstimate: 5,
        inputPricePer1M: 2,
        outputPricePer1M: 8,
    },

    // ── Mid ───────────────────────────────────────────────
    {
        id: "google/gemini-2.5-pro",
        name: "Gemini 2.5 Pro",
        provider: "Google",
        tier: "mid",
        contextWindow: 1_000_000,
        maxOutput: 8192,
        supportsImages: true,
        supportsPdf: true,
        supportsTools: true,
        pointCostEstimate: 2,
        inputPricePer1M: 1.25,
        outputPricePer1M: 10,
    },
    {
        id: "anthropic/claude-haiku-3.5",
        name: "Claude Haiku 3.5",
        provider: "Anthropic",
        tier: "mid",
        contextWindow: 200_000,
        maxOutput: 8192,
        supportsImages: true,
        supportsPdf: true,
        supportsTools: true,
        pointCostEstimate: 1,
        inputPricePer1M: 0.8,
        outputPricePer1M: 4,
    },
    {
        id: "x-ai/grok-3",
        name: "Grok 3",
        provider: "xAI",
        tier: "mid",
        contextWindow: 131_072,
        maxOutput: 8192,
        supportsImages: true,
        supportsPdf: false,
        supportsTools: true,
        pointCostEstimate: 2,
        inputPricePer1M: 3,
        outputPricePer1M: 15,
    },

    // ── Cheap ─────────────────────────────────────────────
    {
        id: "openai/gpt-4o-mini",
        name: "GPT-4o Mini",
        provider: "OpenAI",
        tier: "cheap",
        contextWindow: 128_000,
        maxOutput: 16384,
        supportsImages: true,
        supportsPdf: false,
        supportsTools: true,
        pointCostEstimate: 1,
        inputPricePer1M: 0.15,
        outputPricePer1M: 0.6,
    },
    {
        id: "deepseek/deepseek-chat",
        name: "DeepSeek V3",
        provider: "DeepSeek",
        tier: "cheap",
        contextWindow: 64_000,
        maxOutput: 8192,
        supportsImages: false,
        supportsPdf: false,
        supportsTools: true,
        pointCostEstimate: 1,
        inputPricePer1M: 0.27,
        outputPricePer1M: 1.1,
    },
    {
        id: "deepseek/deepseek-r1",
        name: "DeepSeek R1",
        provider: "DeepSeek",
        tier: "cheap",
        contextWindow: 64_000,
        maxOutput: 8192,
        supportsImages: false,
        supportsPdf: false,
        supportsTools: false,
        pointCostEstimate: 1,
        inputPricePer1M: 0.55,
        outputPricePer1M: 2.19,
    },
    {
        id: "mistralai/mistral-large",
        name: "Mistral Large",
        provider: "Mistral",
        tier: "cheap",
        contextWindow: 128_000,
        maxOutput: 8192,
        supportsImages: true,
        supportsPdf: false,
        supportsTools: true,
        pointCostEstimate: 1,
        inputPricePer1M: 2,
        outputPricePer1M: 6,
    },

    // ── Free / Near-free ──────────────────────────────────
    {
        id: "google/gemini-2.0-flash",
        name: "Gemini 2.0 Flash",
        provider: "Google",
        tier: "free",
        contextWindow: 1_000_000,
        maxOutput: 8192,
        supportsImages: true,
        supportsPdf: true,
        supportsTools: true,
        pointCostEstimate: 1,
        inputPricePer1M: 0.1,
        outputPricePer1M: 0.4,
    },
    {
        id: "meta-llama/llama-3.1-8b-instruct",
        name: "Llama 3.1 8B",
        provider: "Meta",
        tier: "free",
        contextWindow: 131_072,
        maxOutput: 4096,
        supportsImages: false,
        supportsPdf: false,
        supportsTools: false,
        pointCostEstimate: 1,
        inputPricePer1M: 0.055,
        outputPricePer1M: 0.055,
    },
    {
        id: "meta-llama/llama-3.3-70b-instruct",
        name: "Llama 3.3 70B",
        provider: "Meta",
        tier: "free",
        contextWindow: 131_072,
        maxOutput: 4096,
        supportsImages: false,
        supportsPdf: false,
        supportsTools: true,
        pointCostEstimate: 1,
        inputPricePer1M: 0.13,
        outputPricePer1M: 0.4,
    },
    {
        id: "qwen/qwen-2.5-72b-instruct",
        name: "Qwen 2.5 72B",
        provider: "Qwen",
        tier: "free",
        contextWindow: 131_072,
        maxOutput: 8192,
        supportsImages: false,
        supportsPdf: false,
        supportsTools: true,
        pointCostEstimate: 1,
        inputPricePer1M: 0.18,
        outputPricePer1M: 0.18,
    },
];


// ── Lookup helpers ──────────────────────────────────────────

export const MODEL_MAP = Object.fromEntries(
    MODEL_CATALOG.map((m) => [m.id, m])
) as Record<string, Model>;

export const MODELS_BY_TIER = {
    ultra: MODEL_CATALOG.filter((m) => m.tier === "ultra"),
    premium: MODEL_CATALOG.filter((m) => m.tier === "premium"),
    mid: MODEL_CATALOG.filter((m) => m.tier === "mid"),
    cheap: MODEL_CATALOG.filter((m) => m.tier === "cheap"),
    free: MODEL_CATALOG.filter((m) => m.tier === "free"),
};

export const PROVIDERS = [...new Set(MODEL_CATALOG.map((m) => m.provider))];

export function getModel(id: string): Model | undefined {
    return MODEL_MAP[id];
}

export function getModelsForProvider(provider: string): Model[] {
    return MODEL_CATALOG.filter((m) => m.provider === provider);
}

export function getModelsSupportingImages(): Model[] {
    return MODEL_CATALOG.filter((m) => m.supportsImages);
}

export function getModelsSupportingPdf(): Model[] {
    return MODEL_CATALOG.filter((m) => m.supportsPdf);
}