import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../index.css";
import Background from "@/app/components/Background";
import axios from "axios";
import Error_modal from "./error_modal";
import Input_modal from "./input_modal";

export default function Freshman_ticket() {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [buyer, setBuyer] = useState("");
  const [phone_num, setphone_num] = useState("");
  const [major, setmajor] = useState("");
  const [student_id, setstudent_id] = useState("");
  const [isCheck, setIsCheck] = useState(true);
  const [meeting, setMeeting] = useState(true);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState(false);

  const [isTokenErrorModalVisible, setIsTokenErrorModalVisible] =
  useState(false);

  const handleShowConfirmationModal = () => {
    setIsConfirmationModalVisible(true);
  };

  const handleConfirmSubmission = () => {
    setIsConfirmationModalVisible(false);
    handleSubmit();
  };
  
  const handleShowTokenErrorModal = () => {
    setIsTokenErrorModalVisible(true);
  };

  useEffect(() => {
    const isDataComplete =
      buyer.trim() !== "" &&
      phone_num.trim() !== "" &&
      major.trim() !== "" &&
      student_id.trim() !== "" &&
      true;
    setIsFormComplete(isDataComplete);
    setIsClick(false);
  }, [buyer, phone_num, major, student_id]);

  const handleSubmit = async () => {
    setIsClick(true);
    if (isFormComplete === true) {
      try {
        const formData = { buyer, phone_num, major, student_id, meeting };
        const response = await axios.post(
          `https://api.kahluaband.com/tickets/freshman_ticket/`,
          formData,
        );
        if (response.status === 200) {
          const reservation_id = response.data.data.reservation_id;
          router.push({
            pathname: "/tickets/freshman_complete",
            query: { ...router.query, reservation_id },
          });
        } else if(response.status === 403){
          handleShowTokenErrorModal();
        } else{
          setIsError(true);
        }
      } catch (error :any) {
        if(error.response.status === 400){
          setIsError(true);
        }
        else{handleShowTokenErrorModal();}
      }
    }
  };

  const handleIncrement = () => {
    setCount((prevCount) => (prevCount < 1 ? prevCount + 1 : prevCount)); //최대값을 1로 설정
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount)); //최소값을 1로 설정
  };

  const handleCheckboxChange1 = (event: any) => {
    setIsCheck(event.target.value === "true");
  };

  const handleCheckboxChange2 = () => {
    setMeeting(!meeting);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const phone_num = event.target.value;
    setphone_num(phone_num);
  };

  const RadioButton = ({ label, value, checked, onChange }: any) => (
    <label className="flex flex-row items-center justify-center">
      <input
        type="radio"
        name="뒷풀이"
        value={value}
        checked={checked}
        onChange={() => onChange(value === "참")}
        className="mr-[18px] accent-[#281CFF] w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] flex-shrink-0"
      />
      <div className="font-[500]">{label}</div>
    </label>
  );

  const ConfirmationModal = () => {
    const [onClose, setOnClose] = useState(false);

    const handleIsClose = () => {
      setOnClose(true);
      setIsConfirmationModalVisible(false);
    };

    const handleOverlayClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (event.target === event.currentTarget) {
        handleIsClose();
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleIsClose();
      }
    };

    useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, [handleKeyPress]);
    return !onClose ? (
      <div
        onClick={handleOverlayClick}
        className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center"
      >
        <div className="font-pretendard w-[250px] h-[280px] sm:w-auto sm:h-auto bg-[#FFF] flex-shrink-0 fixed rounded-[10px] z-20 sm:pb-[60px] pb-[26px] px-[12px]">
          <button
            onClick={handleIsClose}
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
            <p className="font-[700] mt-[12px] text-[14px] sm:text-[24px] leading-[12px] sm:leading-[28px]">
              제출한 이후에는 수정할 수 없습니다.
            </p>
            <p className="font-[700] mt-[16px] text-[14px] sm:text-[24px] leading-[12px] sm:leading-[28px]">
              제출하시겠습니까?
            </p>
            <p className="mt-[12px] sm:mt-[20px] sm:font-[500] text-[12px] sm:text-[14px] leading-[21px] text-[#4A4A4A]">
              입력한 정보를 다시 한번 확인해주세요.
            </p>
            <button
              onClick={handleConfirmSubmission}
              className="mt-[28px] sm:mt-[28px] flex items-center w-[110px] h-[40px] sm:w-[160px] justify-center rounded-[5px] bg-[#281CFF] text-[white] text-[12px] sm:text-[16px] font-[700] leading-[17px] text-center  hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[1px] sm:border-[2px] border-[#281CFF]"
            >
              제출하기
            </button>
            <button
              onClick={handleIsClose}
              className="mt-[12px] sm:mt-[16px] flex items-center w-[110px] h-[40px] sm:w-[160px] justify-center rounded-[4px] bg-[#281CFF] text-[white] text-[12px] sm:text-[16px] font-[700] leading-[17px] text-center  hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[1px] sm:border-[2px] border-[#281CFF]"
            >
              다시 확인하기
            </button>
          </div>
        </div>
      </div>
    ) : null;
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
    <div className="w-[100%] h-[1900px] sm:h-[2000px] md:h-[2100px] lg:h-[1700px] z-60">
      <Background>
        <div className="font-pretendard px-[12.4vw] flex items-center flex-col mb-[84px]">
          <div className="flex flex-col items-center mx-[12.5vw] text-center mt-8 sm:mt-[40px]">
            <Image
              src="/assets/images/tickets/divider_medium.svg"
              alt="티켓"
              width={75}
              height={17}
              className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"
            />
            <div className="mt-8 sm:mt-[16px] font-[700] text-[20px] sm:text-[32px] leading-[42px] whitespace-nowrap flex flex-row">
              <div className="text-[#281CFF]">신입생 티켓</div>
              <span>&nbsp;예매하기</span>
            </div>
            <div className="mt-8 sm:mt-[32px] font-[500] text-sm leading-[21px]">
              <div>깔루아 2024 3월 정기공연</div>
              <div>2024.03.04 오후 7시</div>
            </div>
          </div>
          <div className="mt-8 sm:mt-[64px] flex flex-col mx-auto w-[100%]">
            <div className="font-[700] text-lg sm:text-[20px] leading-[30px]">
              예매 인원을 선택해주세요.{" "}
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-8 sm:mt-[16px] bg-[#000] flex " />
            <div>
              <div className="mt-8 sm:mt-[32px] flex flex-row">
                <div className="text-xs md:text-sm font-[500] leading-[21px] text-[#6A6A6A] whitespace-nowrap">
                  신입생
                </div>
                <div className="ml-[4vw] text-xs md:text-sm  font-[500] w-[60vw] leading-[21px] text-[#2D2D2D] ">
                  신입생 티켓은 1인 1매만 예매 가능합니다.
                </div>
              </div>
              <div className="mt-[12px] sm:mt-[16px] relative flex flex-row justify-between sm:justify-normal">
                <div className="flex flex-row">
                  <div className="w-[70px] sm:w-[120px] h-[26px] sm:h-[76px] flex flex-col justify-center flex-shrink-0 text-sm sm:text-[24px] font-[700] text-[#939393]">
                    5000원
                  </div>
                  <div className="flex flex-col justify-center flex-shrink-0 text-[16px] h-[25px] sm:h-[76px] sm:text-[24px] leading-[28px] font-[700] text-[#281CFF]">
                    0원
                  </div>
                </div>
                <div className="absolute left-0 top-1 sm:top-[26px]">
                  <Image
                    src="/assets/images/tickets/Arrow.svg"
                    alt="arrow"
                    width={100}
                    height={100}
                    className="w-[60px] h-[15px] mt-[1px] sm:mt-0 sm:w-[auto] sm:h-[auto]"
                  />
                </div>
                <div className="bg-[white] w-[76px] sm:w-[110px] h-[26px] sm:h-[35px] ml-[5vw] sm:mt-[20px] flex flex-shrink-0 border border-solid border-[#D9D9D9] rounded-[10px] items-center justify-center mr-[5vw] sm:mr-0">
                  <div className="flex gap-2 sm:gap-4 text-[20px] sm:text-[26px] font-[700]">
                    <button
                      className="flex h-[25.9px] sm:h-[35px] my-auto ml-[2px] pr-[7px] sm:ml-[4px] sm:pr-[9px] text-center items-center justify-center border-r text-[#939393] border-[#D9D9D9] cursor-default"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <p>{count}</p>
                    <button
                      className="flex h-[25.9px] sm:h-[35px] my-auto pl-[6px] sm:pl-[8px] text-center items-center justify-center border-l text-[#939393] border-[#D9D9D9] cursor-default"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-8 sm:mt-[40px] bg-[#D3D3D3]" />
            <div className="mx-auto">
              <div className=" flex lg:flex-row flex-col">
                <div className="mt-8 sm:mt-[30px] w-[140px] h-[29px] font-[700] sm:pt-[8px] text-lg sm:text-[20px] leading-[24px]">
                  예매자 정보 입력
                </div>
                <div className="w-[80vw] h-[40px] lg:w-[60vw] text-xs sm:text-[14px] text-[#464646] lg:ml-[3vw] flex flex-col lg:mt-8 sm:mt-[24px] ">
                  <p>신입생확인을 위해 정확한 정보를 입력해주세요.</p>
                  <div className="flex flex-col">
                    <p className="text-[#0047FF] flex">
                      추후 입장 시 학생증 확인이 이루어질 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[75vw] justify-center pt-8 sm:pb-[8px] lg:pb-10">
                <div className="inline-flex flex-wrap flex-col lg:flex-row lg:space-x-8 items-start">
                  <div className="w-[70vw] lg:w-[calc(50%-23px)] h-auto">
                    <div className="text-sm sm:text-[16px] lg:text-xl font-[500] mt-[8px] sm:mt-0">
                      이름
                    </div>
                    <div className="input-with-placeholder relative h-[64px] px-2 lg:p-4 flex-shrink-0 border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px] bg-white">
                      <input
                        value={buyer}
                        type="text"
                        placeholder=""
                        onChange={(e) => setBuyer(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-0 w-[70vw] lg:w-[calc(50%-23px)] h-auto">
                    <div className="text-sm sm:text-[16px] lg:text-xl font-[500]">
                      연락처
                    </div>
                    <div className="input-with-placeholder relative h-[64px] px-2 lg:p-4 flex-shrink-0 border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px] bg-white">
                      <input
                        value={phone_num}
                        type="text"
                        placeholder="‘-’없이 입력해주세요."
                        onChange={handlePhoneNumberChange}
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-8 sm:mt-0 w-[75vw] justify-center">
                <div className="inline-flex flex-wrap flex-col lg:flex-row lg:space-x-8 items-start">
                  <div className="w-[70vw] lg:w-[calc(50%-23px)] h-auto">
                    <div className="text-sm sm:text-[16px] lg:text-xl font-[500] mt-[8px] sm:mt-0">
                      학과
                    </div>
                    <div className="input-with-placeholder relative h-[64px] px-2 lg:p-4 flex-shrink-0 border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px] bg-white">
                      <input
                        value={major}
                        type="text"
                        placeholder=""
                        onChange={(e) => setmajor(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-0 w-[70vw] lg:w-[calc(50%-23px)] h-auto">
                    <div className="text-sm sm:text-[16px] lg:text-xl font-[500]">
                      학번
                    </div>
                    <div className="input-with-placeholder relative h-[64px] px-2 lg:p-4 flex-shrink-0 border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px] bg-white">
                      <input
                        value={student_id}
                        type="text"
                        placeholder="예) C123456"
                        onChange={(e) => setstudent_id(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-8 sm:mt-[40px] bg-[#D3D3D3]" />
            <div>
              <div className="mt-8 sm:mt-[32px] flex lg:flex-row flex-col">
                <div className="w-[160px] h-[29px] font-[700] text-lg sm:text-[20px] leading-[30px]">
                  티켓수령방법 선택
                </div>
                <div className="whitespace-pre-wrap sm:w-[47.5vw] h-[26px] lg:ml-[2.5vw] lg:mt-[5px] mt-[4px] sm:mt-[15px] text-xs sm:text-[14px] font-[500] leading-[21px] text-[#464646] flex-shrink-0 flex flex-col lg:flex-row">
                  <p className="whitespace-nowrap">
                    티켓현장수령은 예매가 완료되면 부여되는
                  </p>
                  <div className="flex flex-row">
                      [예약번호]로 공연 당일 티켓을 수령하여 입장합니다.
                  </div>
                </div>
              </div>
              <div className="text-[20px] mt-8 sm:mt-[18px]">
                <label className="flex flex-row">
                  <div className="flex items-center justify-center mt-[8px] sm:mt-[20px]">
                    <input
                      type="radio"
                      name="현장수령"
                      checked={isCheck}
                      onChange={handleCheckboxChange1}
                      className="mr-[18px] w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] accent-[#281CFF] flex-shrink-0"
                    />
                    <div className="text-sm sm:text-[20px] font-[500] leading-[30px]">
                      현장수령
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-8 sm:mt-[40px] bg-[#D3D3D3]" />
            <div className="flex flex-col lg:flex-row">
              <div className="w-[200px] h-[29px] mt-8 sm:mt-[32px] font-[700] text-lg sm:text-[20px] leading-[30px] whitespace-nowrap">
                신입생 뒷풀이 참여 여부
              </div>
              <div className="lg:w-[740px] lg:mt-[36px] sm:mt-[15px] mt-[4px] lg:ml-[40px] text-xs sm:text-[14px] font-[500] leading-[21px] text-[#464646] flex-shrink-0 flex flex-row">
                공연 후 조가 배정되어{" "}뒷풀이가 있을 예정입니다.
              </div>
            </div>
            <div className="mt-8 sm:mt-[20px] text-sm sm:text-[20px] flex flex-row gap-[8.8vw]">
              <RadioButton
                label="참"
                value="참"
                checked={meeting}
                onChange={handleCheckboxChange2}
              />
              <RadioButton
                label="불참"
                value="불참"
                checked={!meeting}
                onChange={handleCheckboxChange2}
              />
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-8 sm:mt-[40px] bg-[#D3D3D3]" />
            <div className="mt-8 sm:mt-[20px] flex flex-row">
              <div className="w-[100%] h-[29px] font-[700] text-lg sm:text-[20px] sm:leading-[28px] whitespace-nowrap">
                유의사항 및 취소규정
              </div>
            </div>
            <ol className="list-decimal ml-[3vw] sm:ml-[16px] font-[500] text-xs sm:text-[14px] mt-[4px] sm:mt-[14px] leading-[26px]">
              <li>
                예매취소는 공연 24시간 이전에만 가능하며 그 이후에는 환불이
                불가합니다.{" "}
              </li>
              <li>여러 장의 티켓을 구매하셨을 경우 결제와 결제 취소의 경우 모든 티켓이 일괄처리됩니다.{" "}</li>
              <li>결제 취소를 원하시면 [예매하기 - 신입생 예매내역 조회하기]를 통해 취소하실 수 있습니다.{" "}
              </li>
              <li>
                공연 24시간 전 이후에 예매 확정 및 안내 문자 발송예정입니다.
              </li>
            </ol>
          </div>
          <div className="flex items-center justify-center mt-8 sm:mt-[94px]">
            <button
              onClick={handleShowConfirmationModal}
              className="w-[70vw]  h-[64px] sm:w-[270px] sm:h-[53px] felx items-center justify-center rounded-[10px] bg-[#281CFF] text-[white] text-lg sm:text-[18px] font-[700] leading-[17px] text-center hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[2px] border-[#281CFF]"
            >
              예매하기
            </button>
          </div>
        </div>
        {isError && <Error_modal />}
        {isClick && !isFormComplete && <Input_modal />}
        {isConfirmationModalVisible && <ConfirmationModal />}
        {isTokenErrorModalVisible && <TokenErrorModal/>}
      </Background>
    </div>
  );
}
