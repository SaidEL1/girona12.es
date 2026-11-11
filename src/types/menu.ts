/**
 * Menu data model for Restaurante Al Andalus.
 * Spanish is the canonical source language. English and Arabic are translations
 * of the same item records — never duplicate products per locale.
 *
 * Only publish items verified from the official Full Menu GERONA 12 PDF.
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
  /** Relative path to the source PDF or screenshot evidence */
  pdf: string;
  /** 1-based page number in the PDF when known */
  page: number;
  /** Optional extraction notes for reviewers */
  notes?: string;
}

/** Size / format / combo price variants (e.g. Media/Grande, Solo/Menú). */
export interface MenuPriceOption {
  id: string;
  label: LocalizedText;
  priceEur: number;
  /** Exact label as printed (e.g. "6,50 €") */
  priceLabel: string;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  subcategoryId?: string;
  /** Verified localized names — Spanish required before publish */
  name: LocalizedText;
  /** Verified localized descriptions only */
  description?: LocalizedText;
  /** Optional availability / service notes */
  notes?: LocalizedText;
  /** Numeric EUR amount used for sorting (base / lowest variant) */
  priceEur: number;
  /**
   * Exact single price label as printed in the PDF (e.g. "12,50 €").
   * Prefer this for display so decimal formatting is preserved.
   */
  priceLabel?: string;
  /** Multi-column prices when the PDF shows variants */
  priceOptions?: MenuPriceOption[];
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
