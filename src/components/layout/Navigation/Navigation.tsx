import Image from "next/image";
import Link from "next/link";
import { navLogo } from "../../../../public/images";

export const Navigation = () => {
  return (
    <header className="fixed flex justify-center items-center top-0 w-screen h-[64px] bg-white">
      <nav className="flex justify-between w-full max-w-[1080px]">
        <Link href="/">
          <Image src={navLogo} alt="올타" className="w-[62px]" />
        </Link>

        <div className="flex gap-[60px] font-medium">
          <Link href="/about">회사소개</Link>
          <Link href="/service">서비스</Link>
          <Link href="/solution">솔루션</Link>
          <Link href="/news">뉴스룸</Link>
        </div>
      </nav>
    </header>
  );
};
