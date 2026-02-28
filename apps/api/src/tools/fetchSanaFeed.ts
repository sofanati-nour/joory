import { tool } from "ai";
import { z } from "zod";
import { parseRssFeed, formatRssFeedAsMarkdown } from "./parseRssFeed";

/**
 * AI SDK tool that fetches the latest news feed from SANA (Syrian Arab News Agency).
 * Returns pre-formatted markdown so article links are guaranteed in the output.
 */
export const fetchSanaFeedTool = tool({
  description:
    "Fetch the latest news headlines and articles from SANA (Syrian Arab News Agency, sana.sy). Use this when the user asks about news from Syria or current events in Syria.",
  parameters: z.object({}),
  execute: async () => {
    const response = await fetch("https://sana.sy/feed");
    if (!response.ok) {
      throw new Error(`Failed to fetch Sana feed: ${response.status}`);
    }
    const xml = await response.text();
    const items = parseRssFeed(xml);
    return formatRssFeedAsMarkdown(items, "SANA (Syrian Arab News Agency)");
  },
});
