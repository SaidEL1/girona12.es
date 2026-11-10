"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { filterMenuItems } from "@/lib/menu";
import { localizedPath } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import {
  pickLocalized,
  type Dictionary,
  type LocaleCode,
  type MenuCategory,
  type MenuItem,
} from "@/types";

type MenuExplorerProps = {
  locale: LocaleCode;
  dictionary: Dictionary;
  categories: MenuCategory[];
  items: MenuItem[];
  initialCategory?: string | null;
  initialQuery?: string;
};

export function MenuExplorer({
  locale,
  dictionary,
  categories,
  items,
  initialCategory = null,
  initialQuery = "",
}: MenuExplorerProps) {
  const [categoryId, setCategoryId] = useState<string | null>(initialCategory);
  const [query, setQuery] = useState(initialQuery);
  const copy = dictionary.menuPage;

  const filtered = useMemo(
    () =>
      filterMenuItems({
        locale,
        categoryId,
        query,
      }),
    [locale, categoryId, query],
  );

  const hasSourceItems = items.length > 0;
  const showEmptySource = !hasSourceItems;
  const showNoResults = hasSourceItems && filtered.length === 0;

  return (
    <section className="bg-[var(--color-ivory)] pb-24 pt-28 sm:pt-32">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.intro}
          />
          <a
            href={localizedPath(locale)}
            className="text-xs uppercase tracking-[0.22em] text-[var(--color-emerald)] underline-offset-4 hover:underline"
          >
            {copy.backHome}
          </a>
        </div>

        <div className="flex flex-col gap-4 border border-[var(--color-emerald)]/15 bg-[var(--color-ivory)] p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
          <label className="relative flex min-h-11 flex-1 items-center gap-3">
            <Search
              aria-hidden
              className="ms-1 h-4 w-4 shrink-0 text-[var(--color-emerald)]"
              strokeWidth={1.5}
            />
            <span className="sr-only">{copy.searchLabel}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
              className="w-full bg-transparent text-sm text-[var(--color-dark-text)] outline-none placeholder:text-[var(--color-dark-text)]/40"
              disabled={showEmptySource}
            />
          </label>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-dark-text)]/45">
            <span className="ltr-isolate">{filtered.length}</span>{" "}
            {copy.resultsCount}
          </p>
        </div>

        {categories.length > 0 ? (
          <nav
            aria-label={copy.eyebrow}
            className="flex gap-2 overflow-x-auto pb-1"
          >
            <CategoryChip
              active={categoryId === null}
              onClick={() => setCategoryId(null)}
              label={copy.allCategories}
            />
            {categories.map((category) => {
              const label = pickLocalized(category.name, locale);
              if (!label) return null;
              return (
                <CategoryChip
                  key={category.id}
                  active={categoryId === category.id}
                  onClick={() => setCategoryId(category.id)}
                  label={label}
                />
              );
            })}
          </nav>
        ) : null}

        {showEmptySource ? (
          <div className="border border-[var(--color-gold)]/30 bg-[var(--color-deep-green)] px-6 py-12 text-[var(--color-ivory)] sm:px-10">
            <p className="font-display text-3xl text-[var(--color-gold)]">
              {copy.emptyTitle}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-ivory)]/80 sm:text-base">
              {copy.emptyBody}
            </p>
          </div>
        ) : null}

        {showNoResults ? (
          <div className="border border-[var(--color-emerald)]/15 px-6 py-12">
            <p className="font-display text-2xl text-[var(--color-deep-green)]">
              {copy.noResultsTitle}
            </p>
            <p className="mt-3 max-w-xl text-sm text-[var(--color-dark-text)]/70">
              {copy.noResultsBody}
            </p>
          </div>
        ) : null}

        {!showEmptySource && !showNoResults ? (
          <div className="divide-y-0">
            {filtered.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                locale={locale}
                dictionary={dictionary}
              />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors",
        active
          ? "border-[var(--color-gold)] bg-[var(--color-deep-green)] text-[var(--color-ivory)]"
          : "border-[var(--color-emerald)]/20 text-[var(--color-deep-green)] hover:border-[var(--color-gold)]/60",
      )}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
