import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { techImage1, techImage2, techImage3 } from "../../../../public/images";

const item = [
  {
    image: techImage1,
    title: "Hyper-Precision ID",
    content: (
      <>
        YOLOv11 기반 객체 탐지 + 앙상블 OCR.
        <br />
        비, 눈, 흙탕물로 오염된 번호판도
        <br />
        99.7% 정확도 달성.
      </>
    ),
  },
  {
    image: techImage2,
    title: "Action Verification",
    content: (
      <>
        Semantic Segmentation 기술로 영상의 픽셀을 분석.
        <br />
        AI가 '세차 거품이 묻음', '충전기 케이블 연결됨' 등
        <br />
        구체적 물리 상태를 인지.
      </>
    ),
  },
  {
    image: techImage3,
    title: "Seamless Tracking",
    content: (
      <>
        Vehicle Re-ID 및 멀티 카메라 추적(MCVT) 기술.
        <br />
        사각지대에 들어가더라도 동일 차량을 연속 추적.
      </>
    ),
  },
];

export const TechIntroduce = () => {
  return (
    <section className="flex justify-center w-full px-[20px] md:px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <HoverWrapper>
          <h2 className="text-center text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            인식을 넘어, <br className="block md:hidden" />
            행동까지 이해하는 AI
          </h2>
        </HoverWrapper>

        <div className="flex flex-col lg:flex-row lg:justify-between mt-[60px] gap-[60px] lg:gap-[24px]">
          {item.map((value, index) => (
            <HoverWrapper key={index} distance={80} width="100%">
              <div className="flex flex-col w-full items-center">
                <div className="flex justify-center items-center w-full max-w-[344px] lg:max-w-full h-[186px] bg-gray1 rounded-[16px]">
                  <Image
                    src={value.image}
                    alt={`value_${index + 1}`}
                    className="size-[96px]"
                  />
                </div>

                <h3 className="mt-[20px] text-[24px] font-semibold">
                  {value.title}
                </h3>

                <p className="mt-[8px] text-center text-[14px] md:text-[16px]">
                  {value.content}
                </p>
              </div>
            </HoverWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
