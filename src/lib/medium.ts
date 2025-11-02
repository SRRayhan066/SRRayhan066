// lib/medium.ts
import Parser from "rss-parser";

export type MediumPost = {
  id: string;
  title: string;
  link: string;
  pubDate?: string;
  isoDate?: string | null;
  author?: string;
  excerpt?: string;
  image?: string | null;
};

const parser = new Parser();

/**
 * Try to extract an image URL from Medium's HTML content (if any).
 */
function extractImageFromContent(content: string | undefined): string | null {
  if (!content) return null;
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imgMatch ? imgMatch[1] : null;
}

/**
 * Simple in-memory cache to avoid repeated parsing during dev/short-lived server instances.
 * Keyed by username. Each entry: { data, expiresAt }
 */
const globalAny = globalThis as any;
if (!globalAny.__MEDIUM_CACHE) {
  globalAny.__MEDIUM_CACHE = new Map<
    string,
    { data: MediumPost[]; expiresAt: number }
  >();
}
const CACHE = globalAny.__MEDIUM_CACHE as Map<
  string,
  { data: MediumPost[]; expiresAt: number }
>;

export async function getMediumPosts(
  username: string,
  opts?: { limit?: number; revalidateSeconds?: number }
): Promise<MediumPost[]> {
  const limit = opts?.limit ?? 10;
  const revalidateSeconds = opts?.revalidateSeconds ?? 3600; // 1 hour default

  const cacheKey = username.toLowerCase();

  // Check memory cache first
  const cached = CACHE.get(cacheKey);
  const now = Date.now();
  if (cached && cached.expiresAt > now) {
    return cached.data.slice(0, limit);
  }

  // Medium RSS URL for a user
  const feedUrl = `https://medium.com/feed/@${username}`;

  // Use Next.js fetch with revalidation metadata. In Next.js 15 App Router server component
  // `fetch` accepts { next: { revalidate: seconds } } to cache server-side.
  // (If this environment ignores it, in-memory cache still helps.)
  const res = await fetch(feedUrl, {
    // Next.js fetch caching hint; safe to include in Next 13/14/15 App Router.
    next: { revalidate: revalidateSeconds },
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; rss-fetcher/1.0)",
      Accept: "application/rss+xml, application/xml, text/xml",
    },
  });

  if (!res.ok) {
    // if Medium returned a redirect or 404, throw or return empty list
    console.warn(`Failed to fetch Medium RSS for ${username}: ${res.status}`);
    return [];
  }

  const xml = await res.text();

  const feed = await parser.parseString(xml);

  const posts: MediumPost[] = (feed.items || []).map((item: any) => {
    const image =
      extractImageFromContent(item.content) ||
      extractImageFromContent(item["content:encoded"]) ||
      null;

    return {
      id: item.guid || item.link || item.title,
      title: item.title || "Untitled",
      link: item.link || "",
      pubDate: item.pubDate,
      isoDate: item.isoDate ?? null,
      author: item.creator || item.author || feed.title,
      excerpt: item.contentSnippet || item.summary || "",
      image,
    };
  });

  // Save to in-memory cache
  CACHE.set(cacheKey, {
    data: posts,
    expiresAt: now + revalidateSeconds * 1000,
  });

  return posts.slice(0, limit);
}
