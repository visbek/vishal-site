import type { Metadata } from "next";
import { home } from "@/content/site";

// The public address of the site. Change it here if the domain ever changes.
export const siteUrl = "https://www.vishalboring.com";

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

export const homeMetadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Vishal Thakur",
    title: "Vishal Thakur",
    description: defaultDescription,
    url: "/",
    images: ogImages,
  },
};
