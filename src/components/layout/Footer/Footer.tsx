import Link from "next/link";
import Image from "next/image";
import { blogIcon, instaIcon, youtubeIcon } from "../../../../public/images";

export const Footer = () => {
  return (
    <footer className="flex justify-center bg-gray-100 px-[60px]">
      <div className="flex flex-col w-full max-w-[1080px] pt-[80px] pb-[96px]">
        <div className="flex flex-col md:flex-row gap-[40px]">
          <div className="flex flex-col w-[130px] text-[16px]">
            <h3 className="font-medium">회사</h3>

            <div className="flex flex-col mt-[16px] gap-[8px] text-gray7">
              <Link href="/about">회사소개</Link>
              <Link href="/service">서비스</Link>
              <Link href="/solution">솔루션</Link>
              <Link href="/news">뉴스룸</Link>
            </div>
          </div>

          <div className="flex flex-col w-[130px] text-[16px]">
            <h3 className="font-medium">서비스</h3>

            <div className="flex flex-col mt-[16px] gap-[8px] text-gray7">
              <p>세차장 찾기</p>
              <p>앱 다운로드</p>
            </div>
          </div>

          <div className="flex flex-col w-[130px] text-[16px]">
            <h3 className="font-medium">문의</h3>

            <div className="flex flex-col mt-[16px] gap-[8px] text-gray7">
              <p>고객센터</p>
              <p>제휴 문의</p>
              <p>IR</p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col mt-[80px] pb-[72px] md:pb-0">
          {/* 회사 정보 */}
          <p className="text-[15px] font-semibold">(주)옳은일</p>

          <address className="mt-[8px] text-gray5 text-[13px] not-italic">
            사업자 등록번호 : 850-81-02703 | 대표 : 이승열 | 주소 : 경기 하남시
            미사강변한강로 SKV1센터
          </address>

          <p className="text-gray5 text-[13px]">
            TEL : 1668-1620 | EMAIL : orheunil@orheun.com
          </p>

          <small className="text-gray5 text-[13px]">
            ©2025. ORHEUNIL. All Rights Reserve
          </small>

          {/* 약관 */}
          <div className="flex flex-wrap items-center mt-[20px] gap-x-[20px] gap-y-[8px] text-[13px] font-semibold">
            <button>이용약관</button>
            <button>개인정보처리방침</button>
            <button>운영정책</button>
            <button>위치기반서비스 이용약관</button>
          </div>

          {/* SNS */}
          <div className="absolute flex items-start bottom-0 md:top-0 md:right-0 gap-[20px]">
            <a
              href="https://www.instagram.com/allta.official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instaIcon} alt="인스타그램" className="size-[32px]" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCFIrfCGdLMktEiSewt5adRg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={youtubeIcon} alt="유튜브" className="size-[32px]" />
            </a>

            <a
              href="https://blog.naver.com/orheunilallta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={blogIcon} alt="블로그" className="size-[32px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
