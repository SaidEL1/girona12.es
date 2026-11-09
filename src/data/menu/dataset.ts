import type { MenuDataset } from "@/types";
import { MENU_SOURCE_PDF } from "./constants";

/**
 * Verified published menu dataset.
 * Intentionally empty until docs/source/gerona12-full-menu.pdf is supplied
 * and extraction is reviewed. Do not invent dishes or prices.
 */
export const menuDataset: MenuDataset = {
  categories: [],
  subcategories: [],
  items: [],
  sourcePdf: MENU_SOURCE_PDF,
  sourceNote:
    "Source PDF missing from repository. Published items remain empty.",
};

/** Items extracted but not yet verified for publication. */
export const unpublishedMenuItems: MenuDataset["items"] = [];

export const featuredDishIds: string[] = [];
