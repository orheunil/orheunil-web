import { initServerI18N } from "@/utils";
import {
  IrBanner,
  IrDownload,
  IrGrowth,
  IrMarket,
} from "@/components/sections/ir";

export default async function Ir({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const i18n = await initServerI18N(lang, "ir");
  const t = i18n.getFixedT(lang, "ir");

  return (
    <div className="flex flex-col w-full">
      <IrBanner t={t} />
      <IrMarket t={t} lang={lang} />
      <IrGrowth t={t} lang={lang} />
      <IrDownload t={t} />
    </div>
  );
}
