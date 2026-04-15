import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="fixed flex justify-center items-center top-0 w-screen h-[64px] bg-white">
      <div className="flex justify-between w-full max-w-[1080px]">
        <p>올타</p>

        <div className="flex gap-[60px] font-medium">
          <Link href="/about">회사소개</Link>
          <Link href="/service">서비스</Link>
          <Link href="/solution">솔루션</Link>
          <Link href="/news">뉴스룸</Link>
        </div>
      </div>
    </nav>
  );
};
