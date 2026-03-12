import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { db } from "../db";
import { usageBuckets } from "../db/schema";
import { MODEL_CATALOG, TIER_CONFIG, MARKUP } from "@app/shared";

// "team" is an internal tier not in the product TIER_CONFIG
const TEAM_LIMITS = { windowCapacity: 140, overageCapacity: 700 } as const;

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

const DEFAULT_POINT_COST = 0.5; // 0.5 cents fallback for unknown models

export function getPointCost(model: string): number {
  return MODEL_POINT_COSTS[model] ?? DEFAULT_POINT_COST;
}

/**
 * Calculate the actual cost in cents (1 point = 1 cent) based on real token usage.
 * Applies the MARKUP multiplier.
 */
export function getActualCostCents(
  model: string,
  inputTokens: number,
  outputTokens: number,
): number {
  const modelData = MODEL_CATALOG.find(m => m.id === model);
  if (!modelData) return DEFAULT_POINT_COST;

  const inputPricePerToken = modelData.inputPricePer1M / 1_000_000;
  const outputPricePerToken = modelData.outputPricePer1M / 1_000_000;
  const costDollars =
    inputTokens * inputPricePerToken +
    outputTokens * outputPricePerToken;
  const costCents = costDollars * 100 * MARKUP;
  return Math.round(costCents * 100) / 100; // round to 2 decimal places
}

type RateLimitResult =
  | { allowed: true; windowRemaining: number; overageRemaining: number; totalCapacity: number; reservedCost: number }
  | { allowed: false; retryAfterMs: number };

// Raw row shape returned by db.execute() (snake_case column names from Postgres)
type RawBucket = {
  user_id: string;
  window_capacity: number;
  window_remaining: number;
  window_resets_at: Date;
  overage_capacity: number;
  overage_remaining: number;
  overage_resets_at: Date;
  updated_at: Date;
};

export async function checkAndDeduct(
  userId: string,
  tier: Tier,
  model: string,
): Promise<RateLimitResult> {
  const cost = getPointCost(model);
  const now = new Date();
  const limits = getLimits(tier);

  return db.transaction(async (tx) => {
    // SELECT FOR UPDATE acquires a row-level lock, serialising concurrent
    // requests for the same user so no two requests can both read the same
    // remaining balance and both be allowed.
    const locked = await tx.execute(
      sql`SELECT * FROM usage_buckets WHERE user_id = ${userId} FOR UPDATE`
    );

    let raw = (locked as RawBucket[])[0];

    if (!raw) {
      // Row doesn't exist yet — create it inside the transaction so the lock
      // is held from the very first request.
      const windowResetsAt = new Date(now.getTime() + WINDOW_DURATION_MS);
      const overageResetsAt = getNextMonthStart(now);

      const [inserted] = await tx
        .insert(usageBuckets)
        .values({
          userId,
          windowCapacity: limits.windowCapacity,
          windowRemaining: limits.windowCapacity,
          windowResetsAt,
          overageCapacity: limits.overageCapacity,
          overageRemaining: limits.overageCapacity,
          overageResetsAt,
        })
        .returning();

      raw = {
        user_id: inserted.userId,
        window_capacity: inserted.windowCapacity,
        window_remaining: inserted.windowRemaining,
        window_resets_at: inserted.windowResetsAt,
        overage_capacity: inserted.overageCapacity,
        overage_remaining: inserted.overageRemaining,
        overage_resets_at: inserted.overageResetsAt,
        updated_at: inserted.updatedAt,
      };
    }

    // Apply time-based window / overage resets
    const windowResetsAt =
      now >= new Date(raw.window_resets_at)
        ? new Date(now.getTime() + WINDOW_DURATION_MS)
        : new Date(raw.window_resets_at);

    const overageResetsAt =
      now >= new Date(raw.overage_resets_at)
        ? getNextMonthStart(now)
        : new Date(raw.overage_resets_at);

    let windowRemaining =
      now >= new Date(raw.window_resets_at)
        ? limits.windowCapacity
        : raw.window_remaining;

    let overageRemaining =
      now >= new Date(raw.overage_resets_at)
        ? limits.overageCapacity
        : raw.overage_remaining;

    if (windowRemaining + overageRemaining < cost) {
      return {
        allowed: false,
        retryAfterMs: Math.max(windowResetsAt.getTime() - now.getTime(), 0),
      };
    }

    if (windowRemaining >= cost) {
      windowRemaining -= cost;
    } else {
      const spillover = cost - windowRemaining;
      windowRemaining = 0;
      overageRemaining -= spillover;
    }

    await tx
      .update(usageBuckets)
      .set({
        windowCapacity: limits.windowCapacity,
        windowRemaining,
        windowResetsAt,
        overageCapacity: limits.overageCapacity,
        overageRemaining,
        overageResetsAt,
        updatedAt: now,
      })
      .where(eq(usageBuckets.userId, userId));

    return {
      allowed: true,
      windowRemaining,
      overageRemaining,
      totalCapacity: limits.windowCapacity + limits.overageCapacity,
      reservedCost: cost,
    };
  });
}

