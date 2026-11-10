import type { Dictionary } from "@/types";

export const en: Dictionary = {
  locale: "en",
  brand: {
    wordmark: "Gerona 12",
    name: "Restaurante Al Andalus",
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
    gallery: {
      eyebrow: "Gallery",
      title: "The table, the light, the pace",
      body: "An editorial gallery of atmosphere — cooking, service, and dining room in an intimate, premium key.",
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
  footer: {
    rights: "All rights reserved.",
    discovery: "Al Baraka Digital",
    contactPending:
      "Phone, address, and opening hours will be published once verified.",
    photoCredit: "Photography via Unsplash (Unsplash License).",
  },
  a11y: {
    skipToContent: "Skip to content",
    languageSelector: "Language",
  },
};
