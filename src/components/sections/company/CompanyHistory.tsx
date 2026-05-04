import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { companyHistory } from "../../../../public/images";

export const CompanyHistory = () => {
  return (
    <section className="flex justify-center w-full px-[20px] py-[140px] bg-white">
      <div className="flex flex-col items-center w-full max-w-[1080px]">
        <HoverWrapper>
          <h2 className="text-center text-[28px] md:text-[40px] font-semibold">
            올타는 계속해서 성장합니다
          </h2>
        </HoverWrapper>

        <HoverWrapper threshold={0.5}>
          <Image
            src={companyHistory}
            alt="연혁"
            className="w-full max-w-[512px] mt-[60px]"
          />
        </HoverWrapper>
      </div>
    </section>
  );
};
