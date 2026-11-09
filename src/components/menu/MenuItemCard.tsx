import type { MenuItem } from "@/types";

type MenuItemCardProps = {
  item: MenuItem;
};

/**
 * Presentational stub for a single menu item.
 * Do not invent prices — values must come from PDF extraction.
 */
export function MenuItemCard({ item }: MenuItemCardProps) {
  const price = new Intl.NumberFormat(item.language === "ar" ? "ar" : item.language, {
    style: "currency",
    currency: "EUR",
  }).format(item.priceEur);

  return (
    <article className="space-y-2 border-b border-[var(--color-emerald)]/10 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl text-[var(--color-deep-green)]">
          {item.name}
        </h3>
        <p className="shrink-0 text-sm tracking-wide text-[var(--color-gold)]">
          {price}
        </p>
      </div>
      {item.description ? (
        <p className="text-sm leading-relaxed text-[var(--color-dark-text)]/75">
          {item.description}
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
