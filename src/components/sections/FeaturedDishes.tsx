import { Container, SectionHeading } from "@/components/ui";
import { featuredDishIds, menuDataset } from "@/data/menu";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";

/** Stub — featured dishes require PDF-sourced menu data. */
export function FeaturedDishes() {
  const dictionary = getDictionary();
  const featured = menuDataset.items.filter(
    (item) => item.featured || featuredDishIds.includes(item.id),
  );

  return (
    <section
      id={SECTION_IDS.featured}
      aria-labelledby="featured-heading"
      className="border-b border-[var(--color-emerald)]/10 bg-[var(--color-ivory)] py-20 sm:py-24"
    >
      <Container className="space-y-8">
        <SectionHeading
          id="featured-heading"
          title={dictionary.sections.featured}
          description={dictionary.footer.comingSoon}
        />
        {featured.length === 0 ? (
          <p className="text-sm text-[var(--color-dark-text)]/60">—</p>
        ) : null}
      </Container>
    </section>
  );
}
