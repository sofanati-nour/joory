import { tool, jsonSchema } from "ai";
import { parseRssFeed, formatRssFeedAsMarkdown } from "./parseRssFeed";

/**
 * AI SDK tool that fetches the latest news feed from Alikhbaria (alikhbariah.com).
 * Returns pre-formatted markdown so article links are guaranteed in the output.
 */
export const fetchAlikhbariaFeedTool = tool({
  description:
    "Fetch the latest news headlines and articles from Alikhbaria (alikhbariah.com). Use this when the user asks about news from Syria or current events in Syria.",
  parameters: jsonSchema({ type: "object", properties: {}, additionalProperties: false }),
  execute: async () => {
    const response = await fetch("https://alikhbariah.com/feed/");
    if (!response.ok) {
      throw new Error(`Failed to fetch Alikhbaria feed: ${response.status}`);
    }
    const xml = await response.text();
    const items = parseRssFeed(xml);
    return formatRssFeedAsMarkdown(items, "Alikhbaria");
  },
});
