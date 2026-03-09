import { parseModelById, type Model } from "../../schemas/models";

const GOOGLE_MODEL_CATALOG: Model[] = [
  // Free Models
  parseModelById({modelId: "google/gemini-3.1-flash-lite-preview", name: "Gemini 3.1 Flash Lite"})
];

export default GOOGLE_MODEL_CATALOG;
