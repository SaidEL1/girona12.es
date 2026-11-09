import type { SiteConfig } from "@/types";

/**
 * Canonical site config. Contact, location, and reservation targets
 * remain unset until real details are supplied.
 */
export const siteConfig: SiteConfig = {
  brandName: "Restaurante Al Andalus",
  legalName: "Gerona 12 — Restaurante Al Andalus",
  defaultLocale: "en",
  contact: {},
  location: {},
  social: [],
  reservation: {
    note: "Reservation channel pending confirmation.",
  },
};
