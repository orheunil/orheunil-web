"use client";

import React, { useEffect, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { initClientI18n } from "@/utils/i18n-client";

export const I18nProvider = ({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) => {
  const i18nInstance = useMemo(() => initClientI18n(lang), [lang]);

  useEffect(() => {
    i18nInstance.changeLanguage(lang);
  }, [i18nInstance, lang]);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
};
