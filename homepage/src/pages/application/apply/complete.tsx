import { useState, useEffect } from "react";
import axios from "axios";
import Background from "@/app/components/Background";
import Image from "next/image";

import { useRouter } from "next/router";

export default function Apply_complete() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone_num, setPhoneNum] = useState("");
  const [first_preference, setFirst_preference] = useState("");
  const [second_preference, setSecond_preference] = useState("");
  const { id } = router.query;

  useEffect(() => {
    const fetchReservationData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://api.kahluaband.com/application/apply_complete/?id=${id}`
          );
          if (response.status === 200) {
            setName(response.data.data.name);
            setPhoneNum(response.data.data.phone_num);
            setFirst_preference(response.data.data.first_preference);
            setSecond_preference(response.data.data.second_preference);
          } else {
          }
        } catch (error) {}
      }
    };
    fetchReservationData();
  }, [id]);

  if (true) {
    return (
      <div className=" sm:h-[calc(100vh-344px)] h-[calc(100vh-204px)] sm:min-h-[700px] min-h-[480px]">
        <Background>
          <div className="font-['pretendard'] mx-[12.5vw] flex items-center flex-col mb-[84px]">
            <div className="flex flex-col items-center mx-[12.5vw] text-center mt-[12px] sm:mt-[40px]">
              <Image
                src="/assets/images/tickets/divider_medium.svg"
                alt="티켓"
                width={75}
                height={17}
                className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"
              />
              <div className="mt-[8px] sm:mt-[16px] flex flex-row">
                <div className="font-[700] text-[20px] sm:text-[32px] leading-[42px] whitespace-nowrap ">
                  지원 현황
                </div>
              </div>
            </div>
            <div className="mt-[32px] sm:mt-[64px] flex flex-col mx-auto ">
              <div className="font-[700] text-[16px] sm:text-[20px] leading-[30px]">
                지원 정보
              </div>
              <div className="w-[72.5vw] h-[1.5px] sm:h-[3px] mt-[16px] bg-[#000] flex " />
              <div className="sm:ml-[0.5vw] ">
                <div className="mt-[12px] sm:mt-[32px] flex flex-row items-center">
                  <div className="text-[12px] sm:text-[20px] w-[100px] font-[500] leading-[0.4px]">
                    이름
                  </div>
                  <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[35vw] leading-[21px] text-[#6A6A6A]">
                    {name}
                  </div>
                </div>
                <div className="mt-[12px] sm:mt-[32px] flex flex-row items-center">
                  <div className="text-[12px] sm:text-[20px] w-[100px] font-[500] leading-[0.4px]">
                    전화번호
                  </div>
                  <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[35vw] leading-[21px] text-[#6A6A6A]">
                    {phone_num}
                  </div>
                </div>
                <div className="mt-[12px] sm:mt-[32px] flex flex-row items-center">
                  <div className="text-[12px] sm:text-[20px] w-[100px] font-[500] leading-[0.4px]">
                    1지망
                  </div>
                  <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[35vw] leading-[21px] text-[#979797]">
                    {first_preference}
                  </div>
                </div>
                <div className="mt-[12px] sm:mt-[32px] flex flex-row items-center">
                  <div className="text-[12px] sm:text-[20px] w-[100px] font-[500] leading-[0.4px]">
                    2지망
                  </div>
                  <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[35vw] leading-[21px] text-[#979797]">
                    {second_preference}
                  </div>
                </div>
              </div>
              <div className="w-[72.5vw] h-[1.5px] sm:h-[3px] mt-[32px] bg-[#D3D3D3] flex" />
            </div>
            <div className="flex ml-[0.5vw] w-[72.5vw] flex-col">
              <div className="mt-[12px] sm:mt-[22px] flex">
                <div className="w-[247px] h-[30px] font-[700] text-[16px] sm:text-[20px] leading-[28px] whitespace-nowrap">
                  필독 사항
                </div>
              </div>
              <ol className="list-decimal ml-[24px] font-[500] text-[10px] sm:text-[14px] lg:text-[16px] mt-[8px] sm:mt-[22px] leading-[26px]">
                <li>
                  <div className="flex md:flex-row flex-col">
                    제출하신 신청서는 수정/취소가 불가합니다.
                  </div>
                </li>
                <li>
                  <div className="flex md:flex-row flex-col">
                    지원 접수 이후 1일 내에 안내 문자가 발송될 예정입니다.
                    문자를 받지 못하신 분은 카카오톡 채널 @kahlua 또는
                    인스타그램 @kahlua_band_ 으로 문의부탁드립니다.
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </Background>
      </div>
    );
  } else {
    return (
      <div className="h-[700px] sm:h-[900px]">
        <Background>
          <div className="font-['pretendard'] mx-[12.5vw] flex items-center flex-col mb-[84px]">
            <div className="flex flex-col items-center mx-[12.5vw] text-center mt-[24px] sm:mt-[40px]">
              <Image
                src="/assets/images/tickets/divider_medium.svg"
                alt="티켓"
                width={75}
                height={17}
                className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"
              />
              <div className="mt-[8px] sm:mt-[16px] flex flex-row">
                <div className="font-[700] text-[20px] sm:text-[32px] leading-[42px] whitespace-nowrap ">
                  지원 현황
                </div>
              </div>
            </div>
            <div className="mt-[32px] sm:mt-[64px] flex flex-col mx-auto ">
              <div className="font-[700] text-[16px] sm:text-[20px] leading-[30px]">
                지원 정보가 없습니다.
              </div>
            </div>
          </div>
        </Background>
      </div>
    );
  }
}
