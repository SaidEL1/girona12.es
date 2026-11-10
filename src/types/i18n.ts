import type { LocaleCode } from "./i18n-locale";

export type { LocaleCode };

export type TextDirection = "ltr" | "rtl";

export interface LocaleConfig {
  code: LocaleCode;
  label: string;
  nativeLabel: string;
  dir: TextDirection;
  /** BCP 47 / HTML lang attribute */
  htmlLang: string;
  /** Open Graph locale tag */
  ogLocale: string;
}

export interface Dictionary {
  locale: LocaleCode;
  brand: {
    wordmark: string;
    name: string;
    tagline: string;
  };
  nav: {
    home: string;
    restaurant: string;
    menu: string;
    gallery: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  home: {
    headline: string;
    support: string;
    ctaMenu: string;
    ctaDiscover: string;
  };
  sections: {
    intro: {
      eyebrow: string;
      title: string;
      body: string;
    };
    menu: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
      pendingNote: string;
    };
    digitalMenu: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
      previewAlt: string;
    };
    gallery: {
      eyebrow: string;
      title: string;
      body: string;
      /** Owner Banner AR — primary page alt */
      bannerAltPrimary: string;
      /** Owner Banner AR — secondary page alt */
      bannerAltSecondary: string;
      bannerCaption: string;
      /** Remaining note until more restaurant photographs arrive */
      placeholder: string;
    };
    closing: {
      title: string;
      body: string;
      ctaMenu: string;
      ctaContact: string;
    };
    contact: {
      eyebrow: string;
      /** Unique page H1 */
      title: string;
      body: string;
      /** Section label above contact rows */
      detailsLabel: string;
      phoneLabel: string;
      emailLabel: string;
      addressLabel: string;
      /** CTA opening Google Maps for the verified address */
      directionsLabel: string;
    };
  };
  menuPage: {
    title: string;
    eyebrow: string;
    intro: string;
    searchPlaceholder: string;
    searchLabel: string;
    allCategories: string;
    emptyTitle: string;
    emptyBody: string;
    noResultsTitle: string;
    noResultsBody: string;
    resultsCount: string;
    priceUnavailable: string;
    backHome: string;
  };
  originalMenuPage: {
    title: string;
    intro: string;
    previous: string;
    next: string;
    page: string;
    pagesWord: string;
    jumpLabel: string;
    jumpTitle: string;
    jumpConfirm: string;
    jumpCancel: string;
  };
  footer: {
    rights: string;
    discovery: string;
  };
  a11y: {
    skipToContent: string;
    languageSelector: string;
    primaryNav: string;
    footerNav: string;
  };
  /** Phase 2A foundation showcase — not marketing copy */
  designFoundation: {
    title: string;
    intro: string;
    phaseLabel: string;
    tokensHeading: string;
    patternHeading: string;
    patternReadabilityNote: string;
    frameHeading: string;
    separatorHeading: string;
    bandHeading: string;
    note: string;
    swatches: {
      emerald: string;
      deepGreen: string;
      gold: string;
      ivory: string;
      darkText: string;
    };
  };
}
