import Background from "@/app/components/Background";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function General_complete() {
  const router = useRouter();
  const [buyer, setBuyer] = useState("");
  const [phone_num, setPhone_num] = useState("");
  const { merchant_order_id } = router.query;
  const [merchant_status, setMerchant_status] = useState("결제대기");

  useEffect(() => {
    const fetchReservationData = async () => {
      if (merchant_order_id) {
        try {
          const response = await axios.get(
            `https://api.kahluaband.com/tickets/general_ticket/?merchant_order_id=${merchant_order_id}`,
            { withCredentials: true }
          );
          if (response.status === 200) {
            setBuyer(response.data.data.buyer);
            setPhone_num(response.data.data.phone_num);
            if (response.data.data.status === true) {
              setMerchant_status("결제완료");
            }
          } else {
          }
        } catch (error) {}
      }
    };
    fetchReservationData();
  }, [merchant_order_id, phone_num]);

  
  const copyReservationId = () => {
    if (typeof merchant_order_id === 'string') {
        navigator.clipboard.writeText(merchant_order_id).then(() => {
            alert("예매번호가 복사되었습니다!");
        }).catch((error) => {
            console.error("Failed to copy reservation ID:", error);
        });
    } else {
        console.error("Invalid merchant_order_id:", merchant_order_id);
    }
};


  if (merchant_order_id) {
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
                  <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[20vw] sm:w-[17vw] lg:w-[12vw] xl:w-[10vw] leading-[21px] text-[#281CFF] whitespace-nowrap">
                    {merchant_order_id}
                  </div>
                  <button onClick={copyReservationId}>
                    <Image src="/assets/images/tickets/copy.svg" alt="copy" width={15} height={15} className="ml-[5vw] sm:ml-[2vw] md:ml-0 w-[10px] h-[10px] sm:w-[15px] sm:h-[15px]"/>
                  </button>
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
                  <div className="flex flex-col">
                    <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[35vw] leading-[21px] text-[#6A6A6A]">
                      {merchant_status}
                    </div>
                    <p className="ml-[2vw] sm:ml-[5.5vw] text-[8px] sm:text-[14px] font-[500] w-[35vw] leading-[21px] text-[#281CFF]">
                      (토스뱅크 1000-7578-9563)
                    </p>
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
                  <div className="flex md:flex-row flex-col text-[#281CFF]">
                    예매를 완료하신 분들은 예매 조회 및 확인을 위해 반드시 예매번호를 확인하고 기억해주시기 바랍니다.
                  </div>
                </li>
                <li>
                  <div className="flex md:flex-row flex-col">
                    계좌이체 결제를 선택하신 분들은 [예매현황-입금계좌]에 24시간
                    이내로 입금해주시면 자동으로 결제 완료 처리됩니다.{" "}
                  </div>
                </li>
                <li>
                  <div className="flex md:flex-row flex-col">
                    결제 취소를 원하시면 [예매하기 - 일반 예매내역 조회하기]를
                    통해 취소하실 수 있습니다.{" "}
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
              <div className="mt-8 flex flex-row">
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
