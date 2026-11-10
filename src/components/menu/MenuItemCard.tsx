import { formatMenuPrice } from "@/lib/menu";
import {
  pickLocalized,
  type Dictionary,
  type LocaleCode,
  type MenuItem,
} from "@/types";

type MenuItemCardProps = {
  item: MenuItem;
  locale: LocaleCode;
  dictionary: Dictionary;
};

/**
 * Presentational card for a verified menu item.
 * Prices stay LTR; names/descriptions only render verified locale strings.
 */
export function MenuItemCard({ item, locale, dictionary }: MenuItemCardProps) {
  const name = pickLocalized(item.name, locale);
  const description = pickLocalized(item.description, locale);
  const notes = pickLocalized(item.notes, locale);

  if (!name) return null;

  const price = formatMenuPrice(
    item,
    locale,
    dictionary.menuPage.priceUnavailable,
  );

  return (
    <article className="group border-b border-[var(--color-emerald)]/12 py-6 first:pt-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1 space-y-2">
          <h3 className="font-display text-2xl leading-tight text-[var(--color-deep-green)] transition-colors group-hover:text-[var(--color-emerald)]">
            {name}
          </h3>
          {description ? (
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-dark-text)]/75 sm:text-base">
              {description}
            </p>
          ) : null}
          {notes ? (
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-emerald)]/80">
              {notes}
            </p>
          ) : null}
          {item.dietaryLabels?.length ? (
            <ul className="flex flex-wrap gap-2 pt-1">
              {item.dietaryLabels.map((label) => (
                <li
                  key={label}
                  className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-emerald)]"
                >
                  {label.replaceAll("_", " ")}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <p className="ltr-isolate shrink-0 text-sm tracking-[0.06em] text-[var(--color-gold)] sm:max-w-[14rem] sm:text-end">
          {price}
        </p>
      </div>
    </article>
  );
}
