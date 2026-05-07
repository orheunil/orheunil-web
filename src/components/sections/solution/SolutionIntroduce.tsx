import { HoverWrapper } from "@/components/animation/Hover";

interface Props {
  t: (key: string) => string;
}

export const SolutionIntroduce = ({ t }: Props) => {
  return (
    <section className="flex flex-col justify-center w-full h-[calc(100vh-64px)] px-[20px] bg-white">
      <HoverWrapper>
        <h1 className="text-white text-[32px] md:text-[60px] font-bold leading-[1.1] md:leading-[1.4]">
          {t("banner.title.line1")}
          <br />
          {t("banner.title.line2")}
        </h1>
      </HoverWrapper>

      <HoverWrapper distance={40} delay={0.4}>
        <p className="mt-[24px] text-white/85 text-[18px] md:text-[24px] font-medium">
          {t("banner.description.line1")} <br />
          {t("banner.description.line2")}
        </p>
      </HoverWrapper>
    </section>
  );
};
