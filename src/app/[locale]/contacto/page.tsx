import { notFound } from "next/navigation";
import { PatternBackdrop, SectionFrame, ZelligeBorder } from "@/components/brand";
import { Container, GeometricAccent, SectionHeading } from "@/components/ui";
import { getDictionary, isLocaleCode } from "@/lib/i18n";
import type { LocaleCode } from "@/types";

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contacto">) {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) notFound();

  const locale: LocaleCode = raw;
  const dictionary = getDictionary(locale);

  return (
    <div className="overflow-x-hidden pt-[4.25rem] sm:pt-[4.75rem]">
      <ZelligeBorder variant="girih-emerald" />
      <section className="relative bg-[var(--color-ivory)] py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] zellige-ivory"
        />
        <Container className="relative space-y-10">
          <SectionHeading
            eyebrow={dictionary.nav.contact}
            title={dictionary.nav.contact}
            description={dictionary.footer.contactPending}
          />
          <SectionFrame tone="gold" className="overflow-hidden bg-[var(--color-deep-green)]">
            <div className="relative min-h-[14rem] px-6 py-12 text-[var(--color-ivory)] sm:px-10">
              <PatternBackdrop
                variant="zellige-emerald"
                intensity="soft"
                tone="deep"
              />
              <div className="relative z-10 max-w-xl space-y-5">
                <GeometricAccent tone="gold" />
                <p className="font-display text-3xl tracking-[0.08em] text-[var(--color-gold)]">
                  {dictionary.brand.wordmark}
                </p>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-ivory)]/75">
                  {dictionary.brand.name}
                </p>
                <p className="text-base leading-relaxed text-[var(--color-ivory)]/85">
                  {dictionary.footer.contactPending}
                </p>
              </div>
            </div>
          </SectionFrame>
        </Container>
      </section>
    </div>
  );
}
