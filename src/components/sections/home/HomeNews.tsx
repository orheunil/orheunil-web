import Image from "next/image";
import { HoverWrapper } from "@/components/animation/Hover";
import { newsList } from "@/contants";

interface Props {
  t: (key: string) => string;
}

export const HomeNews = ({ t }: Props) => {
  return (
    <section className="flex justify-center w-full px-[60px] py-[140px] bg-white">
      <div className="flex flex-col w-full max-w-[1080px]">
        <HoverWrapper>
          <div className="flex justify-between">
            <h2 className="text-[40px] font-semibold">최근 소식</h2>

            <button>더보기</button>
          </div>
        </HoverWrapper>

        <HoverWrapper distance={40}>
          <div className="flex mt-[60px] gap-[40px]">
            {newsList
              .sort((a, b) => b.index - a.index)
              .map((value, index) => (
                <a
                  key={index}
                  href={value.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col flex-1 cursor-pointer"
                >
                  <div
                    style={{
                      backgroundImage: `url(${value.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    className="w-full h-[206px] rounded-[16px]"
                  />

                  <h3 className="mt-[32px] text-[20px] font-semibold line-clamp-2">
                    {value.title}
                  </h3>
                  <p className="mt-[12px] text-gray3 text-[16px]">
                    {value.date}
                  </p>
                </a>
              ))}
          </div>
        </HoverWrapper>
      </div>
    </section>
  );
};
