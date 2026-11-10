import { notFound } from "next/navigation";
import { Intro, ClosingCta } from "@/components/sections";
import { ZelligeBorder } from "@/components/brand";
import { getDictionary, isLocaleCode } from "@/lib/i18n";
import type { LocaleCode } from "@/types";

export default async function RestaurantPage({
  params,
}: PageProps<"/[locale]/restaurante">) {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) notFound();

  const locale: LocaleCode = raw;
  const dictionary = getDictionary(locale);

  return (
    <div className="overflow-x-hidden pt-[4.25rem] sm:pt-[4.75rem]">
      <ZelligeBorder variant="girih-emerald" />
      <Intro dictionary={dictionary} />
      <ClosingCta locale={locale} dictionary={dictionary} />
    </div>
  );
}
