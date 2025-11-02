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

function extractImageFromContent(content: string | undefined): string | null {
  if (!content) return null;
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imgMatch ? imgMatch[1] : null;
}

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

export async function getMediumPosts(): Promise<MediumPost[]> {
  const username = process.env.MEDIUM_USERNAME!;
  const limit = 10;
  const revalidateSeconds = 3600;

  const cacheKey = username.toLowerCase();

  const cached = CACHE.get(cacheKey);
  const now = Date.now();
  if (cached && cached.expiresAt > now) {
    return cached.data.slice(0, limit);
  }

  const feedUrl = `https://medium.com/feed/@${username}`;

  const res = await fetch(feedUrl, {
    next: { revalidate: revalidateSeconds },
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; rss-fetcher/1.0)",
      Accept: "application/rss+xml, application/xml, text/xml",
    },
  });

  if (!res.ok) {
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

  CACHE.set(cacheKey, {
    data: posts,
    expiresAt: now + revalidateSeconds * 1000,
  });

  return posts.slice(0, limit);
}
