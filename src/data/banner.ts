/**
 * Owner-supplied Arabic promotional banner (Banner_AR.pdf).
 * JPEG bytes are the embedded page images extracted without recompression.
 */
export const OWNER_BANNER_PAGES = [
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

export const OWNER_BANNER_PAGE_COUNT = OWNER_BANNER_PAGES.length;
