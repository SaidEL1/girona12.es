import Image from "next/image";
import { Button, Container, SectionHeading } from "@/components/ui";
import { siteImages } from "@/data/images";
import { SECTION_IDS } from "@/lib/constants";
import { localizedPath } from "@/lib/i18n";
import type { Dictionary, LocaleCode } from "@/types";

type ClosingCtaProps = {
  locale: LocaleCode;
  dictionary: Dictionary;
};

export function ClosingCta({ locale, dictionary }: ClosingCtaProps) {
  const copy = dictionary.sections.closing;
  const image = siteImages.cta;


  return (
    <section
      id={SECTION_IDS.reservation}
      aria-labelledby="closing-heading"
      className="relative isolate overflow-hidden bg-[var(--color-deep-green)] py-24 text-[var(--color-ivory)] sm:py-32"
    >
      <Image
        src={image.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-35"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[var(--color-deep-green)]/75"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.1] moorish-pattern"
      />

      <Container className="relative z-10 flex flex-col items-start gap-8 md:items-center md:text-center">
        <SectionHeading
          id="closing-heading"
          align="center"
          tone="dark"
          title={copy.title}
          description={copy.body}
          className="md:mx-auto"
        />
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href={localizedPath(locale, "/menu")}>{copy.ctaMenu}</Button>
          <Button href={`#${SECTION_IDS.contact}`} variant="onDark">
            {copy.ctaContact}
          </Button>
        </div>
      </Container>
    </section>
  );
}
