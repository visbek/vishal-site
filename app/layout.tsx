import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteUrl, defaultDescription, ogImages } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Vishal Thakur", template: "%s | Vishal Thakur" },
  description: defaultDescription,
  verification: { google: "WKExxiNEyWL9c34EwUL4hXGCTihH5XmkoN5zoMto2mA" },
  openGraph: {
    type: "website",
    siteName: "Vishal Thakur",
    title: "Vishal Thakur",
    description: defaultDescription,
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Thakur",
    description: defaultDescription,
    images: ogImages.map((i) => i.url),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
