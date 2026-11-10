import type { LocaleCode } from "@/types";
import type { LocalizedText } from "@/types/menu";

/**
 * Resolve a localized string for the active locale only.
 * Never silently falls back to another language for visible UI content.
 */
export function requireLocalized(
  value: LocalizedText | undefined,
  locale: LocaleCode,
): string | undefined {
  if (!value) return undefined;
  const text = value[locale];
  return text && text.trim() ? text : undefined;
}
