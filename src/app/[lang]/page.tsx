import { initServerI18N } from "@/utils";
import {
  HomeBanner,
  HomeContact,
  HomeCount,
  HomeNews,
  HomeValue,
} from "@/components/sections/home";

export default async function Home({ params }: { params: { lang: string } }) {
  const i18n = await initServerI18N(params.lang, "home");
  const t = i18n.getFixedT(params.lang, "home");

  return (
    <div className="flex flex-col w-full">
      <HomeBanner t={t} />
      <HomeValue />
      <HomeCount />
      <HomeNews />
      <HomeContact />
    </div>
  );
}
