import { parseModelById, type Model } from "../schemas/models";
import OPEN_AI_MODEL_CATALOG from "./models/openai";
import GOOGLE_MODEL_CATALOG from "./models/google";
import ANTHROPIC_MODEL_CATALOG from "./models/anthropic";
import X_AI_MODEL_CATALOG from "./models/x-ai";

export const MODEL_CATALOG: Model[] = [
    ...OPEN_AI_MODEL_CATALOG,
    ...GOOGLE_MODEL_CATALOG,
    ...ANTHROPIC_MODEL_CATALOG,
    ...X_AI_MODEL_CATALOG,
    parseModelById({
        modelId: "openrouter/hunter-alpha",
        name: "Hunter Alpha",
        tier: "free",
    })
];

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
