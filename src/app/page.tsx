import {
  Contact,
  FeaturedDishes,
  Gallery,
  Hero,
  Intro,
  Location,
  MenuCategories,
  ReservationCta,
} from "@/components/sections";

/**
 * Phase 01 homepage shell.
 * Section components are scaffolded; full content arrives in later phases.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <MenuCategories />
      <FeaturedDishes />
      <Gallery />
      <Contact />
      <Location />
      <ReservationCta />
    </>
  );
}
