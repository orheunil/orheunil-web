"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useIntersection } from "@/hooks";

interface Props {
  distance?: number;
  delay?: number;
  threshold?: number;
  children: React.ReactNode;
}

export const HoverWrapper = ({
  distance = 100,
  delay = 0,
  threshold = 0.9,
  children,
}: Props) => {
  const { ref, isIntersecting } = useIntersection(threshold);

  const elRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!elRef.current) return;

      if (isIntersecting) {
        gsap.to(elRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay,
        });
      }
    },
    { dependencies: [isIntersecting] },
  );

  return (
    <div ref={ref} className="w-full">
      <div
        ref={elRef}
        style={{
          transform: `translateY(${distance}px)`,
          opacity: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