/**
 * Settle the actual cost after a response completes.
 * Credits back unused reserved amount or deducts additional if actual > reserved.
 */
export async function settleUsage(
  userId: string,
  reservedCost: number,
  actualCost: number,
): Promise<void> {
  const diff = actualCost - reservedCost; // positive = need to deduct more, negative = credit back

  if (Math.abs(diff) < 0.01) return; // no meaningful difference

  const bucket = await db.query.usageBuckets.findFirst({
    where: eq(usageBuckets.userId, userId),
  });

  if (!bucket) return;

  let windowRemaining = bucket.windowRemaining;
  let overageRemaining = bucket.overageRemaining;

  if (diff < 0) {
    // Credit back: add to window first (up to capacity), then overage
    const credit = Math.abs(diff);
    const windowSpace = bucket.windowCapacity - windowRemaining;
    const windowCredit = Math.min(credit, windowSpace);
    windowRemaining += windowCredit;
    overageRemaining += credit - windowCredit;
    // Cap overage at capacity
    overageRemaining = Math.min(overageRemaining, bucket.overageCapacity);
  } else {
    // Deduct more: from window first, then overage
    if (windowRemaining >= diff) {
      windowRemaining -= diff;
    } else {
      const spillover = diff - windowRemaining;
      windowRemaining = 0;
      overageRemaining = Math.max(0, overageRemaining - spillover);
    }
  }

  await db.update(usageBuckets)
    .set({
      windowRemaining,
      overageRemaining,
      updatedAt: new Date(),
    })
    .where(eq(usageBuckets.userId, userId));
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
      windowCapacity: limits.windowCapacity,
      overageRemaining: limits.overageCapacity,
      overageCapacity: limits.overageCapacity,
      totalRemaining: limits.windowCapacity + limits.overageCapacity,
      totalCapacity: limits.windowCapacity + limits.overageCapacity,
      percentRemaining: 100,
      windowResetsAt: new Date(now.getTime() + WINDOW_DURATION_MS).toISOString(),
      overageResetsAt: getNextMonthStart(now).toISOString(),
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
    windowCapacity: limits.windowCapacity,
    overageRemaining,
    overageCapacity: limits.overageCapacity,
    totalRemaining,
    totalCapacity,
    percentRemaining: Math.round((totalRemaining / totalCapacity) * 100),
    windowResetsAt: (now >= bucket.windowResetsAt
      ? new Date(now.getTime() + WINDOW_DURATION_MS)
      : bucket.windowResetsAt).toISOString(),
    overageResetsAt: (now >= bucket.overageResetsAt
      ? getNextMonthStart(now)
      : bucket.overageResetsAt).toISOString(),
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
