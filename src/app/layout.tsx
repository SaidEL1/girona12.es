import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { SiteShell } from "@/components/layout";
import { siteConfig } from "@/data/site";
import { getDictionary, getLocaleConfig } from "@/lib/i18n";
import "./globals.css";

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

const dictionary = getDictionary();
const locale = getLocaleConfig();

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brandName} · Gerona 12`,
    template: `%s · ${siteConfig.brandName}`,
  },
  description: dictionary.home.support,
  applicationName: siteConfig.brandName,
  keywords: [
    "Restaurante Al Andalus",
    "Gerona 12",
    "Al Baraka Digital",
    "cocina andalusí",
    "Andalusian restaurant",
  ],
  openGraph: {
    title: siteConfig.brandName,
    description: dictionary.home.support,
    locale: "es_ES",
    type: "website",
    siteName: siteConfig.brandName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#032F28",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={locale.htmlLang}
      dir={locale.dir}
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--color-ivory)] font-sans text-[var(--color-dark-text)]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
