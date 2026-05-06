import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { paymentImage } from "../../../../public/images";

const items = [
  {
    title: "• Action Verification",
    content: "영상의 픽셀을 분석하여 서비스 수행 여부 판단",
  },
  {
    title: "• Context Awareness",
    content:
      "AI가 ‘세차 거품이 묻음’ , ‘충전기 케이블이 연결됨’ 같은 구체적인 물리적 상태를 인지",
  },
  {
    title: "• The Result",
    content:
      "실제 서비스가 수행되었음이 데이터로 검증될 때만 결제가 실행되어 부정 결제를 원천 차단",
  },
];

export const TechPayment = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-[20px] md:px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px] mt-[60px] gap-[60px]">
        <HoverWrapper direction="RIGHT" width="100%">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
            픽셀 단위의 행동 분석으로
            <br />
            서비스 완료를 검증하고 <br className="block md:hidden" />
            <strong className="text-main font-semibold">결제를 트리거</strong>
            합니다
          </h2>
        </HoverWrapper>

        <div className="flex flex-col lg:flex-row lg:items-center gap-[32px] lg:gap-[32px]">
          <HoverWrapper direction="RIGHT" width="100%">
            <Image
              src={paymentImage}
              alt="결제 트리거"
              className="w-full md:max-w-[540px] lg:w-[540px]"
            />
          </HoverWrapper>

          <HoverWrapper direction="RIGHT" width="100%">
            <div className="flex flex-col gap-[28px]">
              {items.map((value, index) => (
                <article key={index} className="flex flex-col">
                  <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-[8px] text-[14px] md:text-[16px] lg:text-[18px] ">
                    {value.content}
                  </p>
                </article>
              ))}
            </div>
          </HoverWrapper>
        </div>
      </div>
    </section>
  );
};
