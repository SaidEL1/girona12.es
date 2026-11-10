import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const dictionary = getDictionary();

  return (
    <>
      <a
        href={`#${SECTION_IDS.home}`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-[var(--color-gold)] focus:px-4 focus:py-2 focus:text-[var(--color-deep-green)]"
      >
        {dictionary.a11y.skipToContent}
      </a>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
