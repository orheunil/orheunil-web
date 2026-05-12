"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { blogIcon, instaIcon, youtubeIcon } from "../../../../public/images";

export const Footer = () => {
  const pathname = usePathname();

  const { t } = useTranslation("common");

  const currentLocale = pathname.split("/")[1];

  return (
    <footer className="flex justify-center bg-gray-100 px-[60px]">
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
              <p>{t("footer.service.stores")}</p>
              <a
                href="https://www.allta.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.service.app")}
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[130px] text-[16px]">
            <h3 className="font-medium">{t("footer.inquiry.title")}</h3>

            <div className="flex flex-col mt-[16px] gap-[8px] text-gray7">
              <p>{t("footer.inquiry.center")}</p>
              <p>{t("footer.inquiry.partnership")}</p>
              <p>{t("footer.inquiry.ir")}</p>
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
            <Link href={`/${currentLocale}/terms/service`}>
              {t("footer.terms.service")}
            </Link>
            <Link href={`/${currentLocale}/terms/privacy`}>
              {t("footer.terms.privacy")}
            </Link>
            <Link href={`/${currentLocale}/terms/policy`}>
              {t("footer.terms.policy")}
            </Link>
            <Link href={`/${currentLocale}/terms/location`}>
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
