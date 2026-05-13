import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { whiteDownloadIcon } from "../../../../public/images";

interface Props {
  t: (key: string) => string;
}

export const IrDownload = ({ t }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full px-[20px] py-[80px] md:py-[100px] lg:py-[140px] bg-back4">
      <div className="flex flex-col justify-center items-center w-full">
        <HoverWrapper>
          <h1 className="text-center text-[28px] md:text-[36px] lg:text-[40px] font-bold">
            {t("download.title.line1")}
            <br className="block md:hidden" />
            {t("download.title.line2")}
          </h1>
        </HoverWrapper>

        <HoverWrapper
          threshold={0.2}
          delay={0.3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          <a
            href="/files/올타_IR자료.pdf"
            download
            className="flex justify-center items-center self-center w-full md:w-[240px] h-[46px] md:h-[60px] mt-[32px] md:mt-[48px] text-white text-[16px] md:text-[20px] font-semibold bg-main rounded-[40px]"
          >
            <Image
              src={whiteDownloadIcon}
              alt={t("download.cta")}
              className="size-[20px] md:size-[24px] mr-[6px]"
            />
            {t("download.cta")}
          </a>
        </HoverWrapper>
      </div>
    </section>
  );
};
0;
