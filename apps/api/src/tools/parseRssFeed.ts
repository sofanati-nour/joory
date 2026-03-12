import { XMLParser } from "fast-xml-parser";

const MAX_XML_SIZE = 2 * 1024 * 1024; // 2 MB — generous but bounded

type RssItem = {
  title: string;
  link: string;
  description: string;
  image: string | null;
};

/**
 * Coerce a fast-xml-parser value to a plain string.
 * Handles: plain string, number, CDATA wrapper { __cdata: "..." },
 * and Atom <link href="..."> objects { @_href: "..." }.
 */
function getText(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    if ("__cdata" in obj) return String(obj.__cdata ?? "");
    if ("@_href" in obj) return String(obj["@_href"] ?? "");
  }
  return "";
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  cdataPropName: "__cdata",
  trimValues: true,
  // Ensure <item> and <entry> are always arrays, even when only one exists
  isArray: (name) => name === "item" || name === "entry",
  allowBooleanAttributes: true,
});

const DEFAULT_MAX_ITEMS = 20;

export function parseRssFeed(xml: string, maxItems = DEFAULT_MAX_ITEMS): RssItem[] {
  const safeXml = xml.length > MAX_XML_SIZE ? xml.slice(0, MAX_XML_SIZE) : xml;

  let parsed: Record<string, unknown>;
  try {
    parsed = parser.parse(safeXml);
  } catch {
    return [];
  }

  // Support both RSS (<rss><channel>) and Atom (<feed>) formats
  const channel =
    (parsed?.rss as Record<string, unknown>)?.channel ??
    (parsed?.feed as Record<string, unknown>);

  if (!channel) return [];

  // RSS uses <item>, Atom uses <entry>
  const rawItems =
    (channel as Record<string, unknown>).item ??
    (channel as Record<string, unknown>).entry;

  const items: unknown[] = Array.isArray(rawItems)
    ? rawItems
    : rawItems
    ? [rawItems]
    : [];

  const result: RssItem[] = [];

  for (const item of items) {
    if (!item || typeof item !== "object") continue;
    const i = item as Record<string, unknown>;

    const title = getText(i.title);
    const link =
      getText(i.link) ||
      getText((i["atom:link"] as Record<string, unknown>)?.["@_href"]) ||
      "";

    // Strip any HTML tags from description, bounding the tag match to avoid
    // catastrophic backtracking on malformed input
    const description = getText(i.description)
      .replace(/<[^>]{0,1000}>/g, "")
      .trim();

    const image =
      getText((i.enclosure as Record<string, unknown>)?.["@_url"]) ||
      getText((i["media:content"] as Record<string, unknown>)?.["@_url"]) ||
      getText((i["media:thumbnail"] as Record<string, unknown>)?.["@_url"]) ||
      null;

    if (title && link) {
      result.push({ title, link, description, image: image || null });
      if (result.length >= maxItems) break;
    }
  }

  return result;
}

export function formatRssFeedAsMarkdown(
  items: RssItem[],
  sourceName: string
): string {
  if (items.length === 0) return `No articles found from ${sourceName}.`;

  const lines = [`*Source: ${sourceName}*\n`];

  for (const item of items) {
    lines.push(`**[${item.title}](${item.link})**`);
    if (item.image) lines.push(`![${item.title}](${item.image})`);
    if (item.description) lines.push(item.description);
    lines.push("");
  }

  return lines.join("\n");
}
