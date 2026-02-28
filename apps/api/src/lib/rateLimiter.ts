import { eq } from "drizzle-orm";
import { db } from "../db";
import { usageBuckets } from "../db/schema";
import { MODEL_CATALOG, TIER_CONFIG } from "@app/shared";

// "team" is an internal tier not in the product TIER_CONFIG
const TEAM_LIMITS = { windowCapacity: 40, overageCapacity: 400 } as const;

const WINDOW_DURATION_MS = TIER_CONFIG.free.windowDurationMs;

type Tier = keyof typeof TIER_CONFIG | "team";

function getLimits(tier: Tier) {
  if (tier === "team") return TEAM_LIMITS;
  return {
    windowCapacity: TIER_CONFIG[tier].windowCapacity,
    overageCapacity: TIER_CONFIG[tier].overageCapacity,
  };
}

const MODEL_POINT_COSTS: Record<string, number> = Object.fromEntries(
  MODEL_CATALOG.map(m => [m.id, m.pointCostEstimate])
);

const DEFAULT_POINT_COST = 1;

export function getPointCost(model: string): number {
  return MODEL_POINT_COSTS[model] ?? DEFAULT_POINT_COST;
}

type RateLimitResult =
  | { allowed: true; windowRemaining: number; overageRemaining: number; totalCapacity: number }
  | { allowed: false; retryAfterMs: number };

export async function checkAndDeduct(
  userId: string,
  tier: Tier,
  model: string,
): Promise<RateLimitResult> {
  const cost = getPointCost(model);
  const now = new Date();
  const limits = getLimits(tier);

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

  if (now >= bucket.windowResetsAt) {
    bucket.windowRemaining = limits.windowCapacity;
    bucket.windowResetsAt = new Date(now.getTime() + WINDOW_DURATION_MS);
  }

  if (now >= bucket.overageResetsAt) {
    bucket.overageRemaining = limits.overageCapacity;
    bucket.overageResetsAt = getNextMonthStart(now);
  }

  bucket.windowCapacity = limits.windowCapacity;
  bucket.overageCapacity = limits.overageCapacity;

  let windowRemaining = bucket.windowRemaining;
  let overageRemaining = bucket.overageRemaining;

  if (windowRemaining >= cost) {
    windowRemaining -= cost;
  } else if (windowRemaining + overageRemaining >= cost) {
    const spillover = cost - windowRemaining;
    windowRemaining = 0;
    overageRemaining -= spillover;
  } else {
    const retryAfterMs = bucket.windowResetsAt.getTime() - now.getTime();
    return { allowed: false, retryAfterMs: Math.max(retryAfterMs, 0) };
  }

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

export async function getUsageStatus(userId: string, tier: Tier) {
  const now = new Date();
  const limits = getLimits(tier);

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

function getNextMonthStart(now: Date): Date {
  const next = new Date(now);
  next.setMonth(next.getMonth() + 1);
  next.setDate(1);
  next.setHours(0, 0, 0, 0);
  return next;
}

export type { Tier };
