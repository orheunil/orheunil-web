import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { value1, value2, value3 } from "../../../../public/images";

const values = [
  {
    image: value1,
    title: "Abusing 0%",
    content: (
      <>
        AI가 직접 보고 모든 데이터를 1:1로 매칭합니다.
        <br />단 1원의 오차도 허용하지 않는 정산 시스템을 제공합니다
      </>
    ),
  },
  {
    image: value2,
    title: "통합 관제 OS",
    content: (
      <>
        SK, GS, S-Oil 등 모든 브랜드 주유소를
        <br />
        하나의 플랫폼으로 연결합니다.
      </>
    ),
  },
  {
    image: value3,
    title: "AI 마케팅 엔진",
    content: (
      <>
        AI를 활용한 마케팅 전략으로
        <br />
        주유소 매출을 극대화합니다.
      </>
    ),
  },
];

export const HomeValue = () => {
  return (
    <section className="flex justify-center w-full px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <HoverWrapper>
          <h2 className="text-[40px] font-semibold">올타의 핵심 가치</h2>
        </HoverWrapper>

        <div className="flex flex-col">
          {values.map((value, index) => (
            <HoverWrapper key={index} distance={80}>
              <div className="flex flex-col md:flex-row items-center mt-[60px] px-[32px] py-[28px] gap-x-[86px] bg-gray1 rounded-[20px]">
                <Image
                  src={value.image}
                  alt={`value_${index + 1}`}
                  className="size-[140px] md:size-[180px] lg:size-[240px]"
                />

                <div className="flex flex-col w-full">
                  <h3 className="text-main text-[20px] md:text-[28px] lg:text-[32px] font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-[12px] md:mt-[24px] text-[14px] md:text-[18ox] lg:text-[20px]">
                    {value.content}
                  </p>
                </div>
              </div>
            </HoverWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
