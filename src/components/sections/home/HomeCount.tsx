"use client";

import {
  CurrentIndexWrapper,
  NextIndexWrapper,
  PrevIndexWrapper,
} from "@/components/animation/VerticalScroll";
import { useEffect, useRef, useState } from "react";

const contents = [
  { title: "전국 주유소", value: "10,839" },
  { title: "자동차 애프터마켓 TAM", value: "100조 원" },
  { title: "지점당 월 수익 개선", value: "5,000,000원" },
  { title: "AI 차량 인식 정확도", value: "99.7%" },
];

export const HomeCount = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prevIndexRef = useRef(0);

  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"UP" | "DOWN">("DOWN");

  const currentItem = contents[index];
  const prevItem = contents[index - 1];
  const nextItem = contents[index + 1];

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = -rect.top;
      const vh = window.innerHeight;

      let newIndex = Math.floor(scrollY / vh);
      newIndex = Math.max(0, Math.min(newIndex, contents.length - 1));

      if (newIndex !== prevIndexRef.current) {
        if (newIndex > prevIndexRef.current) {
          setDirection("DOWN");
        } else {
          setDirection("UP");
        }

        prevIndexRef.current = newIndex;

        setIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[480vh] bg-[#000000]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute text-center translate-y-[-70px]">
          <h3 key={index} className="text-[24px] font-semibold animate-fade-in">
            {currentItem.title}
          </h3>
        </div>

        <div className="absolute text-center translate-y-[-70px]">
          <h3
            key={index}
            className="text-[24px] font-semibold animate-fade-out"
          >
            {!prevItem || !nextItem
              ? ""
              : direction === "DOWN"
                ? (prevItem.title ?? "")
                : nextItem.title}
          </h3>
        </div>

        {prevItem && (
          <PrevIndexWrapper direction={direction}>
            <p className="text-[86px] font-bold">{prevItem.value}</p>
          </PrevIndexWrapper>
        )}

        <CurrentIndexWrapper direction={direction}>
          <p className="text-[86px] font-bold">{currentItem.value}</p>
        </CurrentIndexWrapper>

        {nextItem && (
          <NextIndexWrapper direction={direction}>
            <p className="text-[86px] font-bold">{nextItem.value}</p>
          </NextIndexWrapper>
        )}
      </div>
    </section>
  );
};
