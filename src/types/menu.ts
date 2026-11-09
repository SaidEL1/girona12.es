/**
 * Menu data model for Restaurante Al Andalus.
 * Populated later from PDF extraction — do not invent dishes or prices.
 * Multilingual fields stay empty until verified translations exist.
 */

import type { LocaleCode } from "./i18n-locale";

export type DietaryLabel =
  | "vegetarian"
  | "vegan"
  | "gluten_free"
  | "halal"
  | "spicy"
  | "nuts"
  | "dairy";

/**
 * Localized string bag for ES / EN / AR.
 * Only fill locales that have verified content from the official menu PDF.
 */
export type LocalizedText = Partial<Record<LocaleCode, string>>;

export interface MenuItem {
  id: string;
  /** Category slug this item belongs to */
  categoryId: string;
  /** Verified localized names only — never invent translations */
  name: LocalizedText;
  /** Verified localized descriptions only */
  description?: LocalizedText;
  /** Price in EUR (major units). Always formatted LTR. */
  priceEur: number;
  imageSrc?: string;
  dietaryLabels?: DietaryLabel[];
  featured?: boolean;
  sortOrder?: number;
}

export interface MenuCategory {
  id: string;
  slug: string;
  /** Verified localized category titles only */
  name: LocalizedText;
  description?: LocalizedText;
  sortOrder?: number;
}

export interface MenuDataset {
  categories: MenuCategory[];
  items: MenuItem[];
  /** ISO date string when this dataset was last synced from the PDF */
  updatedAt?: string;
  /** Internal developer note (not user-facing copy) */
  sourceNote?: string;
}

/** Resolve a localized field; returns undefined when that locale is not verified yet. */
export function pickLocalized(
  value: LocalizedText | undefined,
  locale: LocaleCode,
  fallbackLocale: LocaleCode = "es",
): string | undefined {
  if (!value) return undefined;
  return value[locale] ?? value[fallbackLocale] ?? value.es ?? value.en ?? value.ar;
}
