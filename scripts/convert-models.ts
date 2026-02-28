import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const modelsRefContent = fs.readFileSync(
    path.join(__dirname, "../models_ref.js"),
    "utf-8"
);

const Y = { None: "none", Optional: "optional", Required: "required" };
const X = {
    Disabled: "Disabled",
    Enabled: "Enabled",
    Budget: "Budget",
    Levels: "Levels",
};
const k$ = () => "";

const rawModels = eval(modelsRefContent);

function mapFeaturesToCapabilities(features) {
    const featureSet = features instanceof Set ? features : new Set(features || []);
    return {
        supportsImages: featureSet.has("images"),
        supportsPdf: featureSet.has("nativePDFs"),
        supportsTools: featureSet.has("toolCalling"),
    };
}

function determineTier(model) {
    if (model.disabled || model.retiredOn) return null;
    
    const { cost, premium, requiresPro, features } = model;
    const inputCost = cost?.input ?? 0;
    const outputCost = cost?.output ?? 0;
    const avgCost = (inputCost + outputCost) / 2;
    
    if (avgCost >= 0.00001 || premium) {
        if (avgCost >= 0.00003 || (premium && avgCost >= 0.000015)) {
            return "ultra";
        }
        return "premium";
    }
    
    if (avgCost >= 0.000002) {
        return "mid";
    }
    
    if (avgCost >= 0.0000005) {
        return "cheap";
    }
    
    return "free";
}

function estimatePointCost(model) {
    const inputCost = (model.cost?.input ?? 0) * 1e6;
    const outputCost = (model.cost?.output ?? 0) * 1e6;
    const avgCost = (inputCost + outputCost) / 2;
    
    if (avgCost >= 10) return 15;
    if (avgCost >= 5) return 7;
    if (avgCost >= 2) return 4;
    if (avgCost >= 1) return 3;
    if (avgCost >= 0.5) return 2;
    return 1;
}

const convertedModels = rawModels
    .map((model) => {
        const tier = determineTier(model);
        if (!tier) return null;
        
        const capabilities = mapFeaturesToCapabilities(model.features);
        const maxInputTokens = model.limits?.app?.maxInputTokens ?? 128000;
        const maxOutputTokens = model.limits?.app?.maxOutputTokens ?? 8192;
        
        return {
            id: model.aaIdentifier ?? model.id,
            name: model.name,
            provider: model.provider,
            tier,
            contextWindow: maxInputTokens,
            maxOutput: maxOutputTokens,
            ...capabilities,
            pointCostEstimate: estimatePointCost(model),
            inputPricePer1M: (model.cost?.input ?? 0) * 1e6,
            outputPricePer1M: (model.cost?.output ?? 0) * 1e6,
        };
    })
    .filter(Boolean);

const tiers = ["ultra", "premium", "mid", "cheap", "free"];
const sortedModels = [];
for (const tier of tiers) {
    sortedModels.push(
        ...convertedModels.filter((m) => m.tier === tier)
    );
}

function generateModelEntry(model) {
    const entries = Object.entries(model)
        .map(([key, value]) => {
            if (typeof value === "string") return `        ${key}: "${value}"`;
            if (typeof value === "boolean") return `        ${key}: ${value}`;
            return `        ${key}: ${value}`;
        })
        .join(",\n");
    return `    {\n${entries},\n    }`;
}

const output = `import type { Model } from "../schemas/models";

export const MODEL_CATALOG: Model[] = [
${sortedModels.map(generateModelEntry).join(",\n")},
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
`;

fs.writeFileSync(
    path.join(__dirname, "../packages/shared/src/constants/models.ts"),
    output
);

console.log(`Converted ${sortedModels.length} models`);
