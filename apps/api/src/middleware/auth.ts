import { createMiddleware } from "hono/factory";
import { auth } from "../lib/auth";
import { db } from "../db";
import { subscriptions } from "../db/schema";
import { eq } from "drizzle-orm";
import { createHash } from "crypto";

type UserWithTier = {
  id: string;
  email: string | undefined;
  name: string | undefined;
  tier: "free" | "pro" | "team" | "guest";
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

export const optionalAuthMiddleware = createMiddleware<Env>(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (session?.user) {
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
  } else {
    const ip = c.req.header("x-forwarded-for") ?? c.req.header("x-real-ip") ?? "unknown";
    const hashedIp = createHash("sha256").update(ip).digest("hex").slice(0, 16);

    c.set("user", {
      id: `guest:${hashedIp}`,
      email: undefined,
      name: undefined,
      tier: "guest",
    });
  }

  await next();
});

export type { UserWithTier };
