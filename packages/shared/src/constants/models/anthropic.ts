import { parseModelById, type Model } from "../../schemas/models";

const ANTHROPIC_MODEL_CATALOG: Model[] = [
  // Mid Models
  parseModelById({modelId: "anthropic/claude-sonnet-4", name: "Claude 4 Sonnet", tier: "mid"}),
  parseModelById({modelId: "anthropic/claude-sonnet-4.5", name: "Claude Sonnet 4.5", tier: "mid"}),
  parseModelById({modelId: "anthropic/claude-sonnet-4.6", name: "Claude Sonnet 4.6", tier: "mid"}),

  // Ultra Models
  parseModelById({modelId: "anthropic/claude-opus-4.5", name: "Claude Opus 4.5", tier: "ultra"}),
  parseModelById({modelId: "anthropic/claude-opus-4.6", name: "Claude Opus 4.6", tier: "ultra"}),
];

export default ANTHROPIC_MODEL_CATALOG;
