import { useState, useEffect } from "react";
import axios from "axios";
import Background from "@/app/components/Background";
import Image from "next/image";

import { useRouter } from "next/router";

export default function Freshman_complete() {
  const router = useRouter();
  const [buyer, setBuyer] = useState("");
  const [phone_num, setPhoneNum] = useState("");
  const [student_id, setStudentId] = useState("");
  const { reservation_id } = router.query;

  useEffect(() => {
    const fetchReservationData = async () => {
      if (reservation_id) {
        try {
          const response = await axios.get(
            `https://api.kahluaband.com/tickets/freshman_complete/?reservation_id=${reservation_id}`, {
              
            }
          );
          if (response.status === 200) {
            setBuyer(response.data.data.buyer);
            setPhoneNum(response.data.data.phone_num);
            setStudentId(response.data.data.student_id);
          } else {
          }
        } catch (error) {}
      }
    };
    fetchReservationData();
  }, [reservation_id]);

  if (reservation_id && buyer) {
    return (
      <div className="h-[700px] sm:h-[900px]">
        <Background>
          <div className="font-pretendard mx-[12.5vw] flex items-center flex-col mb-[84px]">
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
                  예매 현황
                </div>
              </div>
            </div>
            <div className="mt-[32px] sm:mt-[64px] flex flex-col mx-auto ">
              <div className="font-[700] text-[16px] sm:text-[20px] leading-[30px]">
                예매 정보
              </div>
              <div className="w-[72.5vw] h-[1.5px] sm:h-[3px] mt-[16px] bg-[#000] flex " />
              <div className="sm:ml-[0.5vw] ">
                <div className="mt-[12px] sm:mt-[32px] flex flex-row items-center">
                  <div className="text-[12px] sm:text-[20px] w-[100px] font-[500] leading-[0.4px]">
                    예매번호
                  </div>
                  <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[35vw] leading-[21px] text-[#281CFF]">
                    {reservation_id}
                  </div>
                </div>
                <div className="mt-[12px] sm:mt-[32px] flex flex-row items-center">
                  <div className="text-[12px] sm:text-[20px] w-[100px] font-[500] leading-[0.4px]">
                    이름
                  </div>
                  <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[35vw] leading-[21px] text-[#6A6A6A]">
                    {buyer}
                  </div>
                </div>
                <div className="mt-[12px] sm:mt-[32px] flex flex-row items-center">
                  <div className="text-[12px] sm:text-[20px] w-[100px] font-[500] leading-[0.4px]">
                    학번
                  </div>
                  <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[35vw] leading-[21px] text-[#6A6A6A]">
                    {student_id}
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
                    예매현황
                  </div>
                  <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[35vw] leading-[21px] text-[#979797]">
                    예매완료
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
                    계좌이체 결제를 선택하신 분들은 [예매현황-입금계좌]에 24시간
                    이내로 입금해주시면 자동으로 결제 완료 처리됩니다.{" "}
                  </div>
                </li>
                <li>
                  <div className="flex md:flex-row flex-col">
                    결제 취소를 원하시면 [예매하기 - 신입생 예매내역 조회하기]를 통해 취소하실 수 있습니다.{" "}
                  </div>
                </li>
                <li>
                  <div className="flex md:flex-row flex-col">
                    여러 장의 티켓을 구매하셨을 경우 결제와 결제 취소의 경우
                    모든 티켓이 일괄처리됩니다.{" "}
                  </div>
                </li>
                <li>
                  <div className="flex md:flex-row flex-col">
                    이외에 모든 문의 사항은 [깔루아 카카오톡]을 이용해주시기
                    바랍니다.{" "}
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
                  예매 현황
                </div>
              </div>
            </div>
            <div className="mt-[32px] sm:mt-[64px] flex flex-col mx-auto ">
              <div className="font-[700] text-[16px] sm:text-[20px] leading-[30px]">
                예매 정보가 없습니다.
              </div>
            </div>
          </div>
        </Background>
      </div>
    );
  }
}
