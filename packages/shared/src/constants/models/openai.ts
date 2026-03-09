import { parseModelById, type Model } from "../../schemas/models";

const OPEN_AI_MODEL_CATALOG: Model[] = [
    // Free Models
    parseModelById({modelId: "openai/gpt-5-mini", name: "GPT-5 Mini"}),
    parseModelById({modelId: "openai/gpt-oss-20b:free", name: "GPT-OSS-20B"}),

    // Cheap Models
    parseModelById({modelId: "openai/gpt-5", name: "GPT-5", tier: "cheap"}),
    parseModelById({modelId: "openai/gpt-5.1", name: "GPT-5.1", tier: "cheap"}),
    parseModelById({modelId: "openai/o3", name: "o3", tier: "cheap"}),

    // Mid Models
    parseModelById({modelId: "openai/gpt-5.2", name: "GPT-5.2", tier: "mid"}),
    parseModelById({modelId: "openai/gpt-5.4", name: "GPT-5.4", tier: "mid"}),
];

export default OPEN_AI_MODEL_CATALOG;
