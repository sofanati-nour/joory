import { parseModelById, type Model } from "../../schemas/models";

const GOOGLE_MODEL_CATALOG: Model[] = [
  // Free Models
  parseModelById({modelId: "google/gemini-3.1-flash-lite-preview", name: "Gemini 3.1 Flash Lite"}),

  // Cheap Models
  parseModelById({modelId: "google/gemini-2.5-pro", name: "Gemini 2.5 Pro", tier: "cheap"}),
  parseModelById({modelId: "google/gemini-3-pro-preview", name: "Gemini 3 Pro", tier: "cheap"}),
  parseModelById({modelId: "google/gemini-3.1-pro-preview", name: "Gemini 3.1 Pro", tier: "cheap"}),
];

export default GOOGLE_MODEL_CATALOG;
