import {
  TechBanner,
  TechControl,
  TechIntroduce,
  TechPayment,
} from "@/components/sections/tech";

export default function Tech() {
  return (
    <div className="flex flex-col w-full">
      <TechBanner />
      <TechIntroduce />
      <TechControl />
      <TechPayment />
    </div>
  );
}
