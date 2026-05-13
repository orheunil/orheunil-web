import { HoverWrapper } from "@/components/animation/Hover";

interface Props {
  t: (key: string) => string;
}

export const IrBanner = ({ t }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full min-h-[calc(100vh-64px)] px-[20px] py-[80px] md:py-[100px] lg:py-[140px] text-center">
      <div className="flex flex-col justify-center items-center w-full max-w-[1080px]">
        <HoverWrapper>
          <h1 className="text-center text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.4]">
            {t("banner.title.line1")}
            <br />
            {t("banner.title.line2")}
          </h1>
        </HoverWrapper>

        <div className="flex flex-col md:flex-row justify-between w-full h-full mt-[60px] gap-[40px]">
          <HoverWrapper width="100%">
            <div className="flex flex-col justify-center items-center h-[180px] md:h-[186px] lg:h-[244px] bg-gray1 rounded-[20px]">
              <p className="text-[40px] lg:text-[60px] font-semibold">
                {t("banner.items.0.value")}
              </p>
              <h3 className="mt-[12px] text-gray5 text-[20px]">
                {t("banner.items.0.label")}
              </h3>
            </div>
          </HoverWrapper>

          <HoverWrapper width="100%">
            <div className="flex flex-col justify-center items-center h-[180px] md:h-[186px] lg:h-[244px] bg-gray1 rounded-[20px]">
              <p className="text-[40px] lg:text-[60px] font-semibold">
                {t("banner.items.1.value")}
              </p>
              <h3 className="mt-[12px] text-gray5 text-[20px]">
                {t("banner.items.1.label")}
              </h3>
            </div>
          </HoverWrapper>

          <HoverWrapper width="100%">
            <div className="flex flex-col justify-center items-center h-[180px] md:h-[186px] lg:h-[244px] bg-gray1 rounded-[20px]">
              <p className="text-[40px] lg:text-[60px] font-semibold">
                {t("banner.items.2.value")}
              </p>
              <h3 className="mt-[12px] text-gray5 text-[16px] lg:text-[20px]">
                {t("banner.items.2.label")}
              </h3>
            </div>
          </HoverWrapper>
        </div>
      </div>
    </section>
  );
};
