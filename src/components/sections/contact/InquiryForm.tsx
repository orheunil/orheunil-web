"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SyncLoader } from "react-spinners";
import { regexEmail } from "@/utils";
import { EmailForm } from "@/types";
import { colors } from "@/styles";

export const InquiryForm = () => {
  const [form, setForm] = useState<EmailForm>({
    name: "",
    email: "",
    phoneNumber: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { t } = useTranslation("contact");

  const handleChange =
    (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9-]/g, "");

    setForm((prev) => ({
      ...prev,
      phoneNumber: value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.name.trim().length) {
      return alert("이름을 입력해주세요.");
    }

    if (!form.email.trim().length) {
      return alert("이메일을 입력해주세요.");
    }

    if (!regexEmail.test(form.email)) {
      return alert("올바른 이메일 형식이 아닙니다.");
    }

    if (!form.phoneNumber) {
      return alert("전화번호를 입력해주세요.");
    }

    if (form.content.length < 10) {
      return alert("문의 내용은 10자 이상 작성해주세요.");
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const post = await response.json();

      if (post.status === 200) {
        alert("문의가 접수되었습니다.");

        return setForm({
          name: "",
          email: "",
          phoneNumber: "",
          content: "",
        });
      } else {
        alert(post.message);
      }
    } catch (error) {
      alert("메일 전송 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center w-full min-h-[calc(100vh-64px)] px-[20px] md:px-[60px] bg-white">
      {isLoading && (
        <div className="fixed inset-0 flex justify-center items-center w-screen h-full bg-black/50 z-[99]">
          <SyncLoader color={colors.white} />
        </div>
      )}

      <div className="flex flex-col w-full max-w-[1080px]">
        <div className="flex flex-col text-start md:text-center pt-[60px] pb-[40px]">
          <h1 className="text-start md:text-center text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            {t("title")}
          </h1>

          <p className="mt-[16px] text-[16px] md:text-[18px] lg:text-[20px]">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex flex-col items-center w-full py-[100px] gap-[48px]">
          <div className="flex flex-col w-full">
            <p className="text-[16px]">{t("name")} *</p>
            <input
              value={form.name}
              onChange={handleChange("name")}
              placeholder={t("namePlaceholder")}
              className="mt-[8px] p-[16px] text-[16px] border border-line rounded-[8px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <p className="text-[16px]">{t("email")} *</p>
            <input
              value={form.email}
              onChange={handleChange("email")}
              placeholder={t("emailPlaceholder")}
              className="mt-[8px] p-[16px] text-[16px] border border-line rounded-[8px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <p className="text-[16px]">{t("phone")} *</p>
            <input
              value={form.phoneNumber}
              onChange={handlePhoneNumber}
              placeholder={t("phonePlaceholder")}
              className="mt-[8px] p-[16px] text-[16px] border border-line rounded-[8px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <p className="text-[16px]">{t("content")} *</p>
            <textarea
              value={form.content}
              onChange={handleChange("content")}
              placeholder={t("contentPlaceholder")}
              className="h-[200px] mt-[8px] p-[16px] text-[16px] border border-line rounded-[8px] resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full md:w-[180px] h-[60px] text-[18px] text-white font-semibold bg-main rounded-[16px] cursor-pointer"
          >
            {t("cta")}
          </button>
        </div>
      </div>
    </section>
  );
};
