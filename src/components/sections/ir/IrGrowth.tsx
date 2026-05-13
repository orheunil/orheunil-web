import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import {
  marketChartEn,
  marketChartKo,
  marketChartMobileEn,
  marketChartMobileKo,
} from "../../../../public/images";

interface Props {
  t: (key: string) => string;
  lang: string;
}

export const IrGrowth = ({ t, lang }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full min-h-[calc(100vh-64px)] px-[20px] py-[80px] md:py-[100px] lg:py-[140px] bg-white">
      <div className="flex flex-col justify-center items-center w-full max-w-[1080px]">
        <HoverWrapper width="100%">
          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            {t("growth.title")}
          </h1>
        </HoverWrapper>

        <HoverWrapper>
          {/* Mobile */}
          <Image
            src={lang === "en" ? marketChartMobileEn : marketChartMobileKo}
            alt="차트"
            className="block md:hidden w-full mt-[60px]"
          />

          {/* Desktop */}
          <Image
            src={lang === "en" ? marketChartEn : marketChartKo}
            alt="차트"
            className="hidden md:block w-full max-w-[732px] mt-[60px]"
          />
        </HoverWrapper>
      </div>
    </section>
  );
};
