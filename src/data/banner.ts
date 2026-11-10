import type { LocaleCode } from "@/types";

export type OwnerBannerPage = {
  id: string;
  src: string;
  width: number;
  height: number;
};

/**
 * Owner-supplied promotional banners by locale.
 * - `ar` → Banner_AR.pdf
 * - `es` → Banner_IS.pdf (Spanish; owner filename Banner_IS)
 * - `en` → Spanish banner until an English Banner_EN is supplied
 *
 * JPEG bytes are the embedded page images extracted without recompression.
 */
const BANNER_AR_PAGES: readonly OwnerBannerPage[] = [
  {
    id: "banner-ar-01",
    src: "/brand/banner/banner-ar-01.jpg",
    width: 1055,
    height: 1491,
  },
  {
    id: "banner-ar-02",
    src: "/brand/banner/banner-ar-02.jpg",
    width: 1055,
    height: 1491,
  },
] as const;

const BANNER_ES_PAGES: readonly OwnerBannerPage[] = [
  {
    id: "banner-es-01",
    src: "/brand/banner/banner-es-01.jpg",
    width: 1055,
    height: 1491,
  },
  {
    id: "banner-es-02",
    src: "/brand/banner/banner-es-02.jpg",
    width: 1055,
    height: 1491,
  },
] as const;

/** @deprecated Use getOwnerBannerPages(locale) — kept for any legacy imports. */
export const OWNER_BANNER_PAGES = BANNER_AR_PAGES;

export function getOwnerBannerPages(locale: LocaleCode): readonly OwnerBannerPage[] {
  if (locale === "ar") return BANNER_AR_PAGES;
  // Spanish asset for ES; EN falls back to Spanish until Banner_EN exists.
  return BANNER_ES_PAGES;
}

export function getOwnerBannerPageCount(locale: LocaleCode): number {
  return getOwnerBannerPages(locale).length;
}
