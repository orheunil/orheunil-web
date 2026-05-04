import Image from "next/image";
import { contactIcon, downloadIcon } from "../../../../public/images";
import { HoverWrapper } from "@/components/animation/Hover";

export const HomeBanner = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/images/main-banner.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex flex-col justify-center w-full h-[calc(100vh-64px)] px-[20px] text-center"
    >
      <HoverWrapper>
        <h1 className="text-[32px] md:text-[60px] font-bold leading-[1.1] md:leading-[1.4]">
          로봇택시 시대를 위한
          <br />
          모빌리티 결제 플랫폼
        </h1>
      </HoverWrapper>

      <HoverWrapper distance={40} delay={0.4}>
        <p className="mt-[24px] text-[18px] md:text-[24px] font-medium">
          차량의 ID, 위치, 행동 데이터를 검증하여 완전 자동화된 결제 경험을
          제공합니다.
        </p>
      </HoverWrapper>

      <HoverWrapper distance={40} delay={0.8}>
        <div className="flex flex-col md:flex-row justify-center items-center mt-[48px] gap-[16px]">
          <button className="flex justify-center items-center w-full md:w-[160px] h-[44px] md:h-[50px] text-white text-[14px] md:text-[18px] font-semibold bg-main rounded-[12px]">
            <Image
              src={contactIcon}
              alt="도입 문의하기"
              className="size-[20px] md:size-[24px] mr-[6px]"
            />
            도입 문의하기
          </button>

          <a
            href="/files/올타_IR자료.pdf"
            download
            className="flex justify-center items-center w-full md:w-[160px] h-[44px] md:h-[50px] text-main text-[14px] md:text-[18px] font-semibold border-[2px] border-main rounded-[12px]"
          >
            <Image
              src={downloadIcon}
              alt="IR 자료받기"
              className="size-[20px] md:size-[24px] mr-[6px]"
            />
            IR 자료받기
          </a>
        </div>
      </HoverWrapper>
    </section>
  );
};
