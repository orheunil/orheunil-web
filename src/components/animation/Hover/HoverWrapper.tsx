"use client";

import React, { useRef } from "react";
import { useIntersection } from "@/hooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Props {
  distance?: number;
  delay?: number;
  children: React.ReactNode;
}

export const HoverWrapper = ({
  distance = 100,
  delay = 0,
  children,
}: Props) => {
  const { ref, isIntersecting } = useIntersection();

  const elRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!elRef.current) return;

      if (isIntersecting) {
        gsap.fromTo(
          elRef.current,
          {
            y: distance,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay,
          },
        );
      }
    },
    { dependencies: [isIntersecting] },
  );

  return (
    <div ref={ref}>
      <div ref={elRef}>{children}</div>
    </div>
  );
};
