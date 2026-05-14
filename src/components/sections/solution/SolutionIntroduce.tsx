import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import {
  solution1,
  solution2,
  solution3,
  solution4,
  solution5,
} from "../../../../public/images";

interface Props {
  t: (key: string) => string;
}

export const SolutionIntroduce = ({ t }: Props) => {
  const items = [
    {
      image: solution1,
      title: t("introduce.items.0.title"),
      content: t("introduce.items.0.content"),
    },
    {
      image: solution2,
      title: t("introduce.items.1.title"),
      content: t("introduce.items.1.content"),
    },
    {
      image: solution3,
      title: t("introduce.items.2.title"),
      content: t("introduce.items.2.content"),
    },
    {
      image: solution4,
      title: t("introduce.items.3.title"),
      content: t("introduce.items.3.content"),
    },
    {
      image: solution5,
      title: t("introduce.items.4.title"),
      content: t("introduce.items.4.content"),
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-64px)] px-[20px] md:px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.1] md:leading-[1.4]">
          {t("introduce.title.line1")}
          <br />
          {t("introduce.title.line2")}
        </h1>

        <div className="flex flex-col lg:flex-row flex-wrap justify-center mt-[60px] gap-[20px]">
          {items.map((value, index) => (
            <div
              key={index}
              className="flex flex-col p-[24px] w-full lg:max-w-[346px] border border-line rounded-[20px]"
            >
              <Image
                src={value.image}
                alt={value.title}
                className="size-[40px]"
              />

              <h3 className="mt-[20px] text-[20px] font-semibold">
                {value.title}
              </h3>
              <p className="mt-[8px] text-[16px]">{value.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
