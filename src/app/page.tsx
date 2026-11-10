import {
  ClosingCta,
  Gallery,
  Hero,
  Intro,
  MenuCategories,
} from "@/components/sections";

/**
 * Phase 02 premium landing page.
 * Menu PDF extraction and full locale routing remain later phases.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <MenuCategories />
      <Gallery />
      <ClosingCta />
    </>
  );
}
