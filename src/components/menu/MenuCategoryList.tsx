import { pickLocalized, type LocaleCode, type MenuCategory } from "@/types";

type MenuCategoryListProps = {
  categories: MenuCategory[];
  locale: LocaleCode;
};

/**
 * Renders category stubs. Empty until PDF extraction populates `menuDataset`.
 */
export function MenuCategoryList({
  categories,
  locale,
}: MenuCategoryListProps) {
  if (categories.length === 0) {
    return (
      <p className="text-sm tracking-wide text-[var(--color-dark-text)]/55">
        —
      </p>
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const name = pickLocalized(category.name, locale);
        const description = pickLocalized(category.description, locale);
        if (!name) return null;
        return (
          <li key={category.id} className="space-y-2">
            <h3 className="font-display text-2xl text-[var(--color-deep-green)]">
              {name}
            </h3>
            {description ? (
              <p className="text-sm leading-relaxed text-[var(--color-dark-text)]/75">
                {description}
              </p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
