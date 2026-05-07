import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { paymentImage } from "../../../../public/images";

interface Props {
  t: (key: string) => string;
}

export const TechPayment = ({ t }: Props) => {
  const items = [
    {
      title: t("payment.items.0.title"),
      content: t("payment.items.0.content"),
    },
    {
      title: t("payment.items.1.title"),
      content: t("payment.items.1.content"),
    },
    {
      title: t("payment.items.2.title"),
      content: t("payment.items.2.content"),
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center w-full px-[20px] md:px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px] mt-[60px] gap-[60px]">
        <HoverWrapper direction="RIGHT" width="100%">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
            {t("payment.title.line1")}
            <br />
            {t("payment.title.line2")} <br className="block md:hidden" />
            <strong className="text-main font-semibold">
              {t("payment.title.highlight")}
            </strong>
            {t("payment.title.line3")}
          </h2>
        </HoverWrapper>

        <div className="flex flex-col lg:flex-row lg:items-center gap-[32px] lg:gap-[32px]">
          <HoverWrapper direction="RIGHT" width="100%">
            <Image
              src={paymentImage}
              alt="결제 트리거"
              className="w-full md:max-w-[540px] lg:w-[540px]"
            />
          </HoverWrapper>

          <HoverWrapper direction="RIGHT" width="100%">
            <div className="flex flex-col gap-[28px]">
              {items.map((value, index) => (
                <article key={index} className="flex flex-col">
                  <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                    • {value.title}
                  </h3>
                  <p className="mt-[8px] text-[14px] md:text-[16px] lg:text-[18px] ">
                    {value.content}
                  </p>
                </article>
              ))}
            </div>
          </HoverWrapper>
        </div>
      </div>
    </section>
  );
};
