import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MenuExplorer } from "@/components/menu";
import {
  getDictionary,
  getLocaleConfig,
  isLocaleCode,
  localizedPath,
} from "@/lib/i18n";
import { getPublishedCategories, getPublishedItems } from "@/lib/menu";
import type { LocaleCode } from "@/types";

type MenuPageProps = PageProps<"/[locale]/menu">;

export async function generateMetadata({
  params,
}: MenuPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) return {};

  const locale = raw;
  const dictionary = getDictionary(locale);
  const config = getLocaleConfig(locale);

  return {
    title: dictionary.menuPage.title,
    description: dictionary.menuPage.intro,
    alternates: {
      canonical: localizedPath(locale, "/menu"),
      languages: {
        es: localizedPath("es", "/menu"),
        en: localizedPath("en", "/menu"),
        ar: localizedPath("ar", "/menu"),
        "x-default": localizedPath("es", "/menu"),
      },
    },
    openGraph: {
      title: `${dictionary.menuPage.title} · ${dictionary.brand.wordmark}`,
      description: dictionary.menuPage.intro,
      locale: config.ogLocale,
      url: localizedPath(locale, "/menu"),
    },
  };
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) notFound();

  const locale: LocaleCode = raw;
  const dictionary = getDictionary(locale);
  const items = getPublishedItems();
  const categories = getPublishedCategories();

  return (
    <MenuExplorer
      locale={locale}
      dictionary={dictionary}
      categories={categories}
      items={items}
    />
  );
}
