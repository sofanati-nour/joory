import { parseModelById, type Model } from "../../schemas/models";

const X_AI_MODEL_CATALOG: Model[] = [
  // Mid Models
  parseModelById({modelId: "x-ai/grok-3", name: "Grok 3", tier: "mid"}),
  parseModelById({modelId: "x-ai/grok-4", name: "Grok 4", tier: "mid"}),
];

export default X_AI_MODEL_CATALOG;
