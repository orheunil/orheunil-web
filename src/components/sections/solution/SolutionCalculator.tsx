"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { colors } from "@/styles/colors";

export const SolutionCalculator = () => {
  const { t, i18n } = useTranslation("solution");
  const isKorean = i18n.language.startsWith("ko");
  const salesMin = 5000000;
  const salesMax = 50000000;

  const [stores, setStores] = useState<number>(1);
  const [sales, setSales] = useState<number>(salesMin);
  const [people, setPeople] = useState<number>(1);
  const [savings, setSavings] = useState<number>(0);
  const [roi, setRoi] = useState<number>(1);

  const formatEnglishMoney = (amount: number) => {
    const value = amount / 1400;

    if (value >= 1000000) {
      const rounded = Math.round(value / 100000) * 100000;
      const million = rounded / 1000000;

      return `$ ${million.toLocaleString(undefined, {
        maximumFractionDigits: 1,
      })}${t("calculator.money.million")}`;
    }

    if (value >= 1000) {
      const rounded = Math.round(value / 1000) * 1000;

      return `$ ${(rounded / 1000).toLocaleString()}${t(
        "calculator.money.thousand",
      )}`;
    }

    return `$ ${Math.round(value).toLocaleString()}`;
  };

  const formatMoney = (amount: number) => {
    if (!isKorean) {
      return formatEnglishMoney(amount);
    }

    const rounded = Math.round(amount / 10000) * 10000;
    const eok = Math.floor(rounded / 100000000);
    const man = Math.floor((rounded % 100000000) / 10000);

    if (eok > 0) {
      const eokText = `${eok}${t("calculator.money.eok")}`;
      const manText =
        man > 0 ? `${man.toLocaleString()}${t("calculator.money.man")}` : "";

      return `${[eokText, manText].filter(Boolean).join(" ")} ${t(
        "calculator.money.currency",
      )}`;
    }

    return `${man.toLocaleString()}${t("calculator.money.man")} ${t(
      "calculator.money.currency",
    )}`;
  };

  useEffect(() => {
    const fraudSavings = 1000000;
    const laborSavings = 3000000 * people;
    const revenueIncrease = sales * 0.04;
    const subscriptionFee = 300000;
    const totalSavings = fraudSavings + laborSavings + revenueIncrease;
    const monthlySavings = (totalSavings - subscriptionFee) * stores;
    const totalSubscriptionFee = subscriptionFee * stores;

    setSavings(Math.round(monthlySavings));
    setRoi(Math.round(monthlySavings / totalSubscriptionFee));
  }, [sales, stores, people]);

  return (
    <section className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-64px)] px-[20px] md:px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <h1 className="text-center text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
          {t("calculator.title.line1")}
          <br />
          {t("calculator.title.line2")}
        </h1>

        <div className="flex flex-col lg:flex-row lg:justify-between w-full p-[24px] md:px-[112px] md:py-[40px] lg:p-[60px] mt-[60px] gap-[24px] md:gap-[40px] lg:gap-[80px] text-[14px] md:text-[16px] bg-gray1 rounded-[28px]">
          <div
            className="flex flex-1 flex-col p-[16px] md:p-[40px] bg-white rounded-[16px]"
            style={{
              boxShadow: "0 4px 10px 2px rgba(28, 28, 44, 0.2)",
            }}
          >
            {/* 매장 수 */}
            <div className="flex justify-between items-center">
              <p>{t("calculator.stores.label")}</p>

              <p>
                <strong className="text-[24px] md:text-[28px] font-semibold">
                  {stores}{" "}
                </strong>
                {t("calculator.stores.unit")}
              </p>
            </div>

            <Slider
              min={1}
              max={50}
              value={stores}
              style={{ margin: "12px 0 24px 0" }}
              trackStyle={{
                height: 6,
                backgroundColor: colors.main,
              }}
              railStyle={{ height: 6, backgroundColor: colors.gray2 }}
              handleStyle={{
                width: 24,
                height: 24,
                marginTop: -9,
                backgroundColor: colors.gray2,
                borderColor: colors.main,
                borderWidth: 2,
                boxShadow: "none",
                opacity: 1,
              }}
              activeHandleStyle={{
                borderWidth: 2,
                boxShadow: "none",
                opacity: 1,
              }}
              onChange={(value) => {
                if (typeof value === "number") {
                  setStores(value);
                }
              }}
            />

            <div className="flex justify-between items-center text-gray5">
              <p>{t("calculator.stores.min")}</p>
              <p>{t("calculator.stores.max")}</p>
            </div>

            {/* 매장 당 매출 */}
            <div className="flex justify-between items-center mt-[80px]">
              <p>{t("calculator.sales.label")}</p>

              <p>
                <strong className="text-[24px] md:text-[28px] font-semibold">
                  {formatMoney(sales)}
                </strong>
              </p>
            </div>

            <Slider
              min={salesMin}
              max={salesMax}
              step={1}
              value={sales}
              style={{ margin: "12px 0 24px 0" }}
              trackStyle={{
                height: 6,
                backgroundColor: colors.main,
              }}
              railStyle={{ height: 6, backgroundColor: colors.gray2 }}
              handleStyle={{
                width: 24,
                height: 24,
                marginTop: -9,
                backgroundColor: colors.gray2,
                borderColor: colors.main,
                borderWidth: 2,
                boxShadow: "none",
                opacity: 1,
              }}
              activeHandleStyle={{
                borderWidth: 2,
                boxShadow: "none",
                opacity: 1,
              }}
              onChange={(value) => {
                if (typeof value === "number") {
                  setSales(value);
                }
              }}
            />

            <div className="flex justify-between items-center text-gray5">
              <p>{formatMoney(salesMin)}</p>
              <p>{formatMoney(salesMax)}</p>
            </div>

            {/* 야간 인력 */}
            <p className="mt-[80px]">{t("calculator.people.label")}</p>

            <div className="flex justify-between items-center mt-[12px] gap-[12px] text-[16px] md:text-[20px]">
              <button
                onClick={() => setPeople(1)}
                className={`flex flex-1 justify-center items-center h-[60px] font-semibold rounded-[8px] cursor-pointer 
                  ${people === 1 ? "border-[2px] border-main" : "border-[1px] border-line"}`}
              >
                {t("calculator.people.one")}
              </button>

              <button
                onClick={() => setPeople(2)}
                className={`flex flex-1 justify-center items-center h-[60px] font-semibold rounded-[8px] cursor-pointer 
                  ${people === 2 ? "border-[2px] border-main" : "border-[1px] border-line"}`}
              >
                {t("calculator.people.two")}
              </button>
            </div>
          </div>

          {/* 절감액 */}
          <div className="flex flex-1 flex-col justify-center gap-[20px] md:gap-[28px] lg:gap-[60px]">
            <div
              className="flex flex-col justify-center items-center w-full lg:w-[395px] h-[200px] lg:h-[250px] text-center bg-white rounded-[16px]"
              style={{
                boxShadow: "0 4px 10px 2px rgba(28, 28, 44, 0.2)",
              }}
            >
              <p className="text-[14px] md:text-[24px]">
                {t("calculator.results.savings")}
              </p>
              <p className="mt-[8px] text-main text-[40px] md:text-[48px] font-bold">
                {formatMoney(savings)}
              </p>
            </div>

            {/* ROI */}
            <div
              className="flex flex-col justify-center items-center w-full lg:w-[395px] h-[200px] lg:h-[250px] text-center bg-white rounded-[16px]"
              style={{
                boxShadow: "0 4px 10px 2px rgba(28, 28, 44, 0.2)",
              }}
            >
              <p className="text-[14px] md:text-[24px]">
                {t("calculator.results.roi")}
              </p>

              <p className="mt-[8px] text-main text-[40px] md:text-[48px] font-bold">
                {t("calculator.results.approx")} {roi}
                {t("calculator.results.times")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
