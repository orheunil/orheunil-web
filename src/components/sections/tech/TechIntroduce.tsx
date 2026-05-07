import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { techImage1, techImage2, techImage3 } from "../../../../public/images";

interface Props {
  t: (key: string) => string;
}

export const TechIntroduce = ({ t }: Props) => {
  const item = [
    {
      image: techImage1,
      title: t("introduce.items.0.title"),
      content: (
        <>
          {t("introduce.items.0.content.line1")}
          <br />
          {t("introduce.items.0.content.line2")}
          <br />
          {t("introduce.items.0.content.line3")}
        </>
      ),
    },
    {
      image: techImage2,
      title: t("introduce.items.1.title"),
      content: (
        <>
          {t("introduce.items.1.content.line1")}
          <br />
          {t("introduce.items.1.content.line2")}
          <br />
          {t("introduce.items.1.content.line3")}
        </>
      ),
    },
    {
      image: techImage3,
      title: t("introduce.items.2.title"),
      content: (
        <>
          {t("introduce.items.2.content.line1")}
          <br />
          {t("introduce.items.2.content.line2")}
        </>
      ),
    },
  ];

  return (
    <section className="flex justify-center w-full px-[20px] md:px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <HoverWrapper>
          <h2 className="text-center text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            {t("introduce.title.line1")} <br className="block md:hidden" />
            {t("introduce.title.line2")}
          </h2>
        </HoverWrapper>

        <div className="flex flex-col lg:flex-row lg:justify-between mt-[60px] gap-[60px] lg:gap-[24px]">
          {item.map((value, index) => (
            <HoverWrapper key={index} distance={80} width="100%">
              <div className="flex flex-col w-full items-center">
                <div className="flex justify-center items-center w-full max-w-[344px] lg:max-w-full h-[186px] bg-gray1 rounded-[16px]">
                  <Image
                    src={value.image}
                    alt={`value_${index + 1}`}
                    className="size-[96px]"
                  />
                </div>

                <h3 className="mt-[20px] text-[24px] font-semibold">
                  {value.title}
                </h3>

                <p className="mt-[8px] text-center text-[14px] md:text-[16px]">
                  {value.content}
                </p>
              </div>
            </HoverWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
