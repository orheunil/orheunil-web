import { HoverWrapper } from "@/components/animation/Hover";

export const TechControl = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-[20px] md:px-[60px] py-[140px] bg-[#000000]">
      <HoverWrapper>
        <h2 className="text-center text-white text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
          정확한 인식부터 끊김 없는 추적까지, <br className="block lg:hidden" />
          완전한 차량 AI 시스템
        </h2>
      </HoverWrapper>

      <div className="flex flex-col w-full max-w-[1080px] mt-[60px] gap-[60px]">
        <HoverWrapper threshold={0.6} width="100%">
          <article
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(/images/control-1.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full max-w-[1080px] aspect-[1080/554] px-[20px] md:px-[40px] lg:px-[60px] py-[20px] md:py-[32px] lg:py-[48px] text-white rounded-[16px]"
          >
            <h3 className="text-[15px] md:text-[24px] lg:text-[32px] font-semibold">
              악천후에서도 99.7% 정확도
            </h3>

            <p className="mt-[10px] md:mt-[16px] lg:mt-[20px] text-[11px] md:text-[16px] lg:text-[20px]">
              YOLOv11 기반 + 앙상블 OCR 기술
              <br />
              비, 눈, 흙탕물로 오염된 번호판 인식
            </p>
          </article>
        </HoverWrapper>

        <HoverWrapper threshold={0.6} width="100%">
          <article
            style={{
              backgroundImage: "url(/images/control-2.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full max-w-[1080px] aspect-[1080/554] px-[20px] md:px-[40px] lg:px-[60px] py-[20px] md:py-[32px] lg:py-[48px] rounded-[16px]"
          >
            <h3 className="text-[15px] md:text-[24px] lg:text-[32px] font-semibold">
              사각지대 없는 연속 추적
            </h3>

            <p className="mt-[10px] md:mt-[16px] lg:mt-[20px] text-[11px] md:text-[16px] lg:text-[20px]">
              Vehicle Re-ID 및 멀티 카메라 추적(MCVT)
              <br />
              차량이 이동하거나 사각지대에 들어가더라도
              <br />
              동일 차량을 연속 추적
            </p>
          </article>
        </HoverWrapper>
      </div>
    </section>
  );
};
