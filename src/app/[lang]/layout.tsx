import type { Metadata } from "next";
import localFont from "next/font/local";
import { I18nProvider } from "@/components/provider/i18n";

const pretendard = localFont({
  src: "../../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "옳은일 | 모빌리티 케어 파트너",
  description: "당신의 모빌리티 케어 파트너, 옳은일입니다",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://orheun.com",
  },
  icons: {
    icon: "/meta/favicon.png",
    shortcut: "/meta/favicon.png",
    apple: "/meta/icon-192.png",
    other: [
      { url: "/meta/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/meta/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://orheun.com",
  ),
  openGraph: {
    title: "옳은일 | 모빌리티 케어 파트너",
    description: "당신의 모빌리티 케어 파트너, 옳은일입니다",
    images: "/images/og-image.png",
  },
  twitter: {
    title: "옳은일 | 모빌리티 케어 파트너",
    description: "당신의 모빌리티 케어 파트너, 옳은일입니다",
    images: "/meta/og-image.png",
    card: "summary_large_image",
  },
  keywords: [
    "옳은일",
    "orheunil",
    "올타",
    "allta",
    "모빌리티 플랫폼",
    "자동세차 구독",
    "차량 관리 서비스",
    "자동세차 플랫폼",
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_VERIFICATION,
  },
  other: {
    "naver-site-verification":
      process.env.NEXT_PUBLIC_NAVER_SEARCH_VERIFICATION ?? "",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const displayLang = lang ?? "ko";

  return (
    <html lang={displayLang} className="h-full antialiased">
      <body
        className={`flex flex-col min-h-full pt-[64px] ${pretendard.className} text-black`}
      >
        <I18nProvider lang={displayLang}>{children}</I18nProvider>
      </body>
    </html>
  );
}
