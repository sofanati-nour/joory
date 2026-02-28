type RssItem = {
  title: string;
  link: string;
  description: string;
  image: string | null;
};

function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return (match?.[1] ?? match?.[2] ?? "").trim();
}

function extractAttr(xml: string, tag: string, attr: string): string | null {
  const match = xml.match(new RegExp(`<${tag}[^>]*\\s${attr}=["']([^"']+)["']`, "i"));
  return match?.[1] ?? null;
}

export function parseRssFeed(xml: string): RssItem[] {
  const items: RssItem[] = [];
  const itemRegex = /<item[\s>]([\s\S]*?)<\/item>/gi;
  let match: RegExpExecArray | null;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = extractTag(block, "title");
    const link =
      extractTag(block, "link") ||
      extractAttr(block, "link", "href") ||
      "";
    const description = extractTag(block, "description").replace(/<[^>]+>/g, "").trim();
    const image =
      extractAttr(block, "enclosure", "url") ||
      extractAttr(block, "media:content", "url") ||
      extractAttr(block, "media:thumbnail", "url") ||
      null;

    if (title && link) {
      items.push({ title, link, description, image });
    }
  }

  return items;
}

export function formatRssFeedAsMarkdown(items: RssItem[], sourceName: string): string {
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
