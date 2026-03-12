import { tool, jsonSchema } from "ai";
import { parseRssFeed, formatRssFeedAsMarkdown } from "./parseRssFeed";

const FETCH_TIMEOUT = 10_000; // 10 seconds

type RssFeedToolOptions = {
  url: string;
  name: string;
  description: string;
};

/**
 * Factory that creates an AI SDK tool for fetching and formatting an RSS feed.
 */
export function makeRssFeedTool({ url, name, description }: RssFeedToolOptions) {
  return tool({
    description: `${description} Returns markdown-formatted headlines with links — present them directly to the user without modification.`,
    parameters: jsonSchema({
      type: "object",
      properties: {},
      additionalProperties: false,
    }),
    execute: async () => {
      try {
        const response = await fetch(url, {
          signal: AbortSignal.timeout(FETCH_TIMEOUT),
        });
        if (!response.ok) {
          return `Failed to fetch news from ${name} (HTTP ${response.status}). Please try again later.`;
        }
        const xml = await response.text();
        const items = parseRssFeed(xml);
        return formatRssFeedAsMarkdown(items, name);
      } catch (error) {
        if (error instanceof DOMException && error.name === "TimeoutError") {
          return `${name} took too long to respond. Please try again later.`;
        }
        return `Could not reach ${name}. Please try again later.`;
      }
    },
  });
}
