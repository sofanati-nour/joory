/**
 * Calculate a user's total usage cost in USD.
 *
 * Usage:
 *   bun run apps/api/scripts/calculate-usage.ts <userId>
 *
 * Reads DATABASE_URL from the root .env file.
 * Joins conversations → messages to find all assistant messages with token counts,
 * then multiplies by OpenRouter per-token pricing for each model.
 */

import postgres from "postgres";
import OPENROUTER_MODELS from "../../../packages/shared/src/constants/openrouterModels";

const userId = process.argv[2];
if (!userId) {
  console.error("Usage: bun run apps/api/scripts/calculate-usage.ts <userId>");
  process.exit(1);
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL is not set. Make sure .env is in the repo root.");
  process.exit(1);
}

const sql = postgres(databaseUrl);

type Row = {
  model: string | null;
  input_tokens: number | null;
  output_tokens: number | null;
  message_count: number;
};

try {
  // Verify user exists
  const [userRow] = await sql`SELECT id, name, email FROM "user" WHERE id = ${userId}`;
  if (!userRow) {
    console.error(`No user found with ID: ${userId}`);
    await sql.end();
    process.exit(1);
  }

  console.log(`\nUser: ${userRow.name} (${userRow.email})\n`);

  // Aggregate tokens per model across all of the user's conversations
  const rows: Row[] = await sql`
    SELECT
      m.model,
      SUM(COALESCE(m.input_tokens, 0))::int  AS input_tokens,
      SUM(COALESCE(m.output_tokens, 0))::int AS output_tokens,
      COUNT(*)::int                           AS message_count
    FROM messages m
    JOIN conversations c ON c.id = m.conversation_id
    WHERE c.user_id = ${userId}
      AND m.role = 'assistant'
      AND (m.input_tokens IS NOT NULL OR m.output_tokens IS NOT NULL)
    GROUP BY m.model
    ORDER BY SUM(COALESCE(m.input_tokens, 0)) + SUM(COALESCE(m.output_tokens, 0)) DESC
  `;

  if (rows.length === 0) {
    console.log("No usage data found for this user.");
    await sql.end();
    process.exit(0);
  }

  const knownModels = OPENROUTER_MODELS as Record<
    string,
    { pricing: { prompt: string; completion: string } }
  >;

  let totalCost = 0;
  let totalInput = 0;
  let totalOutput = 0;
  let totalMessages = 0;
  let unknownModelCost = false;

  const modelLines: string[] = [];

  for (const row of rows) {
    const modelId = row.model ?? "(unknown)";
    const inputTokens = row.input_tokens ?? 0;
    const outputTokens = row.output_tokens ?? 0;

    totalInput += inputTokens;
    totalOutput += outputTokens;
    totalMessages += row.message_count;

    const pricing = knownModels[modelId]?.pricing;
    if (!pricing) {
      unknownModelCost = true;
      modelLines.push(
        `  ${modelId.padEnd(45)} ${row.message_count.toString().padStart(5)} msgs | ` +
          `${inputTokens.toLocaleString().padStart(12)} in / ${outputTokens.toLocaleString().padStart(12)} out | ` +
          `  ??? (pricing not found)`
      );
      continue;
    }

    const inputCost = inputTokens * parseFloat(pricing.prompt);
    const outputCost = outputTokens * parseFloat(pricing.completion);
    const cost = inputCost + outputCost;
    totalCost += cost;

    modelLines.push(
      `  ${modelId.padEnd(45)} ${row.message_count.toString().padStart(5)} msgs | ` +
        `${inputTokens.toLocaleString().padStart(12)} in / ${outputTokens.toLocaleString().padStart(12)} out | ` +
        `$${cost.toFixed(4)}`
    );
  }

  console.log("Breakdown by model:");
  console.log("-".repeat(120));
  for (const line of modelLines) {
    console.log(line);
  }
  console.log("-".repeat(120));
  console.log(
    `  ${"TOTAL".padEnd(45)} ${totalMessages.toString().padStart(5)} msgs | ` +
      `${totalInput.toLocaleString().padStart(12)} in / ${totalOutput.toLocaleString().padStart(12)} out | ` +
      `$${totalCost.toFixed(4)}`
  );

  if (unknownModelCost) {
    console.log(
      "\n  ⚠ Some models have no pricing data — their cost is excluded from the total."
    );
  }

  console.log(`\n  Total cost: $${totalCost.toFixed(6)}\n`);
} catch (err) {
  console.error("Error:", err);
  process.exit(1);
} finally {
  await sql.end();
}
