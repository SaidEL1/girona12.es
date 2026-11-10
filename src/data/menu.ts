import type { MenuDataset } from "@/types";

/**
 * Menu content will be extracted from the official PDF in a later phase.
 * Do not invent categories, dishes, descriptions, or prices.
 * Do not invent ES / EN / AR translations until the PDF is verified.
 *
 * Shape supports LocalizedText on name/description fields so future
 * extraction can fill verified locales only.
 */
export const menuDataset: MenuDataset = {
  categories: [],
  items: [],
  sourceNote:
    "Awaiting menu PDF extraction. Categories and items intentionally empty across ES/EN/AR.",
};

export const featuredDishIds: string[] = [];
