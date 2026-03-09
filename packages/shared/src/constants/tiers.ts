
export const MARKUP = 1.7;

export const TIER_CONFIG = {
  free: {
    label: "Free",
    priceMonthlyUSD: 0,
    priceMonthlySYP: 0,
    monthlyBudgetPoints: 50,
    windowCapacity: 10,     // 10 cents per 4-hour window
    overageCapacity: 40,    // 40 cents monthly overage
    windowDurationMs: 4 * 60 * 60 * 1000,
    features: [
      "20+ AI models",
      "10¢ per 4-hour window",
      "50¢ monthly budget",
      "Basic attachments",
    ],
    limits: {
      maxAttachmentMB: 10,
      maxAttachmentsPerMessage: 3,
      maxConversations: 50,
      maxPresetsCount: 3,
      canShare: false,
      canBranch: true,
    },
  },
  pro: {
    label: "Pro",
    priceMonthlyUSD: 7,
    priceMonthlySYP: 840,
    monthlyBudgetPoints: 420,
    windowCapacity: 70,     // 70 cents per 4-hour window
    overageCapacity: 350,   // 350 cents monthly overage
    windowDurationMs: 4 * 60 * 60 * 1000,
    features: [
      "20+ AI models",
      "70¢ per 4-hour window",
      "420¢ monthly budget",
      "All attachment types (images, PDFs, audio, video)",
      "Shareable conversations",
      "Unlimited presets",
      "Priority support",
    ],
    limits: {
      maxAttachmentMB: 200,
      maxAttachmentsPerMessage: 10,
      maxConversations: Infinity,
      maxPresetsCount: Infinity,
      canShare: true,
      canBranch: true,
    },
  },
} as const;

export type TierConfig = typeof TIER_CONFIG;

