import { Hono } from "hono";
import { lookup } from "node:dns/promises";
import { authMiddleware } from "../middleware/auth";

const app = new Hono();

app.use("/*", authMiddleware);

// Private / reserved IP ranges that must never be reachable via SSRF.
// Covers: loopback, RFC-1918 private, link-local (incl. AWS metadata 169.254.169.254),
// IPv6 loopback/link-local/unique-local, and the "unspecified" address.
const PRIVATE_IP_RE =
  /^(127\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.|169\.254\.|0\.0\.0\.0$|::1$|fc00:|fd[0-9a-f]{2}:|fe80:)/i;

const BLOCKED_HOSTNAMES = new Set([
  "localhost",
  "0.0.0.0",
  "metadata.google.internal",
  "metadata.internal",
]);

const MAX_HTML_SIZE = 512 * 1024; // 512 KB — enough for any real page's <head>

async function isSsrfTarget(hostname: string): Promise<boolean> {
  if (BLOCKED_HOSTNAMES.has(hostname.toLowerCase())) return true;
  // If the hostname itself looks like a private IP, block immediately
  if (PRIVATE_IP_RE.test(hostname)) return true;

  try {
    const { address } = await lookup(hostname);
    return PRIVATE_IP_RE.test(address);
  } catch {
    // Unresolvable hostname — block to be safe
    return true;
  }
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

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

  if (await isSsrfTarget(parsed.hostname)) {
    return c.json({ error: "URL not allowed" }, 403);
  }

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Joory/1.0)" },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) return c.json({ error: "Failed to fetch" }, 502);

    const rawHtml = await response.text();
    // Truncate to avoid ReDoS on huge documents; we only need the <head>
    const html =
      rawHtml.length > MAX_HTML_SIZE ? rawHtml.slice(0, MAX_HTML_SIZE) : rawHtml;

    // Extracts a meta tag value for a given property/name.
    // property is always a hardcoded string but we escape it defensively.
    // Content is bounded to 500 chars via [^"']{0,500} to prevent backtracking.
    const getMeta = (property: string): string | null => {
      const p = escapeRegExp(property);
      const pattern1 = new RegExp(
        `<meta[^>]+(?:property|name)=["']${p}["'][^>]+content=["']([^"']{0,500})["']`,
        "i"
      );
      const pattern2 = new RegExp(
        `<meta[^>]+content=["']([^"']{0,500})["'][^>]+(?:property|name)=["']${p}["']`,
        "i"
      );
      return html.match(pattern1)?.[1] ?? html.match(pattern2)?.[1] ?? null;
    };

    const title =
      getMeta("og:title") ??
      getMeta("twitter:title") ??
      html.match(/<title[^>]*>([^<]{0,200})<\/title>/i)?.[1] ??
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
