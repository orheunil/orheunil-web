import {
  CompanyBanner,
  CompanyHistory,
  CompanyStep,
} from "@/components/sections/company";

export default function Service() {
  return (
    <div className="flex flex-col w-full">
      <CompanyBanner />
      <CompanyStep />
      <CompanyHistory />
    </div>
  );
}
