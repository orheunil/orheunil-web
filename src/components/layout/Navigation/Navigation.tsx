"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useResizeHandler } from "@/hooks";
import {
  arrowDown,
  closeIcon,
  hamburgerIcon,
  navLogoEn,
  navLogoKo,
} from "../../../../public/images";

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { t } = useTranslation("common");
  const { isDesktop } = useResizeHandler();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showLocales, setShowLocales] = useState<boolean>(false);

  const menus = [
    {
      title: t("navigation.company"),
      route: "/company",
    },
    {
      title: t("navigation.service"),
      route: "/service",
    },
    {
      title: t("navigation.tech"),
      route: "/tech",
    },
    {
      title: t("navigation.solution"),
      route: "/solution",
    },
    {
      title: t("navigation.news"),
      route: "/news",
    },
    {
      title: t("navigation.ir"),
      route: "/ir",
    },
  ];

  const currentLocale = pathname.split("/")[1];

  const handleChangeLocales = (lang: "ko" | "en") => () => {
    const segments = pathname.split("/");
    segments[1] = lang;

    setIsOpen(false);

    return router.push(segments.join("/"));
  };

  return (
    <>
      {isDesktop ? (
        <header className="fixed flex justify-center items-center top-0 w-screen h-[64px] px-[20px] md:px-[60px] bg-white z-[1]">
          <nav className="flex justify-between w-full max-w-[1080px]">
            <Link href={`/${currentLocale}`}>
              {currentLocale === "en" ? (
                <Image src={navLogoEn} alt="Allta" className="w-[104px]" />
              ) : (
                <Image src={navLogoKo} alt="올타" className="w-[62px]" />
              )}
            </Link>

            <div className="flex items-center gap-[60px] font-semibold">
              {menus.map((value, index) => {
                if (value.route === "/service") {
                  return (
                    <a
                      key={index}
                      href="https://allta.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value.title}
                    </a>
                  );
                }
                return (
                  <Link key={index} href={`/${currentLocale}${value.route}`}>
                    {value.title}
                  </Link>
                );
              })}

              <div
                onClick={() => setShowLocales(!showLocales)}
                className="relative flex items-center cursor-pointer"
              >
                {currentLocale.toUpperCase()}

                <Image
                  src={arrowDown}
                  alt={currentLocale.toUpperCase()}
                  className={`size-[20px] ml-[4px] duration-300 ${
                    showLocales ? "rotate-180" : "rotate-0"
                  }`}
                />

                {showLocales && (
                  <div
                    className="absolute flex flex-col top-[30px] right-0 bg-white rounded-[6px]"
                    style={{
                      boxShadow: "0 4px 10px 2px rgba(28, 28, 44, 0.2)",
                    }}
                  >
                    <button
                      onClick={handleChangeLocales("ko")}
                      className="px-[20px] py-[8px] cursor-pointer"
                    >
                      KO
                    </button>

                    <button
                      onClick={handleChangeLocales("en")}
                      className="px-[20px] py-[8px] cursor-pointer"
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </header>
      ) : (
        <header className="fixed flex items-center top-0 w-screen z-[1]">
          <nav className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full h-[64px] px-[20px] bg-white">
              <Link href={`/${currentLocale}`} onClick={() => setIsOpen(false)}>
                {currentLocale === "en" ? (
                  <Image src={navLogoEn} alt="Allta" className="w-[104px]" />
                ) : (
                  <Image src={navLogoKo} alt="올타" className="w-[62px]" />
                )}
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              >
                <Image
                  src={isOpen ? closeIcon : hamburgerIcon}
                  alt="메뉴"
                  className="size-[28px]"
                />
              </button>
            </div>

            <div
              className={`flex flex-col w-full px-[20px] text-[20px] font-semibold bg-white duration-500 overflow-hidden ${isOpen ? "h-[calc(100vh-64px)]" : "h-0"}`}
            >
              <div className="flex flex-col py-[12px] overflow-y-auto hide-scrollbar">
                {menus.map((value, index) => (
                  <Link
                    key={index}
                    href={`/${currentLocale}${value.route}`}
                    onClick={() => setIsOpen(false)}
                    className="py-[14px] cursor-pointer"
                  >
                    {value.title}
                  </Link>
                ))}

                <div className="flex items-center mt-[120px]">
                  <button
                    onClick={handleChangeLocales("ko")}
                    className={
                      currentLocale === "ko" ? "text-black" : "text-gray2"
                    }
                  >
                    KR
                  </button>

                  <div className="w-[2px] h-[12px] mx-[8px] bg-line" />

                  <button
                    onClick={handleChangeLocales("en")}
                    className={
                      currentLocale === "en" ? "text-black" : "text-gray2"
                    }
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};
