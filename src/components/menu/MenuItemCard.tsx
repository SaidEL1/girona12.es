import { pickLocalized, type LocaleCode, type MenuItem } from "@/types";

type MenuItemCardProps = {
  item: MenuItem;
  locale: LocaleCode;
};

/**
 * Presentational stub for a single menu item.
 * Prices stay LTR; names/descriptions only render verified locale strings.
 */
export function MenuItemCard({ item, locale }: MenuItemCardProps) {
  const name = pickLocalized(item.name, locale);
  const description = pickLocalized(item.description, locale);

  if (!name) return null;

  const price = new Intl.NumberFormat(locale === "ar" ? "ar" : locale, {
    style: "currency",
    currency: "EUR",
  }).format(item.priceEur);

  return (
    <article className="space-y-2 border-b border-[var(--color-emerald)]/10 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl text-[var(--color-deep-green)]">
          {name}
        </h3>
        <p className="ltr-isolate shrink-0 text-sm tracking-wide text-[var(--color-gold)]">
          {price}
        </p>
      </div>
      {description ? (
        <p className="text-sm leading-relaxed text-[var(--color-dark-text)]/75">
          {description}
        </p>
      ) : null}
      {item.dietaryLabels?.length ? (
        <ul className="flex flex-wrap gap-2 pt-1">
          {item.dietaryLabels.map((label) => (
            <li
              key={label}
              className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-emerald)]"
            >
              {label.replace("_", " ")}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
