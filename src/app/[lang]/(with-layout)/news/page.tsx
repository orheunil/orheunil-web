import { NewsList } from "@/components/sections/news";
import { initServerI18N } from "@/utils";

export default async function News({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const i18n = await initServerI18N(lang, "news");
  const t = i18n.getFixedT(lang, "news");

  return (
    <div className="flex flex-col w-full">
      <NewsList t={t} />
    </div>
  );
}
