import type { MenuDataset } from "@/types";
import { MENU_SOURCE_PDF } from "./constants";
import { menuCategories, menuSubcategories } from "./categories";
import { menuItems } from "./items";

/**
 * Verified published menu dataset extracted from Full Menu GERONA 12 PDF screenshots.
 * Spanish prices are canonical when locales disagree.
 */
export const menuDataset: MenuDataset = {
  categories: menuCategories,
  subcategories: menuSubcategories,
  items: menuItems,
  updatedAt: "2026-11-10",
  sourcePdf: MENU_SOURCE_PDF,
  sourceNote:
    "Extracted from provided Full Menu GERONA 12.pdf page screenshots (ES/EN/AR). See docs/extraction/phase-04-extraction-report.md.",
};

export const unpublishedMenuItems = menuItems.filter(
  (item) => item.status !== "published",
);

export const featuredDishIds: string[] = [
  "breakfast-gerona12",
  "tagine-chicken",
  "meat-grilled-salmon",
  "pizza-margherita",
];
