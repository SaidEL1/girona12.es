import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocaleCode } from "@/lib/i18n";
import { supportedLocales } from "@/data/i18n";

/**
 * Locale routing proxy (Next.js 16 — formerly middleware).
 * - `/` → cookie locale or Spanish default
 * - Paths without a locale prefix get one prepended
 * Spanish is always the first-visit default.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    const current = pathname.split("/")[1];
    if (current && isLocaleCode(current)) {
      const response = NextResponse.next();
      // Keep cookie aligned with the URL the visitor is on
      response.cookies.set(LOCALE_COOKIE, current, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
      return response;
    }
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    cookieLocale && isLocaleCode(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);
  if (!cookieLocale) {
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except:
     * - next internals, static files, images, favicon
     * - robots.txt / sitemap.xml (must stay at site root for crawlers)
     */
    "/((?!_next/static|_next/image|favicon.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
