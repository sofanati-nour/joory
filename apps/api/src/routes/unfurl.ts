import { Hono } from "hono";
import { authMiddleware } from "../middleware/auth";

const app = new Hono();

app.use("/*", authMiddleware);

app.get("/", async (c) => {
  const url = c.req.query("url");
  if (!url) return c.json({ error: "URL required" }, 400);

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return c.json({ error: "Invalid URL" }, 400);
  }

  if (!["http:", "https:"].includes(parsed.protocol)) {
    return c.json({ error: "Only HTTP/HTTPS URLs allowed" }, 400);
  }

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Joory/1.0)" },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) return c.json({ error: "Failed to fetch" }, 502);

    const html = await response.text();

    // Extracts a meta tag value for a given property/name, handling both attribute orderings
    const getMeta = (property: string): string | null => {
      const pattern1 = new RegExp(
        `<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`,
        "i"
      );
      const pattern2 = new RegExp(
        `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${property}["']`,
        "i"
      );
      return html.match(pattern1)?.[1] ?? html.match(pattern2)?.[1] ?? null;
    };

    const title =
      getMeta("og:title") ??
      getMeta("twitter:title") ??
      html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] ??
      null;

    const description =
      getMeta("og:description") ??
      getMeta("twitter:description") ??
      getMeta("description") ??
      null;

    const image = getMeta("og:image") ?? getMeta("twitter:image") ?? null;
    const siteName = getMeta("og:site_name") ?? parsed.hostname;

    return c.json({
      url,
      title: title?.trim().slice(0, 200) ?? null,
      description: description?.trim().slice(0, 300) ?? null,
      image: image ?? null,
      siteName,
    });
  } catch {
    return c.json({ error: "Failed to fetch URL" }, 502);
  }
});

export default app;
