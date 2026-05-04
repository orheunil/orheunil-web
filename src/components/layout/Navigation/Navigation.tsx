"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useResizeHandler } from "@/hooks";
import { hamburgerIcon, navLogo } from "../../../../public/images";

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
    title: "솔루션",
    route: "/solution",
  },
  {
    title: "뉴스룸",
    route: "/news",
  },
];

export const Navigation = () => {
  const { isMobile } = useResizeHandler();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed flex justify-center items-center top-0 w-screen h-[64px] px-[20px] bg-white z-[1]">
      {isMobile ? (
        <nav className="flex justify-between w-full">
          <Link href="/">
            <Image src={navLogo} alt="올타" className="w-[62px]" />
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <Image src={hamburgerIcon} alt="메뉴" className="size-[28px]" />
          </button>
        </nav>
      ) : (
        <nav className="flex justify-between w-full max-w-[1080px]">
          <Link href="/">
            <Image src={navLogo} alt="올타" className="w-[62px]" />
          </Link>

          <div className="flex gap-[60px] font-medium">
            {menus.map((value, index) => (
              <Link key={index} href={value.route}>
                {value.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
