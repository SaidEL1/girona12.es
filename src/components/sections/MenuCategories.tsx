import { PatternBackdrop, SectionFrame, ZelligeBorder } from "@/components/brand";
import { Button, Container, GeometricAccent, SectionHeading } from "@/components/ui";
import { SECTION_IDS } from "@/lib/constants";
import { originalMenuPath } from "@/lib/i18n";
import { getPublishedCategories } from "@/lib/menu";
import { requireLocalized } from "@/lib/locale-text";
import type { Dictionary, LocaleCode } from "@/types";

type MenuCategoriesProps = {
  locale: LocaleCode;
  dictionary: Dictionary;
};

export function MenuCategories({ locale, dictionary }: MenuCategoriesProps) {
  const copy = dictionary.sections.menu;
  const categories = getPublishedCategories();
  const hasCategories = categories.length > 0;

  return (
    <section
      id={SECTION_IDS.menu}
      aria-labelledby="menu-heading"
      className="relative bg-[var(--color-deep-green)] py-20 text-[var(--color-ivory)] sm:py-28"
    >
      <PatternBackdrop variant="zellige-emerald" intensity="whisper" tone="deep" />
      <ZelligeBorder
        variant="zellige-mix"
        className="absolute inset-x-0 top-0 opacity-90"
      />
      <Container className="relative pt-4">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            <SectionFrame tone="gold-on-dark" padded={false}>
              <div className="relative aspect-[4/5]">
                <PatternBackdrop
                  variant="zellige-multi"
                  intensity="medium"
                  tone="emerald"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[var(--color-deep-green)]/45"
                />
                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                  <GeometricAccent tone="gold" />
                  <p className="font-display text-3xl tracking-[0.08em] text-[var(--color-gold)]">
                    {dictionary.brand.wordmark}
                  </p>
                  <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-ivory)]/70">
                    {dictionary.brand.tagline}
                  </p>
                </div>
              </div>
            </SectionFrame>
          </div>

          <div className="order-1 space-y-8 lg:order-2 lg:col-span-7">
            <SectionHeading
              id="menu-heading"
              tone="dark"
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.body}
            />

            {hasCategories ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {categories.map((category) => {
                  const name = requireLocalized(category.name, locale);
                  if (!name) return null;
                  return (
                    <li
                      key={category.id}
                      className="border-b border-[var(--color-gold)]/30 pb-3 font-display text-2xl text-[var(--color-ivory)]"
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

            <Button href={originalMenuPath(locale)}>{copy.cta}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
