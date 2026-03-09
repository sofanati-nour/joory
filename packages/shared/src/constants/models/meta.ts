import { parseModelById, type Model } from "../../schemas/models";

const META_MODEL_CATALOG: Model[] = [
    // Free Models
    parseModelById({modelId: "meta-llama/llama-4-scout", name: "Llama 4 Scout"}),
];

export default META_MODEL_CATALOG;