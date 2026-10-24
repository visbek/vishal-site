import type { Metadata } from "next";
import { home } from "@/content/site";

// The web address is picked up automatically on Vercel (including your own
// domain once it is connected). NEXT_PUBLIC_SITE_URL can override it.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const defaultDescription = home.description;

export const ogImages = [
  { url: "/vishal.jpg", width: 840, height: 1000, alt: "Vishal Thakur" },
];

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Vishal Thakur",
      title: `${title} | Vishal Thakur`,
      description,
      url: path,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Vishal Thakur`,
      description,
      images: ogImages.map((i) => i.url),
    },
  };
}
