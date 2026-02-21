
import { z } from "zod";

export const TierSchema = z.enum(["free", "pro"]);

export const SubscriptionStatusSchema = z.enum([
  "active", "past_due", "canceled", "trialing", "unpaid",
]);

export const PaymentProviderSchema = z.enum(["stripe", "shamcash"]);

export const SubscriptionSchema = z.object({
  tier: TierSchema,
  status: SubscriptionStatusSchema,
  currentPeriodEnd: z.string().datetime().nullable(),
  cancelAtPeriodEnd: z.boolean(),
});

export const UsageStatusSchema = z.object({
  windowRemaining: z.number(),
  windowCapacity: z.number(),
  overageRemaining: z.number(),
  overageCapacity: z.number(),
  totalRemaining: z.number(),
  totalCapacity: z.number(),
  percentRemaining: z.number().min(0).max(100),
  windowResetsAt: z.string().datetime(),
  overageResetsAt: z.string().datetime(),
});

export const CheckoutRequestSchema = z.object({
  provider: PaymentProviderSchema,
  returnUrl: z.string().url(),
});

export type Tier = z.infer<typeof TierSchema>;
export type SubscriptionStatus = z.infer<typeof SubscriptionStatusSchema>;
export type PaymentProvider = z.infer<typeof PaymentProviderSchema>;
export type Subscription = z.infer<typeof SubscriptionSchema>;
export type UsageStatus = z.infer<typeof UsageStatusSchema>;
export type CheckoutRequest = z.infer<typeof CheckoutRequestSchema>;

