import Image from "next/image";
import { arrowRight } from "../../../../public/images";

export const HomeContact = () => {
  return (
    <section className="flex justify-center w-full px-[20px] py-[140px] bg-main">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[268px] md:max-w-[1080px] gap-y-[80px]">
        <article className="flex flex-col text-white">
          <h2 className="text-[14px] md:text-[20px] font-semibold">
            B2B 솔루션
          </h2>

          <h3 className="mt-[12px] text-[24px] md:text-[36px] font-bold">
            복잡한 주유소/세차장 운영,
            <br />
            이제 스마트하게 관리하세요
          </h3>

          <button className="flex justify-between items-center w-full md:w-[268px] h-[52px] md:h-[58px] mt-[40px] md:mt-[60px] px-[24px] text-main text-[14px] md:text-[18px] font-semibold bg-white rounded-[16px]">
            도입 문의하기
            <Image
              src={arrowRight}
              alt="도입 문의하기"
              className="size-[20px] md:size-[24px]"
            />
          </button>
        </article>

        <article className="flex flex-col text-white">
          <h2 className="text-[14px] md:text-[20px] font-semibold">
            B2C 서비스
          </h2>

          <h3 className="mt-[12px] text-[24px] md:text-[36px] font-bold">
            올타 구독으로 세차 걱정 끝,
            <br />
            28,000원으로 매일 세차!
          </h3>

          <button className="flex justify-between items-center w-full md:w-[268px] h-[52px] md:h-[58px] mt-[40px] md:mt-[60px] px-[24px] text-main text-[14px] md:text-[18px] font-semibold bg-white rounded-[16px]">
            지금 시작하기
            <Image
              src={arrowRight}
              alt="지금 시작하기"
              className="size-[20px] md:size-[24px]"
            />
          </button>
        </article>
      </div>
    </section>
  );
};
