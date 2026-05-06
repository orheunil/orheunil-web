import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getI18nOptions } from "./getI18nOptions";

export const initServerI18N = async (lang: string, ns: string | string[]) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/locales/${language}/${namespace}.json`),
      ),
    )
    .init(getI18nOptions(lang, ns));

  return i18nInstance;
};
