import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { getPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/my-story", "/free-stuff", "/how-i-work", "/writing"].map((p) => ({
    url: `${siteUrl}${p}`,
  }));
  const posts = getPosts().map((p) => ({
    url: `${siteUrl}/writing/${p.slug}`,
    lastModified: p.date,
  }));
  return [...pages, ...posts];
}
