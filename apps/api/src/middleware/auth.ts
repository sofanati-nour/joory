import { createMiddleware } from "hono/factory";
import { auth } from "../lib/auth";
import { db } from "../db";
import { subscriptions } from "../db/schema";
import { eq } from "drizzle-orm";

type UserWithTier = {
  id: string;
  email: string | undefined;
  name: string | undefined;
  tier: "free" | "pro" | "team";
};

type Env = {
  Variables: {
    user: UserWithTier;
  };
};

export const authMiddleware = createMiddleware<Env>(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session?.user) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const subscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, session.user.id),
  });

  const tier = (subscription?.tier as "free" | "pro" | "team") ?? "free";

  c.set("user", {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
    tier,
  });

  await next();
});

export type { UserWithTier };
