import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { value1, value2, value3 } from "../../../../public/images";

interface Props {
  t: (key: string) => string;
}

export const HomeValue = ({ t }: Props) => {
  const values = [
    {
      image: value1,
      title: t("value.items.0.title"),
      content: (
        <>
          {t("value.items.0.content.line1")}
          <br />
          {t("value.items.0.content.line2")}
        </>
      ),
    },
    {
      image: value2,
      title: t("value.items.1.title"),
      content: (
        <>
          {t("value.items.1.content.line1")}
          <br />
          {t("value.items.1.content.line2")}
        </>
      ),
    },
    {
      image: value3,
      title: t("value.items.2.title"),
      content: (
        <>
          {t("value.items.2.content.line1")}
          <br />
          {t("value.items.2.content.line2")}
        </>
      ),
    },
  ];

  return (
    <section className="flex justify-center w-full px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <HoverWrapper>
          <h2 className="text-[40px] font-semibold">{t("value.title")}</h2>
        </HoverWrapper>

        <div className="flex flex-col">
          {values.map((value, index) => (
            <HoverWrapper key={index} distance={80}>
              <div className="flex flex-col md:flex-row items-center mt-[60px] px-[32px] py-[28px] gap-x-[86px] bg-gray1 rounded-[20px]">
                <Image
                  src={value.image}
                  alt={`value_${index + 1}`}
                  className="size-[140px] md:size-[180px] lg:size-[240px]"
                />

                <div className="flex flex-col w-full">
                  <h3 className="text-main text-[20px] md:text-[28px] lg:text-[32px] font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-[12px] md:mt-[24px] text-[14px] md:text-[18ox] lg:text-[20px]">
                    {value.content}
                  </p>
                </div>
              </div>
            </HoverWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
