"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { useResizeHandler } from "@/hooks";
import { closeIcon, hamburgerIcon, navLogo } from "../../../../public/images";

const menus = [
  {
    title: "회사소개",
    route: "/company",
  },
  {
    title: "서비스",
    route: "/service",
  },
  {
    title: "기술 소개",
    route: "/tech",
  },
  {
    title: "솔루션",
    route: "/solution",
  },
  {
    title: "뉴스룸",
    route: "/news",
  },
  {
    title: "문의",
    route: "/news",
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  const { i18n } = useTranslation();
  const { isDesktop } = useResizeHandler();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {isDesktop ? (
        <header className="fixed flex justify-center items-center top-0 w-screen h-[64px] px-[20px] md:px-[60px] bg-white z-[1]">
          <nav className="flex justify-between w-full max-w-[1080px]">
            <Link href="/">
              <Image src={navLogo} alt="올타" className="w-[62px]" />
            </Link>

            <div className="flex gap-[60px] font-semibold">
              {menus.map((value, index) => (
                <Link key={index} href={value.route}>
                  {value.title}
                </Link>
              ))}
            </div>
          </nav>
        </header>
      ) : (
        <header className="fixed flex items-center top-0 w-screen z-[1]">
          <nav className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full h-[64px] px-[20px] bg-white">
              <Link href="/">
                <Image src={navLogo} alt="올타" className="w-[62px]" />
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
                    href={value.route}
                    className="py-[14px] cursor-pointer"
                  >
                    {value.title}
                  </Link>
                ))}

                <div className="flex items-center mt-[120px]">
                  <button onClick={() => i18n.changeLanguage("ko")}>KR</button>

                  <div className="w-[2px] h-[12px] mx-[8px] bg-line" />

                  <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                </div>
              </div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};
