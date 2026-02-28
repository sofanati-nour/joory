import { Hono } from "hono";
import { authMiddleware, type UserWithTier } from "../middleware/auth";
import { getUsageStatus } from "../lib/rateLimiter";
import { TIER_CONFIG } from "@app/shared";

type Env = {
  Variables: {
    user: UserWithTier;
  };
};

const app = new Hono<Env>();

app.use("/*", authMiddleware);

app.post("/getSubscriptionData", async (c) => {
  const user = c.get("user");

  const usageStatus = await getUsageStatus(user.id, user.tier);

  const tier = user.tier;
  const isPaid = tier !== "free";

  // Premium credits: 0 for free, overageCapacity for pro, scaled for team
  const premiumCredits =
    tier === "free" ? 0 :
    tier === "pro"  ? TIER_CONFIG.pro.overageCapacity :
    /* team */        TIER_CONFIG.pro.overageCapacity * 2;

  return c.json({
    user_id: user.id,
    subscription: isPaid ? "paid" : "free",
    standard: usageStatus.totalRemaining,
    premium: premiumCredits,
    last_reset_at: usageStatus.overageResetsAt.toISOString(),
    next_reset_at: usageStatus.windowResetsAt.toISOString(),
  });
});

export default app;
