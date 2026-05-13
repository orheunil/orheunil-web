import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import {
  marketEn1,
  marketEn2,
  marketEn3,
  marketKo1,
  marketKo2,
  marketKo3,
  marketMobileEn1,
  marketMobileEn2,
  marketMobileEn3,
  marketMobileKo1,
  marketMobileKo2,
  marketMobileKo3,
} from "../../../../public/images";

interface Props {
  t: (key: string) => string;
  lang: string;
}

export const IrMarket = ({ t, lang }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full min-h-[calc(100vh-64px)] px-[20px] py-[80px] md:py-[100px] lg:py-[140px] bg-gray1">
      <div className="flex flex-col justify-center items-center w-full max-w-[1080px]">
        <HoverWrapper width="100%">
          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            {t("market.title")}
          </h1>
        </HoverWrapper>

        <div className="flex flex-col mt-[60px] gap-[20px]">
          <div className="flex items-center w-full h-full gap-[40px]">
            <HoverWrapper threshold={0.95} width="100%">
              {/* Mobile */}
              <Image
                src={lang === "en" ? marketMobileEn1 : marketMobileKo1}
                alt={t("market.items.0.label.line1")}
                className="block md:hidden"
              />

              {/* Desktop */}
              <Image
                src={lang === "en" ? marketEn1 : marketKo1}
                alt={t("market.items.0.label.line1")}
                className="hidden md:block"
              />
            </HoverWrapper>

            <div className="hidden md:block w-full">
              <HoverWrapper threshold={0.95} width="100%">
                <div className="flex flex-col text-[18px] lg:text-[24px]">
                  <h3>
                    <strong className="font-semibold">
                      {t("market.items.0.label.line1")}
                    </strong>{" "}
                    {t("market.items.0.label.line2")}
                  </h3>

                  <p className="mt-[8px] text-gray5 font-medium">
                    {t("market.items.0.description")}
                  </p>
                </div>
              </HoverWrapper>
            </div>
          </div>

          <div className="flex items-center w-full h-full gap-[40px]">
            <HoverWrapper threshold={0.95} width="100%">
              {/* Mobile */}
              <Image
                src={lang === "en" ? marketMobileEn2 : marketMobileKo2}
                alt={t("market.items.1.label.line1")}
                className="block md:hidden"
              />

              {/* Desktop */}
              <Image
                src={lang === "en" ? marketEn2 : marketKo2}
                alt={t("market.items.1.label.line1")}
                className="hidden md:block"
              />
            </HoverWrapper>

            <div className="hidden md:block w-full">
              <HoverWrapper threshold={0.95} width="100%">
                <div className="flex flex-col text-[18px] lg:text-[24px]">
                  <h3>
                    <strong className="font-semibold">
                      {t("market.items.1.label.line1")}
                    </strong>{" "}
                    {t("market.items.1.label.line2")}
                  </h3>

                  <p className="mt-[8px] text-gray5 font-medium">
                    {t("market.items.1.description")}
                  </p>
                </div>
              </HoverWrapper>
            </div>
          </div>

          <div className="flex items-center w-full h-full gap-[40px]">
            <HoverWrapper threshold={0.95} width="100%">
              {/* Mobile */}
              <Image
                src={lang === "en" ? marketMobileEn3 : marketMobileKo3}
                alt={t("market.items.2.label.line1")}
                className="block md:hidden"
              />

              {/* Desktop */}
              <Image
                src={lang === "en" ? marketEn3 : marketKo3}
                alt={t("market.items.2.label.line1")}
                className="hidden md:block"
              />
            </HoverWrapper>

            <div className="hidden md:block w-full">
              <HoverWrapper threshold={0.95} width="100%">
                <div className="flex flex-col text-[18px] lg:text-[24px]">
                  <h3>
                    <strong className="font-semibold">
                      {t("market.items.2.label.line1")}
                    </strong>{" "}
                    {t("market.items.2.label.line2")}
                  </h3>

                  <p className="mt-[8px] text-gray5 font-medium">
                    {t("market.items.2.description")}
                  </p>
                </div>
              </HoverWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
