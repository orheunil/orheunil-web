import Image from "next/image";
import { arrowRight } from "../../../../public/images";
import { HoverWrapper } from "@/components/animation/Hover";
import Link from "next/link";

interface Props {
  lang: string;
  t: (key: string) => string;
}

export const HomeContact = ({ lang, t }: Props) => {
  return (
    <section className="flex justify-center w-full px-[20px] py-[140px] bg-main">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[268px] md:max-w-[1080px] gap-y-[80px]">
        <HoverWrapper>
          <article className="flex flex-col text-white">
            <h2 className="text-[14px] md:text-[20px] font-semibold">
              {t("contact.b2b.label")}
            </h2>

            <h3 className="mt-[12px] text-[24px] md:text-[36px] font-bold">
              {t("contact.b2b.title.line1")}
              <br />
              {t("contact.b2b.title.line2")}
            </h3>

            <Link
              href={`/${lang}/contact`}
              className="flex justify-between items-center w-full md:w-[268px] h-[52px] md:h-[58px] mt-[40px] md:mt-[60px] px-[24px] text-main text-[14px] md:text-[18px] font-semibold bg-white rounded-[16px]"
            >
              {t("contact.b2b.cta")}
              <Image
                src={arrowRight}
                alt={t("contact.b2b.cta")}
                className="size-[20px] md:size-[24px]"
              />
            </Link>
          </article>
        </HoverWrapper>

        <HoverWrapper delay={0.3}>
          <article className="flex flex-col text-white">
            <h2 className="text-[14px] md:text-[20px] font-semibold">
              {t("contact.b2c.label")}
            </h2>

            <h3 className="mt-[12px] text-[24px] md:text-[36px] font-bold">
              {t("contact.b2c.title.line1")}
              <br />
              {t("contact.b2c.title.line2")}
            </h3>

            <a
              href="https://www.allta.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full md:w-[268px] h-[52px] md:h-[58px] mt-[40px] md:mt-[60px] px-[24px] text-main text-[14px] md:text-[18px] font-semibold bg-white rounded-[16px]"
            >
              {t("contact.b2c.cta")}

              <Image
                src={arrowRight}
                alt={t("contact.b2b.cta")}
                className="size-[20px] md:size-[24px]"
              />
            </a>
          </article>
        </HoverWrapper>
      </div>
    </section>
  );
};
