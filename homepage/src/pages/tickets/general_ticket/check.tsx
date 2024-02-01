import { useEffect, useState } from "react";
import Image from "next/image";
import Background from "@/app/components/Background";
import axios from "axios";
import { useRouter } from "next/router";
import Ticket_info from "../ticket_info";

const General_check = () => {
  const router = useRouter();
  const [buyer, setBuyer] = useState("");
  const [phone_num, setPhone_num] = useState("");
  const [input_phone_num, set_Phone_num] = useState("");
  const [validPhone_num, setValidPhone_num] = useState(true);
  const [isValidCount, setIsValidCount] = useState(false);
  const { merchant_order_id } = router.query;
  const [isTokenErrorModalVisible, setIsTokenErrorModalVisible] = useState(false);

  const handleShowTokenErrorModal = () => {
    setIsTokenErrorModalVisible(true);
  };

  useEffect(() => {
    const fetchmerchant_orderData = async () => {
      try {
        if (router.query.merchant_order_id) {
          const response = await axios.get(
            `https://api.kahluaband.com/tickets/general_complete/?merchant_order_id=${merchant_order_id}`,
          );
          if (response.data) {
            setBuyer(response.data.data.buyer);
            setPhone_num(response.data.data.phone_num);
          }
        }
      } catch (error) {}
    };
    setIsValidCount(input_phone_num.length === 11);
    fetchmerchant_orderData();
  }, [merchant_order_id, router.query.merchant_order_id, input_phone_num]);

  const handleCancelmerchant_order = async () => {
    if (input_phone_num === phone_num) {
      setValidPhone_num(true);
      const formData = new FormData();
      formData.append("merchant_order_id", merchant_order_id as string);
      const rid = merchant_order_id;
      try {
        await axios.delete(
          `https://api.kahluaband.com/tickets/general_ticket/delete/`,
          {
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        router.push({
          pathname: "/tickets/cancel_complete/",
          query: { rid },
        });
      } catch (error:any) {
        if(error.response.status === 403){
          handleShowTokenErrorModal();
        }
      }
    } else {
      setValidPhone_num(false);
    }
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleCancelmerchant_order();
    }
  };

  const TokenErrorModal = () => {
    const [onErrorClose, setOnErrorClose] = useState(false);

    const handleIsErrorClose = () => {
      setOnErrorClose(true);
      setIsTokenErrorModalVisible(false);
    };

    const handleOverlayClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (event.target === event.currentTarget) {
        handleIsErrorClose();
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleIsErrorClose();
      }
    };

    useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, [handleKeyPress]);
    return !onErrorClose ? (
      <div
        onClick={handleOverlayClick}
        className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center"
      >
        <div className="font-pretendard w-[250px] h-[180px] sm:w-auto sm:h-auto bg-[#FFF] flex-shrink-0 fixed rounded-[10px] z-20 sm:pb-[60px] pb-[26px] px-[12px]">
          <button
            onClick={handleIsErrorClose}
            className="ml-[210px] mt-[8px] w-[22px] sm:w-[30px] h-[22px] sm:h-[30px] sm:ml-[552px] flex-col items-center flex justify-center"
          >
            <Image
              src="/assets/images/layout/close.svg"
              width={36}
              height={38}
              alt="close"
              className="w-[16px] h-[16px] sm:w-[22px] sm:h-[22px]"
            />
          </button>
          <div className="flex flex-col items-center text-center content-center mt-[4px] sm:mt-[40px] leading-normal">
            <Image
              src="/assets/images/tickets/divider_medium.svg"
              alt="ticket"
              width={60}
              height={20}
              className="sm:w-[60px] sm:h-[20px] w-[40px] h-[15px]"
            />
            <p className="font-[700] mt-[12px] text-[14px] sm:text-[24px] leading-[16px] sm:leading-[28px]">
              브라우저 쿠키를 삭제하고
            </p>
            <p className="font-[700] mt-[4px] text-[14px] sm:text-[24px] leading-[16px] sm:leading-[28px]">
              다시 시도해주세요.
            </p>
            <p className="mt-[12px] sm:mt-[20px] sm:font-[500] text-[12px] sm:text-[14px] leading-[14px] sm:leading-[21px] text-[#4A4A4A]">
              문제가 해결되지 않으셨다면,
            </p>
            <p className="mt-[4px] sm:font-[500] text-[12px] sm:text-[14px] leading-[14px] sm:leading-[21px] text-[#4A4A4A]">
              깔루아 카카오톡으로 문의 부탁드립니다.
            </p>
          </div>
        </div>
      </div>
    ) : null;
  };

  return (
    <div className="h-[600px] sm:h-[700px]  min-h-screen">
      <Background>
        <div className="font-pretendard mx-[12.5vw] flex items-center flex-col mb-[84px] ">
          <div className="flex flex-col items-center mx-[12.5vw] text-center content-center mt-[10px] sm:mt-[40px] leading-normal">
            <Image
              src="/assets/images/tickets/divider_medium.svg"
              alt="ticket"
              width={52}
              height={12}
              className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"
            />
            <p className="mt-[8px] sm:mt-[16px] font-[700] text-[20px] sm:text-[32px] leading-[42px] whitespace-nowrap flex flex-row">
              예매내역 취소
            </p>
            <p className="mt-[16px] sm:mt-[32px] font-[500] text-[10px] sm:text-[14px] leading-[21px] text-[#4A4A4A] w-[75vw]">
              [예매 취소하기] 버튼을 누르시면 예매 취소가 완료됩니다.
            </p>
          </div>
          {merchant_order_id && (
            <div className="mt-[12px] sm:mt-[48px] mx-auto items-center content-center flex flex-col ">
              <Ticket_info
                reservation_id={
                  Array.isArray(router.query.merchant_order_id)
                    ? router.query.merchant_order_id.join("")
                    : router.query.merchant_order_id || ""
                }
                buyer={buyer}
              />
              <div className="flex mt-[16px] mx-auto sm:ml-[4px] flex-col w-[75vw] sm:w-[300px] md:w-[516px] text-left text-[#4A4A4A] text-[10px] sm:text-[12px] leading-[21px]">
                <p> 예매 취소 인증 절차입니다.</p>
                <p>
                  {" "}
                  정말 취소하시려면 예매하실 때 입력한 전화번호를 입력해주세요.
                </p>
                <input
                  type="text"
                  value={input_phone_num}
                  onChange={(e) => set_Phone_num(e.target.value)}
                  placeholder="전화번호를 입력해 주세요."
                  className="mt-[10px] bg-[#FFF] border border-[#4A4A4A] rounded-[10px] text-[10px] sm:text-[14px] outline-none w-[150px] h-[28px] sm:w-[180px] sm:h-[36px] text-[black] px-[8px]"
                  onKeyDown={handleInputKeyPress}
                />
                {!validPhone_num && (
                  <p className="text-[#F00] text-[10px] font-[400] leading-[19px] align-center mt-[2px]">
                    ⚠️ 잘못된 입력 정보입니다.
                  </p>
                )}
              </div>
              <div className="w-[75vw] sm:w-[400px] md:w-[514px] h-[48px] mt-[20px] sm:mt-[48px] mx-auto flex items-center">
                <button
                  onClick={handleCancelmerchant_order}
                  className={`${
                    isValidCount
                      ? 'w-full h-full bg-[#281CFF] text-[#FFF]'
                      : 'w-full h-full bg-[#E8E8E8] text-[#000]'
                  } rounded-[10px] text-center text-[14px] font-[600] leading-[19px]`}>
                  예매 취소하기
                </button>
              </div>
            </div>
          )}
        </div>
        {isTokenErrorModalVisible && <TokenErrorModal/>}
      </Background>
    </div>
  );
};

export default General_check;
