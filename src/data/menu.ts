import type { MenuDataset } from "@/types";

/**
 * Menu content will be extracted from the official PDF in a later phase.
 * Do not invent categories, dishes, descriptions, or prices here.
 */
export const menuDataset: MenuDataset = {
  categories: [],
  items: [],
  sourceNote:
    "Awaiting menu PDF extraction. Categories and items intentionally empty.",
};

export const featuredDishIds: string[] = [];
