import Image from "next/image";
import Background from "@/app/components/Background";
import divider from "/public/assets/images/Main/divider_large.svg";
import rect1 from "/public/assets/images/Main/rectangle_1.svg";
import rect3 from "/public/assets/images/Main/rectangle_3.svg";
import rect4 from "/public/assets/images/Main/rectangle_4.svg";
import circle from "/public/assets/images/Main/circle.svg";
import cd from "/public/assets/images/Main/image_cd1.svg";
import axios from "axios";
import Link from "next/link";

// refreshToken cookie 주고 받기 위함
axios.defaults.withCredentials = true;

export default function Home() {
  return (
    <div className="h-[calc(100vh-104px)] font-[pretendard]">
      <Background>
        <Deco />
        <Headline />
        {/* animate-spin origin-bottom */}
        <ul className="lg:hidden mt-[4rem] tall:mt-0 flex flex-col s:flex-row s:justify-end s:items-start s:space-x-3 s:mr-[2rem] mr-[3rem] content-end items-end">
          <li className="s:w-fit w-[38vw] h-[100%] py-1.5  s:py-3 s:pr-3 s:pl-3  flex s:items-center s:justify-center s:pl-0 justify-start items-start pl-[1rem] bg-[#281CFF] min-w-[160px] rounded-[20px] mb-[16px] s:rounded-full">
            <Link href="http://pf.kakao.com/_UaIZG" target="_blank" passHref>
              <div className="flex items-center">
                <Image
                  src="/assets/images/Main/kakaoicon.svg"
                  alt="카카오톡 채널"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="s:w-[32px] s:h-[32px] w-[28px] h-[28px]"
                />
                <span className="s:hidden text-white ml-3">KakaoTalk</span>
              </div>
            </Link>
          </li>
          <li className="s:w-fit w-[38vw] h-[100%] py-1.5 s:py-3 s:pr-3 s:pl-3 flex s:items-center s:justify-center s:pl-0 justify-start items-start pl-[1rem] s:ml-0 bg-[#281CFF] min-w-[160px] rounded-[20px] mb-[16px] s:rounded-full">
            <Link
              href="https://instagram.com/kahlua_band_?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              passHref
            >
              <div className="flex items-center">
                <Image
                  src="/assets/images/Main/isgicon.svg"
                  alt="인스타그램"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="s:w-[32px] s:h-[32px] w-[28px] h-[28px]"
                />
                <span className="s:hidden text-white ml-3">Instagram</span>
              </div>
            </Link>
          </li>
          <li className="s:w-fit w-[38vw] h-[100%] py-1.5 s:py-3 s:pr-3 s:pl-3 flex s:items-center s:justify-center s:pl-0 justify-start items-start pl-[1rem] bg-[#281CFF] min-w-[160px] rounded-[20px] s:rounded-full">
            <Link
              href="https://www.youtube.com/@kahluaband8409"
              target="_blank"
              passHref
            >
              <div className="flex items-center">
                <Image
                  src="/assets/images/Main/youtubeicon.svg"
                  alt="유튜브"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="s:w-[32px] s:h-[32px] w-[28px] h-[28px]"
                />
                <span className="s:hidden text-white ml-3">YouTube</span>
              </div>
            </Link>
          </li>
        </ul>
        <Image
          src={cd}
          alt=".."
          width={0}
          height={0}
          sizes="100vw"
          className="hidden tall:flex absolute bottom-0 right-0 z-20 object-cover object-bottom m:w-[780px] m:h-[400px] s:w-[720px] s:h-[380px] p:w-[700px] p:h-[360px]"
        />
        <div className="w-[100vw] h-[60px] sm:h-[90px] bg-[#000] items-center content-center flex justify-center text-center bottom-0 fixed z-30"></div>
        <Link
          href="/application"
          className="flex blur-none filter-none fixed text-center bottom-[0] z-30  items-center justify-center content-center font-[600] sm:font-[700] text-[#FFF] text-[20px] sm:text-[24px] whitespace-nowrap h-[60px] sm:h-[90px] w-[100vw]"
        >
          KAHLUA 23기 지원하러 가기
        </Link>
      </Background>
    </div>
  );
}

function Headline() {
  return (
    <div className="mt-10 bg-transparent ml-[calc(8%)] l:ml-[calc(22%)] s:ml-[calc(19%)] x:ml-[calc(16%)] q:ml-[calc(14%)]">
      <Image
        src={divider}
        alt="kahlua"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[80px] x:w-[88px] s:w-[108px]"
      />
      <p className="font-GothamBold text-5xl font-bold mt-2 s:text-7xl">
        Band Club
      </p>
      <p className="font-Salvar text-5xl font-bold mt-2 s:text-7xl">KAHLUA</p>
      <p className=" font-pretendard text-[#6A6A6A] mt-4 l:text-xl m:text-lg s:text-base">
        We are
        <br />
        Hongik University Computer Engineering
        <br />
        Band Club KAHLUA!
      </p>
    </div>
  );
}

function Deco() {
  return (
    <div className=" bg-transparent ">
      <Image
        src={rect3}
        alt=".."
        width={165}
        className="absolute right-0 top-0 w-[calc(12.5%)] mt-10"
      />
      <Image
        src={circle}
        alt=".."
        width={160}
        className="hidden absolute w-[calc(12%)] top-40 l:right-[calc(24%)] s:right-[calc(20%)] x:right-[calc(14%)] x:block"
      />
      <Image
        src={circle}
        alt=".."
        width={160}
        className="hidden absolute left-[calc(5%)] w-[calc(12%)] top-64 x:block"
      />
      <Image
        src={rect4}
        alt=".."
        width={165}
        className="absolute left-0 top-[390px] x:w-[calc(12.5%)] w-[calc(28%)] q:top-[360px] z-20 tiny:hidden"
      />
      <Image
        src={rect1}
        alt=".."
        width={165}
        className="absolute left-[calc(12.5%)] x:bottom-0 x:w-[calc(12.5%)] w-[calc(30%)] p:bottom-[60px] tiny:hidden"
      />
    </div>
  );
}
