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
import { Cookies } from "react-cookie";

// refreshToken cookie 주고 받기 위함
// axios.defaults.withCredentials = true;

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: any): void => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string): string | undefined => {
  return cookies.get(name);
};

axios.defaults.withCredentials = true;

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.headers.common["X-CSRFToken"] = getCookie("csrftoken");

export default function Home() {
  return (
    // min-h-[540px] sm:min-h-[800px]
    <div className="font-pretendard h-[calc(100vh-184px)] sm:h-[calc(100vh-194px)]">
      <Background>
        <Deco />
        <Headline />
        {/* animate-spin origin-bottom */}

        {/* sns 버튼 */}
        <ul className="lg:hidden mt-[3rem] tall:mt-0 flex flex-col s:flex-row s:justify-end s:items-start s:space-x-3 mr-[2rem] content-end items-end tiny:items-center tiny:mr-0 tiny:mt-[4rem]">
          <li className="s:w-fit w-[40vw] h-[100%] py-1.5  s:py-3 s:pr-3 s:pl-3  flex s:items-center s:justify-center justify-start items-start pl-[1rem] z-20 bg-[#281CFF] min-w-[160px] tiny:w-[220px] rounded-[20px] mb-[16px] s:rounded-full">
            <Link
              href="http://pf.kakao.com/_UaIZG/chat"
              target="_blank"
              passHref
            >
              <div className="flex items-center">
                <Image
                  src="/assets/images/Main/kakaoIcon.svg"
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
          <li className="s:w-fit w-[40vw] h-[100%] py-1.5 s:py-3 s:pr-3 s:pl-3 flex s:items-center s:justify-center justify-start items-start pl-[1rem] s:ml-0 z-20 bg-[#281CFF] min-w-[160px] tiny:w-[220px] rounded-[20px] mb-[16px] s:rounded-full">
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
          <li className="s:w-fit w-[40vw] h-[100%] py-1.5 s:py-3 s:pr-3 s:pl-3 flex s:items-center s:justify-center justify-start items-start pl-[1rem] z-20 bg-[#281CFF] min-w-[160px] rounded-[20px] tiny:w-[220px] s:rounded-full">
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

        {/* CD 이미지 */}
        <Image
          src={cd}
          alt=".."
          width={0}
          height={0}
          sizes="100vw"
          className="hidden phone:flex fixed bottom-[60px] right-0 z-10 object-cover object-bottom h-auto w-[600px] lg:w-[720px] xl:w-[800px]"
        />

        {/* 하단 지원 배너 */}
        <div className="w-[100vw] h-[80px] sm:h-[90px] bg-[#000] items-center content-center flex justify-center text-center bottom-0 fixed z-20"></div>
        <Link
          href="/application"
          className="flex blur-none filter-none fixed text-center bottom-[0px] items-center justify-center content-center font-[600] sm:font-[700] text-[#FFF] text-[22px] sm:text-[24px] whitespace-nowrap h-[80px] sm:h-[90px] w-[100vw] z-30"
        >
          KAHLUA 23기 지원하러 가기
        </Link>
      </Background>
    </div>
  );
}

// 글씨 부분
function Headline() {
  return (
    <div className="mt-10 bg-transparent ml-[calc(10%)] md:ml-[calc(12.5%)]">
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

// 도형
function Deco() {
  return (
    <div className="bg-transparent">
      <Image
        src={rect3}
        alt=".."
        width={0}
        height={0}
        sizes="100vw"
        className="absolute right-0 top-0 w-[12.5vw] h-[12.5vw] mt-10 z-0"
      />
      <Image
        src={circle}
        alt=".."
        width={0}
        height={0}
        sizes="100vw"
        className="hidden absolute w-[calc(12%)] top-32 l:right-[calc(24%)] s:right-[calc(20%)] x:right-[calc(14%)] x:block z-0"
      />
      <Image
        src={circle}
        alt=".."
        width={0}
        height={0}
        sizes="100vw"
        className="hidden absolute left-[calc(5%)] s:left-[calc(35%)] w-[calc(14%)] top-80 s:top-[400px] x:block z-0"
      />
      <Image
        src={rect4}
        alt=".."
        width={0}
        height={0}
        sizes="100vw"
        className="absolute left-0  w-[22vw] h-[22vw] x:w-[12.5vw] x:h-[12.5vw] bottom-[160px] tiny:hidden z-0"
      />
      <Image
        src={rect1}
        alt=".."
        width={0}
        height={0}
        sizes="100vw"
        className="absolute left-[22vw] x:left-[12.5vw] w-[22vw] h-[22vw] x:w-[12.5vw] bottom-0 tiny:hidden z-0"
      />
    </div>
  );
}
