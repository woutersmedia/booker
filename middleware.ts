import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

const locales = ["en", "nl"];
const blockedRoutes = ["/dashboard", "/partners"];

function getLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get("locale")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0])
      .find((lang) => locales.includes(lang));
    if (preferredLocale) {
      return preferredLocale;
    }
  }

  return "en";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
