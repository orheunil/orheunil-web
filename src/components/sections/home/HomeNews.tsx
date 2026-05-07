import Image from "next/image";
import { value1, value2, value3 } from "../../../../public/images";
import { HoverWrapper } from "@/components/animation/Hover";

interface Props {
  t: (key: string) => string;
}

const values = [
  {
    image: value1,
    title: "Abusing 0%",
    date: "2025.01.01",
  },
  {
    image: value2,
    title: "통합 관제 OS",
    date: "2025.01.01",
  },
  {
    image: value3,
    title: "AI 마케팅 엔진",
    date: "2025.01.01",
  },
];

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
            {values.map((value, index) => (
              <div key={index} className="flex flex-col flex-1">
                <div className="relative w-full h-[206px] rounded-[16px] overflow-hidden">
                  <Image
                    src={value.image}
                    alt={`article_${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-[32px] text-[20px] font-semibold line-clamp-2">
                  {value.title}
                </h3>
                <p className="mt-[12px] text-gray3 text-[16px]">{value.date}</p>
              </div>
            ))}
          </div>
        </HoverWrapper>
      </div>
    </section>
  );
};
