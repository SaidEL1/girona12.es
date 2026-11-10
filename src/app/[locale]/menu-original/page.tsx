import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OriginalMenuViewer } from "@/components/menu-original";
import { ORIGINAL_MENU_PAGE_COUNT } from "@/data/menu-pages";
import {
  getDictionary,
  getLocaleConfig,
  isLocaleCode,
  localizedPath,
} from "@/lib/i18n";
import type { LocaleCode } from "@/types";

type OriginalMenuPageProps = PageProps<"/[locale]/menu-original">;

export async function generateMetadata({
  params,
}: OriginalMenuPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) return {};

  const locale = raw;
  const dictionary = getDictionary(locale);
  const config = getLocaleConfig(locale);
  const copy = dictionary.originalMenuPage;

  return {
    title: copy.title,
    description: copy.intro,
    alternates: {
      canonical: localizedPath(locale, "/menu-original"),
      languages: {
        es: localizedPath("es", "/menu-original"),
        en: localizedPath("en", "/menu-original"),
        ar: localizedPath("ar", "/menu-original"),
        "x-default": localizedPath("es", "/menu-original"),
      },
    },
    openGraph: {
      title: `${copy.title} · ${dictionary.brand.wordmark}`,
      description: copy.intro,
      locale: config.ogLocale,
      url: localizedPath(locale, "/menu-original"),
    },
  };
}

/**
 * Exact PDF image viewer — serves original JPEG pages without redesign/OCR.
 */
export default async function OriginalMenuPage({
  params,
}: OriginalMenuPageProps) {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) notFound();

  const locale: LocaleCode = raw;
  const dictionary = getDictionary(locale);
  const copy = dictionary.originalMenuPage;

  return (
    <section
      aria-label={copy.title}
      className="min-h-screen bg-[var(--color-deep-green)] pt-16 sm:pt-[4.25rem]"
    >
      <OriginalMenuViewer
        brandWordmark={dictionary.brand.wordmark}
        brandName={dictionary.brand.name}
        previousLabel={copy.previous}
        nextLabel={copy.next}
        pageLabel={copy.page}
        jumpLabel={copy.jumpLabel}
        jumpTitle={copy.jumpTitle}
        jumpConfirm={copy.jumpConfirm}
        jumpCancel={copy.jumpCancel}
      />
      <p className="sr-only">
        {copy.intro} {ORIGINAL_MENU_PAGE_COUNT} {copy.pagesWord}.
      </p>
    </section>
  );
}
