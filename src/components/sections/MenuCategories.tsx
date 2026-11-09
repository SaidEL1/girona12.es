import Image from "next/image";
import { Button, Container, SectionHeading } from "@/components/ui";
import { siteImages } from "@/data/images";
import { menuDataset } from "@/data/menu";
import { SECTION_IDS } from "@/lib/constants";
import { localizedPath } from "@/lib/i18n";
import { pickLocalized, type Dictionary, type LocaleCode } from "@/types";

type MenuCategoriesProps = {
  locale: LocaleCode;
  dictionary: Dictionary;
};

/**
 * Premium menu discovery — no invented dishes or categories.
 * Real PDF-derived multilingual data will populate `menuDataset` later.
 */
export function MenuCategories({ locale, dictionary }: MenuCategoriesProps) {
  const copy = dictionary.sections.menu;
  const image = siteImages.menu;
  const hasCategories = menuDataset.categories.length > 0;

  return (
    <section
      id={SECTION_IDS.menu}
      aria-labelledby="menu-heading"
      className="relative bg-[var(--color-deep-green)] py-20 text-[var(--color-ivory)] sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] moorish-pattern"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="relative order-2 overflow-hidden lg:order-1 lg:col-span-6">
            <div className="absolute start-0 top-0 z-10 h-full w-1 bg-[var(--color-gold)]/70" />
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-green)]/55 to-transparent"
              />
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2 lg:col-span-6">
            <SectionHeading
              id="menu-heading"
              tone="dark"
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.body}
            />

            {hasCategories ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {menuDataset.categories.map((category) => {
                  const name = pickLocalized(category.name, locale);
                  if (!name) return null;
                  return (
                    <li
                      key={category.id}
                      className="border-b border-[var(--color-gold)]/25 pb-3 font-display text-2xl text-[var(--color-ivory)]"
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="space-y-4 border border-[var(--color-gold)]/25 bg-[var(--color-emerald)]/25 px-5 py-6">
                <p className="font-display text-2xl text-[var(--color-gold)]">
                  {dictionary.brand.name}
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-ivory)]/75">
                  {copy.pendingNote}
                </p>
              </div>
            )}

            <Button href={localizedPath(locale, "/menu")}>{copy.cta}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
