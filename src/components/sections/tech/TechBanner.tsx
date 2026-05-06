import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { cctvImage } from "../../../../public/images";

export const TechBanner = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-64px)] px-[20px] md:px-[60px] bg-[#000000] overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full max-w-[1460px] gap-[40px] lg:gap-[20px]">
        <div className="flex flex-col">
          <HoverWrapper direction="RIGHT">
            <h1 className="text-white text-[32px] lg:text-[60px] font-bold eading-[1.4] whitespace-nowrap">
              단순 인식을 넘어
              <br />
              <strong className="text-main font-semibold">‘행동 검증’</strong>을
              수행하는
              <br />
              Deep-Tech 기술
            </h1>
          </HoverWrapper>

          <HoverWrapper distance={40} direction="RIGHT" delay={0.4}>
            <p className="mt-[24px] text-white/85 text-[14px] md:text-[18px] lg:text-[24px] font-medium whitespace-nowrap">
              기존 LPR 시스템은 차량의 진입만 볼 뿐,
              <br />
              서비스 이용은 보지 못합니다.
              <br />
              올타는 이 사각지대(Blind Spot)를 Vision AI로 해결합니다.
            </p>
          </HoverWrapper>
        </div>

        <div className="w-full max-w-full lg:max-w-[800px]">
          <HoverWrapper
            delay={0.8}
            distance={120}
            direction="LEFT"
            threshold={0.4}
            flex={1}
          >
            <Image src={cctvImage} alt="기술소개" className="w-full" />
          </HoverWrapper>
        </div>
      </div>
    </section>
  );
};
