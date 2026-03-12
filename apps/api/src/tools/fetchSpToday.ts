import { tool, jsonSchema } from "ai";

const FETCH_TIMEOUT = 15_000; // 15 seconds — markdown.new can be slow
const DEFAULT_LIMIT = 7;

type CurrencyRow = {
  code: string;
  name: string;
  buy: string;
  sell: string;
  change: string;
};

/**
 * Extract currency code and Arabic name from the markdown link text.
 * Input looks like: `[USDUSDدولار أمريكي](/currency/us-dollar)`
 * The code appears twice (e.g. "USDUSD"), followed by the Arabic name.
 */
function parseCurrencyCell(raw: string): { code: string; name: string } {
  // Strip the markdown link syntax: [text](url) → text
  const text = raw.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").trim();
  // Code is the first 3 uppercase letters, repeated twice (e.g. "USDUSD")
  const match = text.match(/^([A-Z]{3})\1(.+)$/);
  if (match) {
    return { code: match[1], name: match[2].trim() };
  }
  return { code: "", name: text };
}

/**
 * Parse the sp-today markdown table into structured rows.
 */
function parseTable(md: string): CurrencyRow[] {
  const lines = md.split("\n");
  const rows: CurrencyRow[] = [];

  for (const line of lines) {
    // Skip non-table lines, header, and separator rows
    if (!line.includes("|")) continue;
    if (line.includes("---")) continue;
    if (line.includes("العملة")) continue;

    const cols = line
      .split("|")
      .map((c) => c.trim())
      .filter(Boolean);

    if (cols.length < 4) continue;

    const { code, name } = parseCurrencyCell(cols[0]);
    if (!code) continue;

    rows.push({
      code,
      name,
      buy: cols[1],
      sell: cols[2],
      change: cols[3],
    });
  }

  return rows;
}

function formatAsList(rows: CurrencyRow[]): string {
  if (rows.length === 0) return "No exchange rate data found.";

  const lines: string[] = [];
  for (const row of rows) {
    let line = `- **${row.name} (${row.code})**: شراء ${row.buy} / مبيع ${row.sell}`;
    if (row.change && row.change !== "▲0.00%" && row.change !== "▼0.00%") {
      line += ` (${row.change})`;
    }
    lines.push(line);
  }

  return lines.join("\n");
}

/**
 * AI SDK tool that fetches the currency exchange rate for the Syrian pound.
 */
export const fetchSpTodayTool = tool({
  description:
    "Fetch the latest currency exchange rates for the Syrian pound from sp-today.com. Returns a markdown list of rates — present it directly to the user without modification.",
  parameters: jsonSchema({
    type: "object",
    properties: {
      currency: {
        type: "string",
        description:
          "Currency name or code to filter for (e.g. 'USD', 'EUR', 'الدولار'). Pass an empty string to get the top 7 currencies.",
      },
    },
    required: ["currency"],
    additionalProperties: false,
  }),
  execute: async (args: unknown) => {
    const { currency: rawCurrency } = args as { currency: string };
    const currency = rawCurrency?.trim() || null;
    try {
      const response = await fetch(
        "https://markdown.new/https://sp-today.com/currencies",
        { signal: AbortSignal.timeout(FETCH_TIMEOUT) },
      );
      if (!response.ok) {
        return `Failed to fetch exchange rates (HTTP ${response.status}). Please try again later.`;
      }

      const md = await response.text();
      let rows = parseTable(md);

      if (currency) {
        const q = currency.toLowerCase();
        rows = rows.filter(
          (r) =>
            r.code.toLowerCase().includes(q) ||
            r.name.toLowerCase().includes(q),
        );
        if (rows.length === 0) {
          return `No exchange rate found for "${currency}".`;
        }
      } else {
        rows = rows.slice(0, DEFAULT_LIMIT);
      }

      return formatAsList(rows);
    } catch (error) {
      if (error instanceof DOMException && error.name === "TimeoutError") {
        return "Exchange rate service took too long to respond. Please try again later.";
      }
      return "Could not reach the exchange rate service. Please try again later.";
    }
  },
});
