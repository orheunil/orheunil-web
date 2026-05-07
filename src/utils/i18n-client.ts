"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getI18nOptions } from "./getI18nOptions";

// 초기화 약속(Promise)을 저장하여 중복 호출 방지
let initializationPromise: Promise<any> | null = null;

export const initClientI18n = (lang: string) => {
  if (!initializationPromise) {
    initializationPromise = i18n
      .use(initReactI18next)
      .use(
        resourcesToBackend(
          (language: string, namespace: string) =>
            import(`@/locales/${language}/${namespace}.json`),
        ),
      )
      .init(getI18nOptions(lang));
  } else {
    // 이미 초기화된 경우 언어만 변경
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }

  return i18n;
};
