import { HoverWrapper } from "@/components/animation/Hover";

interface Props {
  t: (key: string) => string;
}

export const TechControl = ({ t }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-[20px] md:px-[60px] py-[140px] bg-[#000000]">
      <HoverWrapper>
        <h2 className="text-center text-white text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
          {t("control.title.line1")} <br className="block lg:hidden" />
          {t("control.title.line2")}
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
              {t("control.items.0.title")}
            </h3>

            <p className="mt-[10px] md:mt-[16px] lg:mt-[20px] text-[11px] md:text-[16px] lg:text-[20px]">
              {t("control.items.0.description.line1")}
              <br />
              {t("control.items.0.description.line2")}
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
              {t("control.items.1.title")}
            </h3>

            <p className="mt-[10px] md:mt-[16px] lg:mt-[20px] text-[11px] md:text-[16px] lg:text-[20px]">
              {t("control.items.1.description.line1")}
              <br />
              {t("control.items.1.description.line2")}
              <br />
              {t("control.items.1.description.line3")}
            </p>
          </article>
        </HoverWrapper>
      </div>
    </section>
  );
};
