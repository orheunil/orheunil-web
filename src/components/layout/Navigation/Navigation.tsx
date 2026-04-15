"use client";

import { useRouter } from "next/navigation";

export const Navigation = () => {
  const router = useRouter();

  return (
    <div className="fixed flex justify-center items-center top-0 w-screen h-[64px] bg-white">
      <div className="flex justify-between w-full max-w-[1080px]">
        <p>올타</p>

        <div className="flex gap-[60px] font-medium">
          <button
            onClick={() => router.push("/about")}
            className="cursor-pointer"
          >
            회사소개
          </button>
          <button
            onClick={() => router.push("/service")}
            className="cursor-pointer"
          >
            서비스
          </button>
          <button
            onClick={() => router.push("/solution")}
            className="cursor-pointer"
          >
            솔루션
          </button>
          <button
            onClick={() => router.push("/news")}
            className="cursor-pointer"
          >
            뉴스룸
          </button>
        </div>
      </div>
    </div>
  );
};
