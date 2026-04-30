"use client";

import { useEffect, useState } from "react";

export const HomeCount = () => {
  const [count, setCount] = useState(0);

  const target = 10839;

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="flex flex-col justify-center w-full py-[240px] text-center text-white bg-[#000000]">
      <h2 className="text-[24px] font-semibold">전국 주유소</h2>
      <p className="mt-[12px] text-[70px] font-bold">
        {count.toLocaleString()}
      </p>
    </section>
  );
};
