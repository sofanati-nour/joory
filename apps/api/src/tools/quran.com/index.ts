import { tool, jsonSchema } from "ai";

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

// Helper: OpenAI strict mode requires all properties in `required` and
// `additionalProperties: false`. Optional params use `["type", "null"]`.
function strictSchema(props: Record<string, any>, required: string[] = []) {
  const allKeys = Object.keys(props);
  const properties: Record<string, any> = {};
  for (const key of allKeys) {
    if (required.includes(key)) {
      properties[key] = props[key];
    } else {
      // Make nullable for strict mode
      const { type, ...rest } = props[key];
      properties[key] = { type: [type, "null"], ...rest };
    }
  }
  return jsonSchema({
    type: "object" as const,
    properties,
    required: allKeys,
    additionalProperties: false,
  });
}

const EMPTY_PARAMS = jsonSchema({
  type: "object" as const,
  properties: {},
  additionalProperties: false,
});

/**
 * Get a single verse by its key (e.g. "2:255" for Ayat al-Kursi).
 */
export const getVerseTool = tool({
  description:
    "Fetch a specific Quran verse by its key (chapter:verse, e.g. '2:255'). Returns the verse text (Uthmani script), its translation, and metadata. Use this when the user asks about a specific ayah or verse.",
  parameters: strictSchema({
    verse_key: { type: "string", description: "Verse key in chapter:verse format, e.g. '1:1' or '2:255'" },
    language: { type: "string", description: "Language code, e.g. 'en', 'ar'" },
    translations: { type: "string", description: "Comma-separated translation resource IDs (e.g. '131' for Sahih International). Pass null to use the default." },
  }, ["verse_key"]),
  execute: async ({ verse_key, language, translations }: { verse_key: string; language?: string | null; translations?: string | null }) => {
    const params = new URLSearchParams({ language: language ?? "en" });
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
  parameters: strictSchema({
    chapter_number: { type: "integer", description: "Chapter (surah) number between 1 and 114", minimum: 1, maximum: 114 },
    page: { type: "integer", description: "Page number for pagination", minimum: 1 },
    per_page: { type: "integer", description: "Number of verses per page (max 50)", minimum: 1, maximum: 50 },
    language: { type: "string", description: "Language code, e.g. 'en', 'ar'" },
    translations: { type: "string", description: "Comma-separated translation resource IDs, e.g. '131'" },
  }, ["chapter_number"]),
  execute: async ({ chapter_number, page, per_page, language, translations }: { chapter_number: number; page?: number | null; per_page?: number | null; language?: string | null; translations?: string | null }) => {
    const params = new URLSearchParams({
      language: language ?? "en",
      page: String(page ?? 1),
      per_page: String(per_page ?? 10),
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
  parameters: strictSchema({
    language: { type: "string", description: "Language code, e.g. 'en', 'ar'" },
    translations: { type: "string", description: "Comma-separated translation resource IDs, e.g. '131'" },
  }),
  execute: async ({ language, translations }: { language?: string | null; translations?: string | null }) => {
    const params = new URLSearchParams({
      language: language ?? "en",
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
  parameters: strictSchema({
    language: { type: "string", description: "Language code for translated chapter names, e.g. 'en', 'ar'" },
  }),
  execute: async ({ language }: { language?: string | null }) => {
    return quranFetch(`/chapters?language=${language ?? "en"}`);
  },
});

/**
 * Get info about a single chapter.
 */
export const getChapterTool = tool({
  description:
    "Get details about a specific Quran chapter (surah) including its name, revelation place, verse count, and translated name. Use this when the user asks about a specific surah.",
  parameters: strictSchema({
    chapter_id: { type: "integer", description: "Chapter (surah) number between 1 and 114", minimum: 1, maximum: 114 },
    language: { type: "string", description: "Language code, e.g. 'en', 'ar'" },
  }, ["chapter_id"]),
  execute: async ({ chapter_id, language }: { chapter_id: number; language?: string | null }) => {
    return quranFetch(`/chapters/${chapter_id}?language=${language ?? "en"}`);
  },
});

/**
 * Get introductory info / tafsir summary for a chapter.
 */
export const getChapterInfoTool = tool({
  description:
    "Get a brief introductory text (short tafsir / background) for a Quran chapter. Use this when the user asks for an introduction or background about a surah.",
  parameters: strictSchema({
    chapter_id: { type: "integer", description: "Chapter (surah) number between 1 and 114", minimum: 1, maximum: 114 },
    language: { type: "string", description: "Language code, e.g. 'en', 'ar'" },
  }, ["chapter_id"]),
  execute: async ({ chapter_id, language }: { chapter_id: number; language?: string | null }) => {
    return quranFetch(`/chapters/${chapter_id}/info?language=${language ?? "en"}`);
  },
});

/**
 * Search the Quran.
 */
export const searchQuranTool = tool({
  description:
    "Search the Quran for a keyword or phrase. Returns matching verses with their text and location. Use this when the user asks to find verses containing a specific word or topic.",
  parameters: strictSchema({
    q: { type: "string", description: "Search query text" },
    size: { type: "integer", description: "Number of results to return (max 50)", minimum: 1, maximum: 50 },
    page: { type: "integer", description: "Page number", minimum: 1 },
    language: { type: "string", description: "Language code for translations, e.g. 'en', 'ar'" },
  }, ["q"]),
  execute: async ({ q, size, page, language }: { q: string; size?: number | null; page?: number | null; language?: string | null }) => {
    const params = new URLSearchParams({
      q,
      size: String(size ?? 20),
      page: String(page ?? 1),
      language: language ?? "en",
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
  parameters: strictSchema({
    language: { type: "string", description: "Filter translations by language code, e.g. 'en', 'ar', 'fr'" },
  }),
  execute: async ({ language }: { language?: string | null }) => {
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
  parameters: EMPTY_PARAMS,
  execute: async () => {
    return quranFetch("/juzs");
  },
});
