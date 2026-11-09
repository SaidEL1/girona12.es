import { Container, SectionHeading } from "@/components/ui";
import { MenuCategoryList } from "@/components/menu";
import { menuDataset } from "@/data/menu";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";

/** Stub — categories fill once the menu PDF is extracted. */
export function MenuCategories() {
  const dictionary = getDictionary();

  return (
    <section
      id={SECTION_IDS.menu}
      aria-labelledby="menu-heading"
      className="border-b border-[var(--color-emerald)]/10 bg-[var(--color-ivory)] py-20 sm:py-24"
    >
      <Container className="space-y-10">
        <SectionHeading
          id="menu-heading"
          title={dictionary.sections.menu}
          description={
            menuDataset.sourceNote ?? dictionary.footer.comingSoon
          }
        />
        <MenuCategoryList categories={menuDataset.categories} />
      </Container>
    </section>
  );
}
