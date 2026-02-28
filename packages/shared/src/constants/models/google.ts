import { parseModelById, type Model } from "../../schemas/models";
import OPENROUTER_MODELS, { modelContextWindow, modelMaxCompletionTokens } from "../openrouterModels";

const GOOGLE_MODEL_CATALOG: Model[] = [
  parseModelById({modelId: "google/gemini-3-flash-preview", name: "Gemini 3 Flash"})
];

export default GOOGLE_MODEL_CATALOG;
