import type { MetadataRoute } from "next";
import { supportedLocales } from "@/data/i18n";
import { localizedPath } from "@/lib/i18n";
import { CRAWL_ORIGIN } from "@/lib/site-url";

const STATIC_PATHS = [
  "",
  "/restaurante",
  "/galeria",
  "/contacto",
  "/menu-original",
  "/menu",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of supportedLocales) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: `${CRAWL_ORIGIN}${localizedPath(locale, path)}`,
        lastModified: new Date(),
        changeFrequency: path === "/menu-original" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/menu-original" ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
