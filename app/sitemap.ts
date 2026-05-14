import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://golalmar.es";
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
