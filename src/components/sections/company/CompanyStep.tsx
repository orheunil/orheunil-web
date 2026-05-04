import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import {
  companyStep1,
  companyStep2,
  companyStep3,
} from "../../../../public/images";

const steps = [
  {
    image: companyStep1,
    title: "Smart Station",
    content: (
      <>
        세차•주유•주차 거점을 데이터 기반 스마트 스테이션으로
        <br />
        전환해 운영을 자동화하고 효율을 극대화합니다.
      </>
    ),
  },
  {
    image: companyStep2,
    title: "Energy Platform",
    content: (
      <>
        EV 충전 인프라를 중심으로 에너지 관리 영역까지 확장해
        <br />
        차량과 에너지를 하나의 흐름으로 연결합니다.
      </>
    ),
  },
  {
    image: companyStep3,
    title: "Robotaxi OS",
    content: (
      <>
        로봇택시 스테이션 1,000개를 기반으로
        <br />
        자율주행 시대의 표준 운영체제를 구축합니다.
      </>
    ),
  },
];

export const CompanyStep = () => {
  return (
    <section className="flex justify-center w-full px-[20px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <HoverWrapper>
          <h2 className="text-center text-[28px] md:text-[40px] font-semibold">
            차량 관리의 기준을 다시 만듭니다
          </h2>
        </HoverWrapper>

        <div className="flex flex-col items-center w-full mt-[60px] gap-[100px]">
          {steps.map((value, index) => (
            <HoverWrapper key={index} distance={80}>
              <div
                key={index}
                className={`flex flex-col items-center w-full max-w-[568px] md:max-w-full gap-[60px] ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="relative aspect-[335/198] w-full rounded-[16px] overflow-hidden">
                  <Image
                    src={value.image}
                    alt={`step${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 568px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <p className="text-main text-[20px] font-semibold">
                    STEP {index + 1}
                  </p>

                  <h3 className="mt-[32px] text-[32px] font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-[8px] text-[20px]">{value.content}</p>
                </div>
              </div>
            </HoverWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
