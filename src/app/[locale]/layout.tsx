import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import {
  Cormorant_Garamond,
  Noto_Naskh_Arabic,
  Noto_Sans_Arabic,
  Source_Sans_3,
} from "next/font/google";
import { SiteShell } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { supportedLocales } from "@/data/i18n";
import {
  getDictionary,
  getLocaleConfig,
  isLocaleCode,
  localizedPath,
} from "@/lib/i18n";
import { CRAWL_ORIGIN } from "@/lib/site-url";
import type { LocaleCode } from "@/types";
import "../globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const arabicSans = Noto_Sans_Arabic({
  variable: "--font-arabic-sans",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const arabicDisplay = Noto_Naskh_Arabic({
  variable: "--font-arabic-display",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#032F28",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) return {};

  const locale = raw;
  const dictionary = getDictionary(locale);
  const config = getLocaleConfig(locale);
  const languages = Object.fromEntries(
    supportedLocales.map((code) => [code, localizedPath(code)]),
  ) as Record<string, string>;
  languages["x-default"] = localizedPath("es");

  return {
    metadataBase: new URL(CRAWL_ORIGIN),
    title: {
      default: `${dictionary.brand.wordmark} · ${dictionary.brand.name}`,
      template: `%s · ${dictionary.brand.wordmark}`,
    },
    description: dictionary.home.support,
    applicationName: dictionary.brand.wordmark,
    keywords: [
      "GERONA 12",
      "gerona12.es",
      "Restaurante Al Andalus",
      "Al Baraka Digital",
      "Andalusian restaurant",
      "cocina andalusí",
      "مطعم الأندلس",
    ],
    alternates: {
      canonical: localizedPath(locale),
      languages,
    },
    openGraph: {
      title: `${dictionary.brand.wordmark} · ${dictionary.brand.name}`,
      description: dictionary.home.support,
      locale: config.ogLocale,
      alternateLocale: supportedLocales
        .filter((code) => code !== locale)
        .map((code) => getLocaleConfig(code).ogLocale),
      type: "website",
      siteName: dictionary.brand.wordmark,
      url: localizedPath(locale),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) notFound();

  const locale: LocaleCode = raw;
  const dictionary = getDictionary(locale);
  const config = getLocaleConfig(locale);
  const isArabic = locale === "ar";

  return (
    <html
      lang={config.htmlLang}
      dir={config.dir}
      className={`${display.variable} ${sans.variable} ${arabicSans.variable} ${arabicDisplay.variable} h-full antialiased`}
    >
      <body
        className={`flex min-h-full flex-col overflow-x-hidden bg-[var(--color-ivory)] text-[var(--color-dark-text)] ${
          isArabic ? "font-arabic" : "font-sans"
        }`}
      >
        <JsonLd />
        <SiteShell locale={locale} dictionary={dictionary}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
