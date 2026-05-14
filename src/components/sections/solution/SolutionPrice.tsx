import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { arrowWhite, checkIcon, phoneImage } from "../../../../public/images";

interface Props {
  t: (key: string) => string;
}

export const SolutionPrice = ({ t }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-64px)] px-[20px] md:px-[60px] py-[140px] bg-back3">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full max-w-[1080px]">
        <div className="flex flex-col">
          <h2 className="text-main text-[24px] md:text-[28px] lg:text-[36px] font-semibold leading-[1.1] md:leading-[1.4]">
            {t("price.title")}
          </h2>

          <p className="mt-[20px] text-[14px] md:text-[16px] lg:text-[20px] leading-[1.1] md:leading-[1.4]">
            {t("price.content.line1")}
            <br />
            {t("price.content.line2")}
          </p>

          <div className="flex items-center mt-[40px]">
            <Image
              src={checkIcon}
              alt={t("price.content.line3")}
              className="size-[24px] mr-[6px]"
            />

            <p className="text-[14px] md:text-[16px] lg:text-[20px] font-medium leading-[1.1] md:leading-[1.4]">
              {t("price.content.line3")}
            </p>
          </div>

          <div className="flex items-center mt-[12px]">
            <Image
              src={checkIcon}
              alt={t("price.content.line4")}
              className="size-[24px] mr-[6px]"
            />

            <p className="text-[14px] md:text-[16px] lg:text-[20px] font-medium leading-[1.1] md:leading-[1.4]">
              {t("price.content.line4")}
            </p>
          </div>

          <button className="flex justify-between items-center mt-[40px] w-[268px] h-[58px] px-[24px] text-white text-[16px] md:text-[18px] font-semibold bg-main rounded-[16px]">
            {t("price.cta")}

            <Image
              src={arrowWhite}
              alt={t("price.cta")}
              className="size-[24px] mr-[6px]"
            />
          </button>
        </div>

        <Image src={phoneImage} alt="올타" className="size-[480px]" />
      </div>
    </section>
  );
};
