import { menuDataset } from "@/data/menu";
import {
  isPublishableItem,
  pickLocalized,
  type LocaleCode,
  type MenuCategory,
  type MenuItem,
} from "@/types";

export function getPublishedItems(): MenuItem[] {
  return menuDataset.items
    .filter(isPublishableItem)
    .slice()
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export function getPublishedCategories(): MenuCategory[] {
  const used = new Set(getPublishedItems().map((item) => item.categoryId));
  return menuDataset.categories
    .filter((category) => used.has(category.id))
    .slice()
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export function formatMenuPrice(
  item: MenuItem,
  locale: LocaleCode,
  fallbackLabel: string,
): string {
  if (item.priceOptions?.length) {
    return item.priceOptions
      .map((option) => {
        const label = pickLocalized(option.label, locale) ?? "";
        return label
          ? `${label} ${option.priceLabel}`
          : option.priceLabel;
      })
      .join(" · ");
  }
  if (item.priceLabel) return item.priceLabel;
  if (!Number.isFinite(item.priceEur)) return fallbackLabel;
  return new Intl.NumberFormat(locale === "ar" ? "ar" : locale, {
    style: "currency",
    currency: "EUR",
  }).format(item.priceEur);
}

export function filterMenuItems(options: {
  locale: LocaleCode;
  categoryId?: string | null;
  query?: string;
}): MenuItem[] {
  const { locale, categoryId, query } = options;
  const normalized = query?.trim().toLocaleLowerCase() ?? "";

  return getPublishedItems().filter((item) => {
    if (categoryId && item.categoryId !== categoryId) return false;
    if (!normalized) return true;

    const name = pickLocalized(item.name, locale)?.toLocaleLowerCase() ?? "";
    const description =
      pickLocalized(item.description, locale)?.toLocaleLowerCase() ?? "";
    const spanishName = item.name.es?.toLocaleLowerCase() ?? "";
    const englishName = item.name.en?.toLocaleLowerCase() ?? "";
    const arabicName = item.name.ar?.toLocaleLowerCase() ?? "";

    return (
      name.includes(normalized) ||
      description.includes(normalized) ||
      spanishName.includes(normalized) ||
      englishName.includes(normalized) ||
      arabicName.includes(normalized)
    );
  });
}

export function menuStats() {
  const published = getPublishedItems();
  return {
    publishedItems: published.length,
    unpublishedItems: menuDataset.items.filter((i) => i.status !== "published")
      .length,
    categories: getPublishedCategories().length,
    subcategories: menuDataset.subcategories.length,
    sourcePdf: menuDataset.sourcePdf,
  };
}
