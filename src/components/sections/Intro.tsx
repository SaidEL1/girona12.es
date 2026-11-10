import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import { siteImages } from "@/data/images";
import { SECTION_IDS } from "@/lib/constants";
import type { Dictionary } from "@/types";

type IntroProps = {
  dictionary: Dictionary;
};

export function Intro({ dictionary }: IntroProps) {
  const image = siteImages.intro;
  const copy = dictionary.sections.intro;

  return (
    <section
      id={SECTION_IDS.intro}
      aria-labelledby="intro-heading"
      className="relative overflow-hidden bg-[var(--color-ivory)] py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -end-24 top-16 h-72 w-72 rounded-full bg-[var(--color-emerald)]/[0.06] blur-3xl"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="intro-heading"
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.body}
            />
          </div>

          <div className="relative lg:col-span-7">
            <div className="absolute -inset-x-3 -inset-y-3 border border-[var(--color-gold)]/35 sm:-inset-x-5 sm:-inset-y-5" />
            <div className="absolute -bottom-4 -start-4 hidden h-24 w-24 border border-[var(--color-emerald)]/25 sm:block" />
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
              <Image
                src={image.src}
                alt={dictionary.imageAlts.intro}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
