"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getI18nOptions } from "./getI18nOptions";

let initialized = false;

export const initClientI18n = () => {
  if (!initialized) {
    i18n
      .use(initReactI18next)
      .use(
        resourcesToBackend(
          (language: string, namespace: string) =>
            import(`@/locales/${language}/${namespace}.json`),
        ),
      )
      .init(getI18nOptions());

    initialized = true;
  }

  return i18n;
};
