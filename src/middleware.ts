import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 정적 파일, api 제외
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // 이미 lang 있으면 통과
  if (pathname.startsWith("/ko") || pathname.startsWith("/en")) {
    return;
  }

  // 기본 언어
  const lang = "ko";

  return NextResponse.redirect(new URL(`/${lang}${pathname}`, req.url));
}
