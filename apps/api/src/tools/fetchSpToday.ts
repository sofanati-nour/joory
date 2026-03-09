import { tool, jsonSchema } from "ai";

/**
 * AI SDK tool that fetches the currency exchange rate for the Syrian pound.
 * Returns raw JSON for the model to parse and summarize.
 */
export const fetchSpTodayTool = tool({
    description:
        "Fetch the latest currency exchange rate for the Syrian pound. Use this when the user asks about the currency exchange rate. (only output the table please, no links)",
    parameters: jsonSchema({ type: "object", properties: {}, additionalProperties: false }),
    execute: async () => {
        const response = await fetch("https://markdown.new/https://sp-today.com/currencies");
        if (!response.ok) {
            throw new Error(`Failed to fetch SP feed: ${response.status}`);
        }
        return response.text();
    },
});