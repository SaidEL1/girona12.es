/**
 * Exact original GERONA 12 PDF page images (1250×1773 JPEGs).
 * Do not reorder, drop, or replace entries — anomalies are intentional.
 */
export const ORIGINAL_MENU_PAGE_COUNT = 26 as const;

export const ORIGINAL_MENU_PAGES = Array.from(
  { length: ORIGINAL_MENU_PAGE_COUNT },
  (_, index) => {
    const number = index + 1;
    const padded = String(number).padStart(2, "0");
    return {
      number,
      id: `menu-page-${padded}`,
      src: `/menu/pages/page-${padded}.jpg`,
      width: 1250,
      height: 1773,
      // Language-neutral alt (brand + page index). Viewer chrome stays localized via i18n.
      alt: `Gerona 12 — ${number} / ${ORIGINAL_MENU_PAGE_COUNT}`,
    } as const;
  },
);

export type OriginalMenuPage = (typeof ORIGINAL_MENU_PAGES)[number];

/** Landing preview uses an actual cover page from the original set. */
export const ORIGINAL_MENU_PREVIEW = ORIGINAL_MENU_PAGES[0]!;
