
import { z } from "zod";

export const WideEventSchema = z.object({
  request_id: z.string(),
  timestamp: z.string().datetime(),
  service: z.string(),
  method: z.string(),
  path: z.string(),
  status_code: z.number(),
  duration_ms: z.number(),
  outcome: z.enum(["success", "error"]),

  user_id: z.string().nullable(),
  subscription_tier: z.string().nullable(),

  model: z.string().nullable(),
  provider: z.string().nullable(),
  input_tokens: z.number().nullable(),
  output_tokens: z.number().nullable(),
  estimated_points: z.number().nullable(),
  actual_points: z.number().nullable(),
  refunded_points: z.number().nullable(),
  raw_cost_usd: z.number().nullable(),
  marked_up_cost_usd: z.number().nullable(),
  time_to_first_token_ms: z.number().nullable(),
  streaming_duration_ms: z.number().nullable(),
  conversation_id: z.string().nullable(),

  error_type: z.string().nullable(),
  error_code: z.string().nullable(),
  error_message: z.string().nullable(),
});

export type WideEvent = z.infer<typeof WideEventSchema>;

