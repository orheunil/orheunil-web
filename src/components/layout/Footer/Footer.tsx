"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import QRCode from "qrcode-generator";
import {
  blogIcon,
  instaIcon,
  modalClose,
  youtubeIcon,
} from "../../../../public/images";
import { useState } from "react";

export const Footer = () => {
  const pathname = usePathname();

  const [showQr, setShowQr] = useState<boolean>(false);

  const { t } = useTranslation("common");

  const currentLocale = pathname.split("/")[1];

  const qr = QRCode(0, "H");

  qr.addData("https://app.allta.io");
  qr.make();

  const qrSvg = qr.createSvgTag({
    scalable: true,
  });

  const handleRouteAppStore = () => {
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    const isMobile = /Android|iPhone|Mobile/i.test(userAgent);

    if (isMobile) {
      window.open("https://app.allta.io", "_blank");
      return;
    }

    setShowQr(true);
  };

  return (
    <footer className="flex justify-center bg-gray-100 px-[60px]">
      {showQr && (
        <div
          onClick={() => setShowQr(false)}
          className="fixed flex justify-center items-center top-0 w-screen h-screen bg-black/50 z-[1] cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col justify-center items-center bg-white w-full max-w-[480px] h-full max-h-[510px] rounded-[20px] cursor-default"
          >
            <button
              onClick={() => setShowQr(false)}
              className="absolute top-[20px] right-[20px] cursor-pointer"
            >
              <Image src={modalClose} alt="닫기" className="size-[28px]" />
            </button>

            <p className="text-gray5 text-[16px]">올바른 자동세차의 시작</p>
            <p className="mt-[4px] text-[28px] font-semibold">
              올타 앱 이용하기
            </p>

            <div className="flex justify-center items-center w-[260px] h-[260px] mt-[24px] bg-gray1 rounded-[20px]">
              <div
                className="w-[200px] h-[200px] [&>svg]:w-full [&>svg]:h-full"
                dangerouslySetInnerHTML={{ __html: qrSvg }}
              />
            </div>

            <p className="mt-[32px] text-gray5 text-[16px]">
              QR코드를 스캔하면 앱을 설치할 수 있습니다.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col w-full max-w-[1080px] pt-[80px] pb-[96px]">
        <div className="flex flex-col md:flex-row gap-[40px]">
          <div className="flex flex-col w-[130px] text-[16px]">
            <h3 className="font-medium">{t("footer.company.title")}</h3>

            <div className="flex flex-col mt-[16px] gap-[8px] text-gray7">
              <Link href={`/${currentLocale}/company`}>
                {t("footer.company.company")}
              </Link>

              <Link href={`/${currentLocale}/tech`}>
                {t("footer.company.tech")}
              </Link>

              <Link href={`/${currentLocale}/solution`}>
                {t("footer.company.solution")}
              </Link>

              <Link href={`/${currentLocale}/news`}>
                {t("footer.company.news")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-[130px] text-[16px]">
            <h3 className="font-medium">{t("footer.service.title")}</h3>

            <div className="flex flex-col mt-[16px] gap-[8px] text-gray7">
              <a
                href="https://www.allta.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.service.service")}
              </a>

              <p>{t("footer.service.stores")}</p>

              <button
                onClick={handleRouteAppStore}
                className="text-start cursor-pointer"
              >
                {t("footer.service.app")}
              </button>
            </div>
          </div>

          <div className="flex flex-col w-[130px] text-[16px]">
            <h3 className="font-medium">{t("footer.inquiry.title")}</h3>

            <div className="flex flex-col mt-[16px] gap-[8px] text-gray7">
              <Link href={`/${currentLocale}/faq`}>
                {t("footer.inquiry.faq")}
              </Link>

              <Link href={`/${currentLocale}/contact`}>
                {t("footer.inquiry.partnership")}
              </Link>

              <Link href={`/${currentLocale}/ir`}>
                {t("footer.inquiry.ir")}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col mt-[80px] pb-[72px] md:pb-0">
          {/* 회사 정보 */}
          <p className="text-[15px] font-semibold">
            {t("footer.information.title")}
          </p>

          <address className="mt-[8px] text-gray5 text-[13px] not-italic">
            {t("footer.information.brn")} | {t("footer.information.ceo")} |{" "}
            {t("footer.information.address")}
          </address>

          <p className="text-gray5 text-[13px]">
            TEL : 1668-1620 | EMAIL : orheunil@orheun.com
          </p>

          <small className="text-gray5 text-[13px]">
            ©2025. ORHEUNIL. All Rights Reserve
          </small>

          {/* 약관 */}
          <div className="flex flex-wrap items-center mt-[20px] gap-x-[20px] gap-y-[8px] text-[13px] font-semibold">
            <Link
              href={`/${currentLocale}/terms/service`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.terms.service")}
            </Link>
            <Link
              href={`/${currentLocale}/terms/privacy`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.terms.privacy")}
            </Link>
            <Link
              href={`/${currentLocale}/terms/policy`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.terms.policy")}
            </Link>
            <Link
              href={`/${currentLocale}/terms/location`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.terms.location")}
            </Link>
          </div>

          {/* SNS */}
          <div className="absolute flex items-start bottom-0 md:top-0 md:right-0 gap-[20px]">
            <a
              href="https://www.instagram.com/allta.official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instaIcon} alt="instagram" className="size-[32px]" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCFIrfCGdLMktEiSewt5adRg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={youtubeIcon} alt="youtube" className="size-[32px]" />
            </a>

            <a
              href="https://blog.naver.com/orheunilallta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={blogIcon} alt="blog" className="size-[32px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
