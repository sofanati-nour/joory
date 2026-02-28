import { tool } from "ai";
import { z } from "zod";

const BASE_URL = "https://api.quran.com/api/v4";

async function quranFetch(path: string): Promise<unknown> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Quran.com API error ${response.status}: ${path}`);
  }
  return response.json();
}

/**
 * Get a single verse by its key (e.g. "2:255" for Ayat al-Kursi).
 */
export const getVerseTool = tool({
  description:
    "Fetch a specific Quran verse by its key (chapter:verse, e.g. '2:255'). Returns the verse text (Uthmani script), its translation, and metadata. Use this when the user asks about a specific ayah or verse.",
  parameters: z.object({
    verse_key: z
      .string()
      .describe("Verse key in chapter:verse format, e.g. '1:1' or '2:255'"),
    language: z
      .string()
      .default("en")
      .describe("Language code for the translated name, e.g. 'en', 'ar'"),
    translations: z
      .string()
      .optional()
      .describe(
        "Comma-separated translation resource IDs (e.g. '131' for Sahih International). Omit to use the default."
      ),
  }),
  execute: async ({ verse_key, language, translations }) => {
    const params = new URLSearchParams({ language });
    params.set("words", "true");
    params.set("fields", "text_uthmani,verse_key,juz_number,page_number");
    if (translations) params.set("translations", translations);
    return quranFetch(`/verses/by_key/${encodeURIComponent(verse_key)}?${params}`);
  },
});

/**
 * Get all verses for a chapter (surah).
 */
export const getVersesByChapterTool = tool({
  description:
    "Fetch verses from a Quran chapter (surah) by chapter number (1–114). Returns a paginated list of verses with Uthmani text and translations. Use this when the user asks to read or display a surah.",
  parameters: z.object({
    chapter_number: z
      .number()
      .int()
      .min(1)
      .max(114)
      .describe("Chapter (surah) number between 1 and 114"),
    page: z.number().int().min(1).default(1).describe("Page number for pagination"),
    per_page: z
      .number()
      .int()
      .min(1)
      .max(50)
      .default(10)
      .describe("Number of verses per page (max 50)"),
    language: z.string().default("en").describe("Language code, e.g. 'en', 'ar'"),
    translations: z
      .string()
      .optional()
      .describe("Comma-separated translation resource IDs, e.g. '131'"),
  }),
  execute: async ({ chapter_number, page, per_page, language, translations }) => {
    const params = new URLSearchParams({
      language,
      page: String(page),
      per_page: String(per_page),
      fields: "text_uthmani,verse_key,juz_number,page_number",
      words: "false",
    });
    if (translations) params.set("translations", translations);
    return quranFetch(`/verses/by_chapter/${chapter_number}?${params}`);
  },
});

/**
 * Get a random verse.
 */
export const getRandomVerseTool = tool({
  description:
    "Fetch a random Quran verse with its Uthmani text and translation. Use this when the user asks for a random ayah or a verse of the day.",
  parameters: z.object({
    language: z.string().default("en").describe("Language code, e.g. 'en', 'ar'"),
    translations: z
      .string()
      .optional()
      .describe("Comma-separated translation resource IDs, e.g. '131'"),
  }),
  execute: async ({ language, translations }) => {
    const params = new URLSearchParams({
      language,
      fields: "text_uthmani,verse_key,juz_number,page_number",
      words: "false",
    });
    if (translations) params.set("translations", translations);
    return quranFetch(`/verses/random?${params}`);
  },
});

/**
 * List all chapters (surahs).
 */
export const listChaptersTool = tool({
  description:
    "List all 114 chapters (surahs) of the Quran with their names, revelation place, and verse counts. Use this when the user asks for a list of surahs or wants to find a surah by name.",
  parameters: z.object({
    language: z
      .string()
      .default("en")
      .describe("Language code for translated chapter names, e.g. 'en', 'ar'"),
  }),
  execute: async ({ language }) => {
    return quranFetch(`/chapters?language=${language}`);
  },
});

/**
 * Get info about a single chapter.
 */
export const getChapterTool = tool({
  description:
    "Get details about a specific Quran chapter (surah) including its name, revelation place, verse count, and translated name. Use this when the user asks about a specific surah.",
  parameters: z.object({
    chapter_id: z
      .number()
      .int()
      .min(1)
      .max(114)
      .describe("Chapter (surah) number between 1 and 114"),
    language: z.string().default("en").describe("Language code, e.g. 'en', 'ar'"),
  }),
  execute: async ({ chapter_id, language }) => {
    return quranFetch(`/chapters/${chapter_id}?language=${language}`);
  },
});

/**
 * Get introductory info / tafsir summary for a chapter.
 */
export const getChapterInfoTool = tool({
  description:
    "Get a brief introductory text (short tafsir / background) for a Quran chapter. Use this when the user asks for an introduction or background about a surah.",
  parameters: z.object({
    chapter_id: z
      .number()
      .int()
      .min(1)
      .max(114)
      .describe("Chapter (surah) number between 1 and 114"),
    language: z.string().default("en").describe("Language code, e.g. 'en', 'ar'"),
  }),
  execute: async ({ chapter_id, language }) => {
    return quranFetch(`/chapters/${chapter_id}/info?language=${language}`);
  },
});

/**
 * Search the Quran.
 */
export const searchQuranTool = tool({
  description:
    "Search the Quran for a keyword or phrase. Returns matching verses with their text and location. Use this when the user asks to find verses containing a specific word or topic.",
  parameters: z.object({
    q: z.string().describe("Search query text"),
    size: z
      .number()
      .int()
      .min(1)
      .max(50)
      .default(20)
      .describe("Number of results to return (max 50)"),
    page: z.number().int().min(1).default(1).describe("Page number"),
    language: z
      .string()
      .default("en")
      .describe("Language code for translations, e.g. 'en', 'ar'"),
  }),
  execute: async ({ q, size, page, language }) => {
    const params = new URLSearchParams({
      q,
      size: String(size),
      page: String(page),
      language,
    });
    return quranFetch(`/search?${params}`);
  },
});

/**
 * List available translations.
 */
export const listTranslationsTool = tool({
  description:
    "List all available Quran translation resources with their IDs, author names, and languages. Use this when the user wants to know which translations are available or asks for a translation by a specific scholar.",
  parameters: z.object({
    language: z
      .string()
      .optional()
      .describe("Filter translations by language code, e.g. 'en', 'ar', 'fr'"),
  }),
  execute: async ({ language }) => {
    const params = language ? `?language=${language}` : "";
    return quranFetch(`/resources/translations${params}`);
  },
});

/**
 * List all juzs.
 */
export const listJuzsTool = tool({
  description:
    "List all 30 juzs (parts) of the Quran with their verse mappings. Use this when the user asks about juz divisions.",
  parameters: z.object({}),
  execute: async () => {
    return quranFetch("/juzs");
  },
});
