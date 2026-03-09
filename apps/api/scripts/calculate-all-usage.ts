/**
 * Calculate total platform usage across all users in USD.
 *
 * Usage:
 *   bun run apps/api/scripts/calculate-all-usage.ts
 *
 * Shows per-user breakdown and per-model breakdown, plus grand total.
 */

import postgres from "postgres";
import OPENROUTER_MODELS from "../../../packages/shared/src/constants/openrouterModels";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL is not set. Make sure .env is in the repo root.");
  process.exit(1);
}

const sql = postgres(databaseUrl);

const knownModels = OPENROUTER_MODELS as Record<
  string,
  { pricing: { prompt: string; completion: string } }
>;

function calcCost(modelId: string, inputTokens: number, outputTokens: number) {
  const pricing = knownModels[modelId]?.pricing;
  if (!pricing) return null;
  return inputTokens * parseFloat(pricing.prompt) + outputTokens * parseFloat(pricing.completion);
}

type UserRow = {
  user_id: string;
  user_name: string | null;
  user_email: string | null;
  model: string | null;
  input_tokens: number;
  output_tokens: number;
  message_count: number;
};

try {
  const rows: UserRow[] = await sql`
    SELECT
      c.user_id,
      u.name       AS user_name,
      u.email      AS user_email,
      m.model,
      SUM(COALESCE(m.input_tokens, 0))::int  AS input_tokens,
      SUM(COALESCE(m.output_tokens, 0))::int AS output_tokens,
      COUNT(*)::int                           AS message_count
    FROM messages m
    JOIN conversations c ON c.id = m.conversation_id
    LEFT JOIN "user" u ON u.id = c.user_id
    WHERE m.role = 'assistant'
      AND (m.input_tokens IS NOT NULL OR m.output_tokens IS NOT NULL)
    GROUP BY c.user_id, u.name, u.email, m.model
    ORDER BY c.user_id, SUM(COALESCE(m.input_tokens, 0)) + SUM(COALESCE(m.output_tokens, 0)) DESC
  `;

  if (rows.length === 0) {
    console.log("No usage data found.");
    await sql.end();
    process.exit(0);
  }

  // Group by user
  const byUser = new Map<string, { name: string; email: string; rows: UserRow[] }>();
  for (const row of rows) {
    if (!byUser.has(row.user_id)) {
      byUser.set(row.user_id, {
        name: row.user_name ?? "(unknown)",
        email: row.user_email ?? "",
        rows: [],
      });
    }
    byUser.get(row.user_id)!.rows.push(row);
  }

  // Also track global model totals
  const modelTotals = new Map<string, { input: number; output: number; msgs: number; cost: number | null }>();

  let grandCost = 0;
  let grandInput = 0;
  let grandOutput = 0;
  let grandMessages = 0;
  let hasUnknownPricing = false;

  const sep = "-".repeat(120);

  // === Per-user breakdown ===
  console.log("\n=== PER-USER BREAKDOWN ===\n");

  for (const [userId, user] of byUser) {
    let userCost = 0;
    let userInput = 0;
    let userOutput = 0;
    let userMessages = 0;
    let userHasUnknown = false;

    console.log(`${user.name} (${user.email}) — ${userId}`);
    console.log(sep);

    for (const row of user.rows) {
      const modelId = row.model ?? "(unknown)";
      const cost = calcCost(modelId, row.input_tokens, row.output_tokens);

      userInput += row.input_tokens;
      userOutput += row.output_tokens;
      userMessages += row.message_count;

      // Accumulate global model totals
      const existing = modelTotals.get(modelId) ?? { input: 0, output: 0, msgs: 0, cost: 0 };
      existing.input += row.input_tokens;
      existing.output += row.output_tokens;
      existing.msgs += row.message_count;
      if (cost !== null) {
        existing.cost = (existing.cost ?? 0) + cost;
      } else {
        existing.cost = null;
      }
      modelTotals.set(modelId, existing);

      if (cost !== null) {
        userCost += cost;
        console.log(
          `  ${modelId.padEnd(45)} ${row.message_count.toString().padStart(5)} msgs | ` +
            `${row.input_tokens.toLocaleString().padStart(12)} in / ${row.output_tokens.toLocaleString().padStart(12)} out | ` +
            `$${cost.toFixed(4)}`
        );
      } else {
        userHasUnknown = true;
        hasUnknownPricing = true;
        console.log(
          `  ${modelId.padEnd(45)} ${row.message_count.toString().padStart(5)} msgs | ` +
            `${row.input_tokens.toLocaleString().padStart(12)} in / ${row.output_tokens.toLocaleString().padStart(12)} out | ` +
            `  ??? (no pricing)`
        );
      }
    }

    console.log(sep);
    console.log(
      `  ${"SUBTOTAL".padEnd(45)} ${userMessages.toString().padStart(5)} msgs | ` +
        `${userInput.toLocaleString().padStart(12)} in / ${userOutput.toLocaleString().padStart(12)} out | ` +
        `$${userCost.toFixed(4)}` +
        (userHasUnknown ? " (partial)" : "")
    );
    console.log("");

    grandCost += userCost;
    grandInput += userInput;
    grandOutput += userOutput;
    grandMessages += userMessages;
  }

  // === Per-model breakdown ===
  console.log("=== PER-MODEL BREAKDOWN ===\n");
  console.log(sep);

  const sortedModels = [...modelTotals.entries()].sort(
    (a, b) => (b[1].input + b[1].output) - (a[1].input + a[1].output)
  );

  for (const [modelId, data] of sortedModels) {
    const costStr = data.cost !== null ? `$${data.cost.toFixed(4)}` : "  ??? (no pricing)";
    console.log(
      `  ${modelId.padEnd(45)} ${data.msgs.toString().padStart(5)} msgs | ` +
        `${data.input.toLocaleString().padStart(12)} in / ${data.output.toLocaleString().padStart(12)} out | ` +
        costStr
    );
  }

  console.log(sep);

  // === Grand total ===
  console.log(
    `\n  ${"GRAND TOTAL".padEnd(45)} ${grandMessages.toString().padStart(5)} msgs | ` +
      `${grandInput.toLocaleString().padStart(12)} in / ${grandOutput.toLocaleString().padStart(12)} out | ` +
      `$${grandCost.toFixed(4)}`
  );

  if (hasUnknownPricing) {
    console.log(
      "\n  Warning: Some models have no pricing data — their cost is excluded from totals."
    );
  }

  console.log(`\n  Total platform cost: $${grandCost.toFixed(6)}`);
  console.log(`  Total users: ${byUser.size}\n`);
} catch (err) {
  console.error("Error:", err);
  process.exit(1);
} finally {
  await sql.end();
}
