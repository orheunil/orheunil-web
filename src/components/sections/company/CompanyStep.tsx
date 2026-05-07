import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import {
  companyStep1,
  companyStep2,
  companyStep3,
} from "../../../../public/images";

interface Props {
  t: (key: string) => string;
}

export const CompanyStep = ({ t }: Props) => {
  const items = [
    {
      image: companyStep1,
      title: t("step.items.0.title"),
      content: (
        <>
          {t("step.items.0.content.line1")}
          <br />
          {t("step.items.0.content.line2")}
        </>
      ),
    },
    {
      image: companyStep2,
      title: t("step.items.1.title"),
      content: (
        <>
          {t("step.items.1.content.line1")}
          <br />
          {t("step.items.1.content.line2")}
        </>
      ),
    },
    {
      image: companyStep3,
      title: t("step.items.2.title"),
      content: (
        <>
          {t("step.items.2.content.line1")}
          <br />
          {t("step.items.2.content.line2")}
        </>
      ),
    },
  ];

  return (
    <section className="flex justify-center w-full px-[20px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <HoverWrapper>
          <h2 className="text-center text-[28px] md:text-[40px] font-semibold">
            {t("step.title")}
          </h2>
        </HoverWrapper>

        <div className="flex flex-col items-center w-full mt-[60px] gap-[100px]">
          {items.map((value, index) => (
            <HoverWrapper key={index} distance={80} width="100%">
              <div
                key={index}
                className={`flex flex-col items-center w-full max-w-[568px] md:max-w-full gap-[60px] ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="relative aspect-[335/198] w-full rounded-[16px] overflow-hidden">
                  <Image
                    src={value.image}
                    alt={`step${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 568px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <p className="text-main text-[20px] font-semibold">
                    STEP {index + 1}
                  </p>

                  <h3 className="mt-[32px] text-[32px] font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-[8px] text-[20px]">{value.content}</p>
                </div>
              </div>
            </HoverWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
