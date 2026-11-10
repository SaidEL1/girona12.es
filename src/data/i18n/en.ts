import type { Dictionary } from "@/types";

export const en: Dictionary = {
  locale: "en",
  brand: {
    wordmark: "Gerona 12",
    name: "Al Andalus Restaurant",
    tagline: "Contemporary Andalusian hospitality",
  },
  nav: {
    home: "Home",
    restaurant: "The restaurant",
    menu: "Menu",
    gallery: "Gallery",
    contact: "Contact",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  home: {
    headline: "A Taste of Andalusian Heritage",
    support:
      "Restaurante Al Andalus offers a serene table where Andalusian sensibility is expressed through hospitality, unhurried rhythm, and cooking with character.",
    ctaMenu: "Explore Our Menu",
    ctaDiscover: "Discover Our Restaurant",
  },
  sections: {
    intro: {
      eyebrow: "Our Story",
      title: "A warm, contemporary Andalusian presence",
      body: "Gerona 12 presents Restaurante Al Andalus as a carefully composed hospitality space: restrained light, noble materials, and a kitchen that honours the character of the south with a modern eye. No artifice — only attention.",
    },
    menu: {
      eyebrow: "The menu",
      title: "Discover the house cuisine",
      body: "The full menu is published from the official PDF. Explore categories once the source document is available in the repository.",
      cta: "Explore Our Menu",
      pendingNote:
        "Dishes will appear after verified extraction from the official PDF. No provisional plates or prices are shown.",
    },
    digitalMenu: {
      eyebrow: "Digital menu",
      title: "The original menu, page by page",
      body: "Browse the official Gerona 12 menu exactly as in the PDF: all 26 original pages, with no redesign or content changes.",
      cta: "View our menu",
      previewAlt: "Original cover page of the Gerona 12 digital menu",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "The table, the light, the pace",
      body: "The restaurant’s visual gallery will be published with real photographs once the owner provides them.",
      placeholder:
        "Reserved for official restaurant photographs. No provisional or stock images are shown.",
    },
    closing: {
      title: "The table awaits",
      body: "Explore the menu when it is available, or continue discovering the character of Al Andalus.",
      ctaMenu: "Explore Our Menu",
      ctaContact: "Contact Us",
    },
  },
  menuPage: {
    title: "Our menu",
    eyebrow: "Menu",
    intro:
      "The Al Andalus menu is built exclusively from the official document. Only verified dishes and prices are published.",
    searchPlaceholder: "Search a dish…",
    searchLabel: "Search the menu",
    allCategories: "All",
    emptyTitle: "Menu in preparation",
    emptyBody:
      "The source PDF (docs/source/gerona12-full-menu.pdf) is not yet in the repository. No invented dishes are shown.",
    noResultsTitle: "No results",
    noResultsBody: "Try another search term or choose a different category.",
    resultsCount: "dishes",
    priceUnavailable: "Price unavailable",
    backHome: "Back to home",
  },
  originalMenuPage: {
    title: "Original menu",
    intro:
      "Exact view of the original Gerona 12 PDF menu pages.",
    previous: "Previous page",
    next: "Next page",
    page: "Page",
    pagesWord: "pages",
    jumpLabel: "Jump to a page",
    jumpTitle: "Choose a page",
    jumpConfirm: "Go",
    jumpCancel: "Cancel",
  },
  footer: {
    rights: "All rights reserved.",
    discovery: "Al Baraka Digital",
    contactPending:
      "Phone, address, and opening hours will be published once verified.",
  },
  a11y: {
    skipToContent: "Skip to content",
    languageSelector: "Language",
    primaryNav: "Primary navigation",
    footerNav: "Footer navigation",
  },
  designFoundation: {
    title: "Gerona 12 visual foundation",
    intro:
      "Decorative foundations derived from the original menu: emerald, gold, ivory, and Islamic geometry. This page is for design verification only.",
    phaseLabel: "Phase 2A",
    tokensHeading: "Palette",
    patternHeading: "Geometric backgrounds",
    patternReadabilityNote:
      "Menu geometric motif · soft opacity to preserve readability",
    frameHeading: "Ornamental frames",
    separatorHeading: "Separators",
    bandHeading: "Menu bands",
    note: "The 26 original menu JPEGs are unmodified. No external photography.",
    swatches: {
      emerald: "Emerald",
      deepGreen: "Deep green",
      gold: "Royal gold",
      ivory: "Ivory",
      darkText: "Dark text",
    },
  },
};
