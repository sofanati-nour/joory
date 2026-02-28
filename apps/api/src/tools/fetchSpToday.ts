import { tool } from "ai";
import { z } from "zod";

/**
 * AI SDK tool that fetches the currency exchange rate for the Syrian pound.
 * Returns raw JSON for the model to parse and summarize.
 */
export const fetchSpTodayTool = tool({
    description:
        "Fetch the latest currency exchange rate for the Syrian pound. Use this when the user asks about the currency exchange rate.",
    parameters: z.object({}),
    execute: async () => {
        const response = await fetch("https://api-v2.sp-today.com/api/v1/overview?lang=ar&city=damascus");
        if (!response.ok) {
            throw new Error(`Failed to fetch SP feed: ${response.status}`);
        }
        return response.text();
    },
});