// Allowed models are only from openai, anthropic, google, meta, deepseek, xai, alibaba, moonshot, zai, minimax

const ALLOWED_PREFIXES = [
  "openai/",
  "anthropic/",
  "google/",
  "meta-llama/",
  "deepseek/",
  "x-ai/",
  "qwen/",       // alibaba
  "moonshot/",
  "zai/",
  "minimax/",
];

interface OpenRouterModel {
  id: string;
  name: string;
  description: string;
  context_length: number;
  architecture: {
    modality: string;
    input_modalities: string[];
    output_modalities: string[];
    tokenizer: string;
    instruct_type: string | null;
  };
  pricing: Record<string, string>;
  top_provider: {
    context_length: number;
    max_completion_tokens: number;
    is_moderated: boolean;
  };
  per_request_limits: unknown;
  supported_parameters: string[];
  default_parameters: Record<string, unknown>;
  expiration_date: string | null;
}

async function main() {
  console.log("Fetching models from OpenRouter...");
  const res = await fetch("https://openrouter.ai/api/v1/models");
  const json = (await res.json()) as { data: OpenRouterModel[] };

  const filtered = json.data.filter((model) =>
    ALLOWED_PREFIXES.some((prefix) => model.id.startsWith(prefix))
  );

  console.log(`Found ${json.data.length} total models, ${filtered.length} match allowed providers.`);

  // Build the object keyed by model id, same shape as existing file
  const entries: Record<string, unknown> = {};
  for (const model of filtered) {
    // Extract only the fields that match the existing format
    entries[model.id] = {
      canonical_slug: (model as any).canonical_slug ?? null,
      name: model.name,
      description: model.description,
      context_length: model.context_length,
      architecture: model.architecture,
      pricing: model.pricing,
      top_provider: model.top_provider,
      per_request_limits: (model as any).per_request_limits ?? null,
      supported_parameters: model.supported_parameters,
      default_parameters: (model as any).default_parameters ?? {},
      expiration_date: (model as any).expiration_date ?? null,
    };
  }

  const output = `const OPENROUTER_MODELS = ${JSON.stringify(entries, null, 2)} as const;

export const modelContextWindow = (modelId: (keyof typeof OPENROUTER_MODELS)): typeof OPENROUTER_MODELS[(keyof typeof OPENROUTER_MODELS)]["top_provider"]["context_length"] => {
  return OPENROUTER_MODELS[modelId]["top_provider"]["context_length"];
}

export const modelMaxCompletionTokens = (modelId: (keyof typeof OPENROUTER_MODELS)): typeof OPENROUTER_MODELS[(keyof typeof OPENROUTER_MODELS)]["top_provider"]["max_completion_tokens"] => {
  return OPENROUTER_MODELS[modelId]["top_provider"]["max_completion_tokens"];
}

export const modelInputPricePer1m = (modelId: (keyof typeof OPENROUTER_MODELS)): typeof OPENROUTER_MODELS[(keyof typeof OPENROUTER_MODELS)]["pricing"]["prompt"] => {
  return OPENROUTER_MODELS[modelId]["pricing"]["prompt"];
}

export const modelOutputPricePer1m = (modelId: (keyof typeof OPENROUTER_MODELS)): number => {
  return parseFloat(OPENROUTER_MODELS[modelId]["pricing"]["completion"]) * 1_000_000;
}

export default OPENROUTER_MODELS;
`;

  const outPath = "./packages/shared/src/constants/openrouterModels.ts";
  await Bun.write(outPath, output);
  console.log(`Wrote ${Object.keys(entries).length} models to ${outPath}`);
}

main();
