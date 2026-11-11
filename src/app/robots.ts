import type { MetadataRoute } from "next";
import { CRAWL_ORIGIN } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${CRAWL_ORIGIN}/sitemap.xml`,
    host: CRAWL_ORIGIN,
  };
}
