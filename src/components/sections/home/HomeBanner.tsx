import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { contactIcon, downloadIcon } from "../../../../public/images";

interface Props {
  t: (key: string) => string;
}

export const HomeBanner = ({ t }: Props) => {
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
          {t("banner.title.line1")}
          <br />
          {t("banner.title.line2")}
        </h1>
      </HoverWrapper>

      <HoverWrapper distance={40} delay={0.4}>
        <p className="mt-[24px] text-[18px] md:text-[24px] font-medium">
          {t("banner.description")}
        </p>
      </HoverWrapper>

      <HoverWrapper distance={40} delay={0.8}>
        <div className="flex flex-col md:flex-row justify-center items-center mt-[48px] gap-[16px]">
          <button className="flex justify-center items-center w-full md:w-[160px] h-[44px] md:h-[50px] text-white text-[14px] md:text-[18px] font-semibold bg-main rounded-[12px]">
            <Image
              src={contactIcon}
              alt={t("banner.cta.contact")}
              className="size-[20px] md:size-[24px] mr-[6px]"
            />
            {t("banner.cta.contact")}
          </button>

          <a
            href="/files/올타_IR자료.pdf"
            download
            className="flex justify-center items-center w-full md:w-[160px] h-[44px] md:h-[50px] text-main text-[14px] md:text-[18px] font-semibold border-[2px] border-main rounded-[12px]"
          >
            <Image
              src={downloadIcon}
              alt={t("banner.cta.download")}
              className="size-[20px] md:size-[24px] mr-[6px]"
            />
            {t("banner.cta.download")}
          </a>
        </div>
      </HoverWrapper>
    </section>
  );
};
