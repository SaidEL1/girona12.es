/**
 * Menu data model for Restaurante Al Andalus.
 * Spanish is the canonical source language. English and Arabic are translations
 * of the same item records — never duplicate products per locale.
 *
 * Only publish items verified from docs/source/gerona12-full-menu.pdf.
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

export type MenuPublicationStatus =
  | "published"
  | "needs_review"
  | "unreadable"
  | "unpublished";

/**
 * Localized string bag for ES / EN / AR.
 * Only fill locales that have verified content from the official menu PDF.
 */
export type LocalizedText = Partial<Record<LocaleCode, string>>;

export interface MenuSourceRef {
  /** Relative path to the source PDF */
  pdf: string;
  /** 1-based page number in the PDF */
  page: number;
  /** Optional extraction notes for reviewers */
  notes?: string;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  subcategoryId?: string;
  /** Verified localized names — Spanish required before publish */
  name: LocalizedText;
  /** Verified localized descriptions only */
  description?: LocalizedText;
  /** Numeric EUR amount used for sorting/filtering */
  priceEur: number;
  /**
   * Exact price label as printed in the PDF (e.g. "12,50 €").
   * Prefer this for display so decimal formatting is preserved.
   */
  priceLabel?: string;
  imageSrc?: string;
  dietaryLabels?: DietaryLabel[];
  featured?: boolean;
  sortOrder?: number;
  source: MenuSourceRef;
  status: MenuPublicationStatus;
}

export interface MenuSubcategory {
  id: string;
  categoryId: string;
  slug: string;
  name: LocalizedText;
  sortOrder?: number;
}

export interface MenuCategory {
  id: string;
  slug: string;
  name: LocalizedText;
  description?: LocalizedText;
  sortOrder?: number;
  sourcePages?: number[];
}

export interface MenuDataset {
  categories: MenuCategory[];
  subcategories: MenuSubcategory[];
  items: MenuItem[];
  updatedAt?: string;
  /** Internal developer note (not user-facing copy) */
  sourceNote?: string;
  sourcePdf?: string;
}

/** Resolve a localized field; Spanish is the fallback canonical language. */
export function pickLocalized(
  value: LocalizedText | undefined,
  locale: LocaleCode,
  fallbackLocale: LocaleCode = "es",
): string | undefined {
  if (!value) return undefined;
  return value[locale] ?? value[fallbackLocale] ?? value.es ?? value.en ?? value.ar;
}

export function isPublishableItem(item: MenuItem): boolean {
  return item.status === "published" && Boolean(item.name.es);
}
