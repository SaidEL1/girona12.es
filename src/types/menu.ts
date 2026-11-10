/**
 * Menu data model for Restaurante Al Andalus.
 * Populated later from PDF extraction — do not invent dishes or prices.
 */

export type LocaleCode = "es" | "en" | "ar";

export type DietaryLabel =
  | "vegetarian"
  | "vegan"
  | "gluten_free"
  | "halal"
  | "spicy"
  | "nuts"
  | "dairy";

export interface MenuItem {
  id: string;
  /** Category slug this item belongs to */
  categoryId: string;
  name: string;
  description?: string;
  /** Price in EUR (major units). Source of truth will be the menu PDF. */
  priceEur: number;
  language: LocaleCode;
  imageSrc?: string;
  dietaryLabels?: DietaryLabel[];
  featured?: boolean;
  sortOrder?: number;
}

export interface MenuCategory {
  id: string;
  slug: string;
  name: string;
  description?: string;
  language: LocaleCode;
  sortOrder?: number;
}

export interface MenuDataset {
  categories: MenuCategory[];
  items: MenuItem[];
  /** ISO date string when this dataset was last synced from the PDF */
  updatedAt?: string;
  sourceNote?: string;
}
