import { Hono } from "hono";
import { authMiddleware, type UserWithTier } from "../middleware/auth";
import { getUsageStatus } from "../lib/rateLimiter";


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

  return c.json({
    tier: user.tier,
    usage: usageStatus,
  });
});

export default app;
