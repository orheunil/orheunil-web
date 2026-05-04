import { HoverWrapper } from "@/components/animation/Hover";

export const CompanyBanner = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/company-banner.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex flex-col justify-center w-full h-[calc(100vh-64px)] px-[20px] text-center"
    >
      <HoverWrapper>
        <h1 className="text-white text-[32px] md:text-[60px] font-bold leading-[1.1] md:leading-[1.4]">
          차량은 스스로 운전하지만,
          <br />
          차량 관리는 스스로 할 수 없습니다.
        </h1>
      </HoverWrapper>

      <HoverWrapper distance={40} delay={0.4}>
        <p className="mt-[24px] text-white/85 text-[18px] md:text-[24px] font-medium">
          올타는 단순한 솔루션을 넘어, 무인 차량이 거점에 진입하고 관리받는{" "}
          <br />
          모든 과정을 통제하는 로봇택시 시대의 표준 OS가 됩니다.
        </p>
      </HoverWrapper>
    </section>
  );
};
