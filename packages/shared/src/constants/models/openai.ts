import { parseModelById, type Model } from "../../schemas/models";

const OPEN_AI_MODEL_CATALOG: Model[] = [
    // Free Models
    parseModelById({modelId: "openai/gpt-5-mini", name: "GPT-5 Mini"}),
    parseModelById({modelId: "openai/gpt-oss-20b:free", name: "GPT-OSS-20B"}),
];

export default OPEN_AI_MODEL_CATALOG;