import type { Model } from "../../schemas/models";

const OPEN_AI_MODEL_CATALOG: Model[] = [
    {
        id: "openai/gpt-5-mini",
        name: "GPT-5 Mini",
        provider: "OpenAI",
        tier: "free",
        contextWindow: 400_000,
        maxOutput: 128_000,
        supportsImages: true,
        supportsPdf: true,
        supportsTools: true,
        reasoning: true,
        pointCostEstimate: 0,
        inputPricePer1M: 0.25,
        outputPricePer1M: 2.00,
    },
    {
        id: "openai/gpt-oss-20b:free",
        name: "GPT-OSS-20B",
        provider: "OpenAI",
        tier: "free",
        contextWindow: 131_072,
        maxOutput: 131_072,
        supportsImages: false,
        supportsPdf: false,
        supportsTools: false,
        reasoning: true,
        pointCostEstimate: 0,
        inputPricePer1M: 0,
        outputPricePer1M: 0,
    }

];

export default OPEN_AI_MODEL_CATALOG;