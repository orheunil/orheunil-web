"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { faqList } from "@/contants/faqs";
import { faqArrow } from "../../../../public/images";

export const FaqList = () => {
  const { t } = useTranslation("faq");
  const pathname = usePathname();

  const [category, setCategory] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const currentLocale = pathname.split("/")[1];

  const selectedFaqList = category
    ? faqList.filter((faq) => faq.category === category)
    : faqList;

  useEffect(() => {
    setOpenIndex(null);
  }, [category]);

  return (
    <section className="flex flex-col justify-center items-center w-full bg-white">
      <div className="flex flex-col w-full pt-[60px]">
        <h1 className="px-[20px] text-start md:text-center text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
          자주 묻는 질문
        </h1>

        <div className="flex justify-center items-center w-full mt-[40px] px-[20px] gap-[32px] text-[16px] md:text-[20px] font-semibold border-b border-b-line">
          <button
            onClick={() => setCategory(null)}
            className={`relative py-[12px] cursor-pointer ${!category ? "text-main border-b-[2px] border-b-main" : "text-gray4"}`}
          >
            전체
          </button>

          {faqList.map((value, index) => (
            <button
              key={`button_${index}`}
              onClick={() => setCategory(value.category)}
              className={`relative py-[12px] cursor-pointer ${category === value.category ? "text-main border-b-[2px] border-b-main" : "text-gray4"}`}
            >
              {value.label}
            </button>
          ))}

          {/* <button
            onClick={() => setCategory("SERVICE")}
            className={`relative py-[12px] cursor-pointer ${category === "SERVICE" ? "text-main border-b-[2px] border-b-main" : "text-gray4"}`}
          >
            서비스 이용
          </button>
          <button
            onClick={() => setCategory("PARTNERSHIP")}
            className={`relative py-[12px] cursor-pointer ${category === "PARTNERSHIP" ? "text-main border-b-[2px] border-b-main" : "text-gray4"}`}
          >
            제휴 문의
          </button> */}
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[1080px] h-full px-[20px] py-[80px] md:py-[100px] lg:py-[140px]">
        {selectedFaqList.map((faqs) => (
          <div key={faqs.category}>
            {faqs.list.map((value, index) => {
              const faqKey = `${faqs.category}-${index}`;
              const isOpen = openIndex === faqKey;

              return (
                <div key={faqKey} className="flex flex-col text-[18px]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : faqKey)}
                    className={`flex items-center justify-between p-[20px] gap-[20px] cursor-pointer ${!isOpen && "border-b border-b-line"}`}
                  >
                    <div className="flex text-start">
                      <span className="mr-[12px] text-gray5 font-medium">
                        Q
                      </span>
                      <p>{value.question}</p>
                    </div>

                    <Image
                      src={faqArrow}
                      alt="답변"
                      className={`size-[24px] duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-[24px] py-[20px] bg-gray1 rounded-[12px]">
                      <p className="text-[#585858] whitespace-pre-line">
                        {value.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};
