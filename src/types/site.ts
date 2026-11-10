/**
 * Site content stubs. Contact, hours, and map details stay empty
 * until real information is provided — no placeholder addresses or phones.
 */

export interface ContactInfo {
  email?: string;
  phone?: string;
  whatsapp?: string;
  addressLines?: string[];
  city?: string;
  postalCode?: string;
  country?: string;
}

export interface LocationInfo {
  /** Human-readable label once confirmed */
  label?: string;
  /** Latitude / longitude once confirmed — omit until verified */
  coordinates?: {
    lat: number;
    lng: number;
  };
  /** Map embed or directions URL once available */
  mapUrl?: string;
  directionsNote?: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export interface SiteConfig {
  brandName: string;
  legalName?: string;
  defaultLocale: "es" | "en" | "ar";
  contact: ContactInfo;
  location: LocationInfo;
  social: SocialLink[];
  reservation: {
    /** External booking URL or tel: link — leave empty until confirmed */
    href?: string;
    note?: string;
  };
}
