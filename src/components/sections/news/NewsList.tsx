import Image from "next/image";
import { newsList } from "@/contants";

interface Props {
  t: (key: string) => string;
}

export const NewsList = ({ t }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-64px)] px-[20px] md:px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <h1 className="text-start md:text-center text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.1] md:leading-[1.4]">
          {t("title")}
        </h1>

        <div className="flex flex-col lg:grid lg:grid-cols-2 w-full max-w-[960px] mt-[60px] py-[100px] lg:py-[140px] gap-x-[100px] gap-y-[60px] lg:gap-y-[80px]">
          {newsList
            .sort((a, b) => b.index - a.index)
            .map((value, index) => (
              <div key={index} className="flex flex-col w-full">
                <div
                  style={{
                    backgroundImage: `url(${value.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="w-full h-[268px] rounded-[16px]"
                />

                <h3 className="mt-[20px] text-[20px] md:text-[24px] font-semibold line-clamp-2">
                  {value.title}
                </h3>

                <p className="mt-[8px] text-gray3 text-[16px] md:text-[16px]">
                  {value.date}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
