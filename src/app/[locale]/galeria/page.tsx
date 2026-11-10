import { notFound } from "next/navigation";
import { Gallery } from "@/components/sections";
import { ZelligeBorder } from "@/components/brand";
import { getDictionary, isLocaleCode } from "@/lib/i18n";
import type { LocaleCode } from "@/types";

export default async function GalleryPage({
  params,
}: PageProps<"/[locale]/galeria">) {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) notFound();

  const locale: LocaleCode = raw;
  const dictionary = getDictionary(locale);

  return (
    <div className="overflow-x-hidden pt-[4.25rem] sm:pt-[4.75rem]">
      <ZelligeBorder variant="zellige-mix" />
      <Gallery locale={locale} dictionary={dictionary} headingAs="h1" />
    </div>
  );
}
