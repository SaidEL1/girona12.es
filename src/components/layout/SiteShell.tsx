import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SECTION_IDS } from "@/lib/constants";
import type { Dictionary, LocaleCode } from "@/types";

type SiteShellProps = {
  locale: LocaleCode;
  dictionary: Dictionary;
  children: ReactNode;
};

export function SiteShell({ locale, dictionary, children }: SiteShellProps) {
  return (
    <>
      <a
        href={`#${SECTION_IDS.home}`}
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:bg-[var(--color-gold)] focus:px-4 focus:py-2 focus:text-[var(--color-deep-green)]"
      >
        {dictionary.a11y.skipToContent}
      </a>
      <Header locale={locale} dictionary={dictionary} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
