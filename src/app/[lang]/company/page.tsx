import { initServerI18N } from "@/utils";
import {
  CompanyBanner,
  CompanyHistory,
  CompanyStep,
} from "@/components/sections/company";

export default async function Company({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const i18n = await initServerI18N(lang, "company");
  const t = i18n.getFixedT(lang, "company");

  return (
    <div className="flex flex-col w-full">
      <CompanyBanner t={t} />
      <CompanyStep t={t} />
      <CompanyHistory t={t} />
    </div>
  );
}
