import { initServerI18N } from "@/utils";
import {
  HomeBanner,
  HomeContact,
  HomeCount,
  HomeNews,
  HomeValue,
} from "@/components/sections/home";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const i18n = await initServerI18N(lang, "home");
  const t = i18n.getFixedT(lang, "home");

  return (
    <div className="flex flex-col w-full">
      <HomeBanner t={t} />
      <HomeValue t={t} />
      <HomeCount />
      <HomeNews lang={lang} t={t} />
      <HomeContact lang={lang} t={t} />
    </div>
  );
}
