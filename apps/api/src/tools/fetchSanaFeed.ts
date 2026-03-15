import { tool, jsonSchema } from "ai";

const FETCH_TIMEOUT = 15_000;

export const fetchSanaFeedTool = tool({
  description:
    "Fetch the latest news from SANA (Syrian Arab News Agency) in a given language and optional category. Returns the page content as markdown. When presenting results, cite the source links for each article.",
  parameters: jsonSchema({
    type: "object",
    properties: {
      lang: {
        type: "string",
        enum: ["EN", "ES", "AR", "KU", "FR", "TR"],
        description: "Language of the SANA page to fetch.",
      },
      category: {
        type: "string",
        enum: [
          "presidency",
          "politics",
          "syria",
          "economy",
          "health",
          "international",
          "education",
          "culture",
          "sport",
          "science-and-technology",
          "miscellaneous",
        ],
        description:
          "Optional category to filter news. Omit entirely for the homepage.",
      },
    },
    required: ["lang"],
    additionalProperties: false,
  }),
  execute: async (args: unknown) => {
    const { lang, category } = args as { lang: string; category?: string };
    const path = category ? `${lang}/${category}` : lang;
    const url = `https://markdown.new/https://sana.sy/${path}`;
    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(FETCH_TIMEOUT),
      });
      if (!response.ok) {
        return `Failed to fetch SANA news (HTTP ${response.status}). Please try again later.`;
      }
      return await response.text();
    } catch (error) {
      if (error instanceof DOMException && error.name === "TimeoutError") {
        return "SANA news service took too long to respond. Please try again later.";
      }
      return "Could not reach the SANA news service. Please try again later.";
    }
  },
});
