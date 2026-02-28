/ apps/api/src/lib/rateLimiter.ts

import { eq } from "drizzle-orm";
import { db } from "../db";
import { usageBuckets } from "../db/schema";

// ════════════════════════════════════════════════════════════
// TIER CONFIGURATION
// ════════════════════════════════════════════════════════════

const TIER_LIMITS = {
  free: { windowCapacity: 10, overageCapacity: 100 },
  pro:  { windowCapacity: 20, overageCapacity: 200 },
  team: { windowCapacity: 40, overageCapacity: 400 },
} as const;

const WINDOW_DURATION_MS = 4 * 60 * 60 * 1000; // 4 hours

// ════════════════════════════════════════════════════════════
// POINT COSTS PER MODEL
// ════════════════════════════════════════════════════════════
// Approximation: expensive models cost more points.
// Tune these based on your actual OpenRouter costs.

const MODEL_POINT_COSTS: Record<string, number> = {
  // Cheap
  "meta-llama/llama-3.1-8b-instruct": 0.5,
  "google/gemini-2.0-flash": 0.5,

  // Mid
  "anthropic/claude-sonnet-4": 1,
  "openai/gpt-4o": 1,
  "google/gemini-2.5-pro": 1,

  // Expensive
  "anthropic/claude-opus-4": 3,
  "openai/o3": 3,
  "openai/gpt-5": 4,
};

const DEFAULT_POINT_COST = 1;

export function getPointCost(model: string): number {
  return MODEL_POINT_COSTS[model] ?? DEFAULT_POINT_COST;
}

// ════════════════════════════════════════════════════════════
// CORE: CHECK AND DEDUCT
// ════════════════════════════════════════════════════════════

type RateLimitResult =
  | { allowed: true; windowRemaining: number; overageRemaining: number; totalCapacity: number }
  | { allowed: false; retryAfterMs: number };

export async function checkAndDeduct(
  userId: string,
  tier: keyof typeof TIER_LIMITS,
  model: string,
): Promise<RateLimitResult> {
  const cost = getPointCost(model);
  const now = new Date();
  const limits = TIER_LIMITS[tier];

  // Upsert: create bucket if first request
  let bucket = await db.query.usageBuckets.findFirst({
    where: eq(usageBuckets.userId, userId),
  });

  if (!bucket) {
    const windowResetsAt = new Date(now.getTime() + WINDOW_DURATION_MS);
    const overageResetsAt = getNextMonthStart(now);

    [bucket] = await db.insert(usageBuckets).values({
      userId,
      windowCapacity: limits.windowCapacity,
      windowRemaining: limits.windowCapacity,
      windowResetsAt,
      overageCapacity: limits.overageCapacity,
      overageRemaining: limits.overageCapacity,
      overageResetsAt,
    }).returning();
  }

  // Reset window if expired
  if (now >= bucket.windowResetsAt) {
    bucket.windowRemaining = limits.windowCapacity;
    bucket.windowResetsAt = new Date(now.getTime() + WINDOW_DURATION_MS);
  }

  // Reset overage if new billing period
  if (now >= bucket.overageResetsAt) {
    bucket.overageRemaining = limits.overageCapacity;
    bucket.overageResetsAt = getNextMonthStart(now);
  }

  // Sync capacities if tier changed (upgrade/downgrade)
  bucket.windowCapacity = limits.windowCapacity;
  bucket.overageCapacity = limits.overageCapacity;

  // Try to deduct
  let windowRemaining = bucket.windowRemaining;
  let overageRemaining = bucket.overageRemaining;

  if (windowRemaining >= cost) {
    // Deduct from 4-hour bucket
    windowRemaining -= cost;
  } else if (windowRemaining + overageRemaining >= cost) {
    // Spill into overage bucket
    const spillover = cost - windowRemaining;
    windowRemaining = 0;
    overageRemaining -= spillover;
  } else {
    // Both buckets exhausted
    const retryAfterMs = bucket.windowResetsAt.getTime() - now.getTime();
    return { allowed: false, retryAfterMs: Math.max(retryAfterMs, 0) };
  }

  // Persist
  await db.update(usageBuckets)
    .set({
      windowCapacity: bucket.windowCapacity,
      windowRemaining,
      windowResetsAt: bucket.windowResetsAt,
      overageCapacity: bucket.overageCapacity,
      overageRemaining,
      overageResetsAt: bucket.overageResetsAt,
      updatedAt: now,
    })
    .where(eq(usageBuckets.userId, userId));

  return {
    allowed: true,
    windowRemaining,
    overageRemaining,
    totalCapacity: limits.windowCapacity + limits.overageCapacity,
  };
}

