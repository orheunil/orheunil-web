import { initServerI18N } from "@/utils";
import {
  TechBanner,
  TechControl,
  TechIntroduce,
  TechPayment,
} from "@/components/sections/tech";

export default async function Tech({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const i18n = await initServerI18N(lang, "tech");
  const t = i18n.getFixedT(lang, "tech");

  return (
    <div className="flex flex-col w-full">
      <TechBanner t={t} />
      <TechIntroduce t={t} />
      <TechControl t={t} />
      <TechPayment t={t} />
    </div>
  );
}
