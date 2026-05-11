import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { newsList } from "@/contants";
import Link from "next/link";

interface Props {
  t: (key: string) => string;
}

export const HomeNews = ({ t }: Props) => {
  return (
    <section className="flex justify-center w-full px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <HoverWrapper>
          <div className="flex justify-between items-center">
            <h2 className="text-[40px] font-semibold">최근 소식</h2>

            <div className="flex justify-center items-center px-[16px] py-[8px] text-white text-[16px] font-semibold bg-black rounded-[50px]">
              더보기
            </div>
          </div>
        </HoverWrapper>

        <HoverWrapper distance={40}>
          <div className="flex flex-col lg:flex-row mt-[60px] gap-[40px]">
            {newsList
              .sort((a, b) => b.index - a.index)
              .map((value, index) => (
                <a
                  key={index}
                  href={value.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row lg:flex-col flex-1 items-center gap-[32px] cursor-pointer"
                >
                  <div
                    style={{
                      backgroundImage: `url(${value.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    className="w-full md:w-[324px] lg:w-full h-[206px] rounded-[16px]"
                  />

                  <div className="flex flex-col flex-1">
                    <h3 className=" text-[20px] font-semibold line-clamp-2">
                      {value.title}
                    </h3>
                    <p className="mt-[12px] text-gray3 text-[16px]">
                      {value.date}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </HoverWrapper>
      </div>
    </section>
  );
};
