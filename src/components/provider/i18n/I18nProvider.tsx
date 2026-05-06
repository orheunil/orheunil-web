"use client";

import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { i18n as I18nType } from "i18next";
import { initClientI18n } from "@/utils/i18n-client";

interface Props {
  lang: string;
  children: React.ReactNode;
}

export const I18nProvider = ({ lang, children }: Props) => {
  const [i18n, setI18n] = useState<I18nType | null>(null);

  useEffect(() => {
    initClientI18n(lang).then(setI18n);
  }, [lang]);

  if (!i18n) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