// ════════════════════════════════════════════════════════════
// STATUS: For the UI progress bar
// ════════════════════════════════════════════════════════════

export async function getUsageStatus(userId: string, tier: keyof typeof TIER_LIMITS) {
  const now = new Date();
  const limits = TIER_LIMITS[tier];

  const bucket = await db.query.usageBuckets.findFirst({
    where: eq(usageBuckets.userId, userId),
  });

  if (!bucket) {
    return {
      windowRemaining: limits.windowCapacity,
      overageRemaining: limits.overageCapacity,
      totalRemaining: limits.windowCapacity + limits.overageCapacity,
      totalCapacity: limits.windowCapacity + limits.overageCapacity,
      percentRemaining: 100,
      windowResetsAt: new Date(now.getTime() + WINDOW_DURATION_MS),
      overageResetsAt: getNextMonthStart(now),
    };
  }

  // Apply resets if expired (read-only — don't persist here)
  const windowRemaining = now >= bucket.windowResetsAt
    ? limits.windowCapacity
    : bucket.windowRemaining;

  const overageRemaining = now >= bucket.overageResetsAt
    ? limits.overageCapacity
    : bucket.overageRemaining;

  const totalCapacity = limits.windowCapacity + limits.overageCapacity;
  const totalRemaining = windowRemaining + overageRemaining;

  return {
    windowRemaining,
    overageRemaining,
    totalRemaining,
    totalCapacity,
    percentRemaining: Math.round((totalRemaining / totalCapacity) * 100),
    windowResetsAt: now >= bucket.windowResetsAt
      ? new Date(now.getTime() + WINDOW_DURATION_MS)
      : bucket.windowResetsAt,
    overageResetsAt: now >= bucket.overageResetsAt
      ? getNextMonthStart(now)
      : bucket.overageResetsAt,
  };
}

// ════════════════════════════════════════════════════════════
// HONO MIDDLEWARE
// ════════════════════════════════════════════════════════════

import { createMiddleware } from "hono/factory";

export const rateLimitMiddleware = createMiddleware(async (c, next) => {
  const user = c.get("user");
  const body = await c.req.json();
  const model = body.model as string;

  const result = await checkAndDeduct(user.id, user.tier, model);

  if (!result.allowed) {
    c.header("Retry-After", String(Math.ceil(result.retryAfterMs / 1000)));
    return c.json({
      error: "rate_limited",
      message: "Usage limit reached. Resets soon.",
      retryAfterMs: result.retryAfterMs,
    }, 429);
  }

  // Enrich wide event with usage info
  const event = c.get("wideEvent");
  event.points_cost = getPointCost(model);
  event.window_remaining = result.windowRemaining;
  event.overage_remaining = result.overageRemaining;

  // Pass remaining to response headers (for UI bar)
  c.header("X-Usage-Remaining", String(result.windowRemaining + result.overageRemaining));
  c.header("X-Usage-Capacity", String(result.totalCapacity));

  await next();
});

// ════════════════════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════════════════════

function getNextMonthStart(now: Date): Date {
  const next = new Date(now);
  next.setMonth(next.getMonth() + 1);
  next.setDate(1);
  next.setHours(0, 0, 0, 0);
  return next;
}


// ════════════════════════════════════════════════════════════
// EXAMPLE: How the UI bar works
// ════════════════════════════════════════════════════════════
//
// Pro user, fresh start:
//   window: 20/20, overage: 200/200
//   bar = (20 + 200) / (20 + 200) = 100%
//
// After burning 50 points in first 4 hours:
//   window: 0/20, overage: 170/200
//   bar = (0 + 170) / (20 + 200) = 77%
//
// After 4-hour reset:
//   window: 20/20, overage: 170/200  (overage doesn't refill!)
//   bar = (20 + 170) / (20 + 200) = 86%
//
// The bar "recovers" partially on window reset, but the
// overage drain is visible — it won't be 100% again until
// the monthly billing reset. This communicates the tradeoff:
// burst all you want, but you're eating into your monthly pool.