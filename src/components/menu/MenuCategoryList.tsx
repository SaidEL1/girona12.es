import type { MenuCategory } from "@/types";

type MenuCategoryListProps = {
  categories: MenuCategory[];
};

/**
 * Renders category stubs. Empty until PDF extraction populates `menuDataset`.
 */
export function MenuCategoryList({ categories }: MenuCategoryListProps) {
  if (categories.length === 0) {
    return (
      <p className="text-sm tracking-wide text-[var(--color-dark-text)]/55">
        —
      </p>
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <li key={category.id} className="space-y-2">
          <h3 className="font-display text-2xl text-[var(--color-deep-green)]">
            {category.name}
          </h3>
          {category.description ? (
            <p className="text-sm leading-relaxed text-[var(--color-dark-text)]/75">
              {category.description}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
