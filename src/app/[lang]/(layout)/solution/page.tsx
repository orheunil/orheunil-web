import { initServerI18N } from "@/utils";
import {
  SolutionCalculator,
  SolutionIntroduce,
  SolutionPrice,
} from "@/components/sections/solution";

export default async function Solution({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const i18n = await initServerI18N(lang, "solution");
  const t = i18n.getFixedT(lang, "solution");

  return (
    <div className="flex flex-col w-full">
      <SolutionIntroduce t={t} />
      <SolutionCalculator />
      <SolutionPrice t={t} />
    </div>
  );
}
