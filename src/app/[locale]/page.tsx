import { notFound } from "next/navigation";
import {
  ClosingCta,
  DigitalMenuCta,
  Gallery,
  Hero,
  Intro,
  MenuCategories,
} from "@/components/sections";
import { getDictionary, isLocaleCode } from "@/lib/i18n";
import type { LocaleCode } from "@/types";

/**
 * Localized premium landing page (ES primary, EN, AR).
 */
export default async function HomePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) notFound();

  const locale: LocaleCode = raw;
  const dictionary = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dictionary={dictionary} />
      <Intro dictionary={dictionary} />
      <DigitalMenuCta locale={locale} dictionary={dictionary} />
      <MenuCategories locale={locale} dictionary={dictionary} />
      <Gallery locale={locale} dictionary={dictionary} />
      <ClosingCta locale={locale} dictionary={dictionary} />
    </>
  );
}
