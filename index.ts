import OPENROUTER_MODELS from "./packages/shared/src/constants/openrouterModels";
import type { ModelId } from "./packages/shared/src/schemas/models";
import fs from "fs";
const keysToOmit = ["id", "hugging_face_id", "created"];
type ModelsKeyValuePairs = {
  [modelId: string]: (typeof OPENROUTER_MODELS)[number];
};

function omit(obj: any) {
  const result = structuredClone(obj);
  keysToOmit.forEach((key) => delete result[key]);
  return result;
}

function convertCatalogToModelsKeyValuePairs(): ModelsKeyValuePairs {
  const modelsKeyValuePairs: ModelsKeyValuePairs = {};

  OPENROUTER_MODELS.forEach((model) => {
    modelsKeyValuePairs[model.id] = omit(model);
  });

  return modelsKeyValuePairs;
}

fs.writeFileSync(
  "models.json",
  JSON.stringify(convertCatalogToModelsKeyValuePairs(), null, 2),
);
