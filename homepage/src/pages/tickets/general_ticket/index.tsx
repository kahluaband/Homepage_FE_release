import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../index.css";
import Background from "@/app/components/Background";
import axios from "axios";
import Error_modal from "./error_modal";
import Input_modal from "./input_modal";

export default function General_ticket() {
  const router = useRouter();
  const [member, setmember] = useState(1);
  const [buyer, setBuyer] = useState("");
  const [phone_num, setphone_num] = useState("");
  const [isCheck, setIsCheck] = useState(true);
  const [payment, setPayment] = useState("계좌이체");
  const [price, setPrice] = useState(5000);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [namesArray, setNamesArray] = useState<string[]>([]);
  const [phonesArray, setPhonesArray] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [dynamicHeightClass, setDynamicHeightClass] = useState(
    "h-[1260px] sm:h-[1900px] md:h-[1780px] lg:h-[1600px]"
  );

  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState(false);

  const [isTokenErrorModalVisible, setIsTokenErrorModalVisible] =
  useState(false);

  var id = "";
  var merchant_order_id = "";

  useEffect(() => {
    const isDataComplete = buyer.trim() !== "" && phone_num.trim() !== "";
    setIsFormComplete(isDataComplete);
  }, [buyer, phone_num]);

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


  const handleSubmit = async () => {
    setIsClick(true);

    if (isFormComplete === true) {
      try {
        const formData = new FormData();
        formData.append("buyer", buyer);
        formData.append("phone_num", phone_num);
        formData.append("member", String(member));
        formData.append("price", String(price));
        namesArray.forEach((name) => formData.append("name[]", name));
        phonesArray.forEach((phone) => formData.append("phone[]", phone));
        formData.append("status", "false");
        formData.append("payment", payment);

        const response = await axios.post(
          `https://api.kahluaband.com/tickets/general_ticket/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          id = response.data.data.id;
          fetchMerchant_order_id();
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

  

  const fetchMerchant_order_id = async () => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("amount", String(price));
      const response = await axios.post(
        `https://api.kahluaband.com/tickets/checkout/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response.status === 200) {
        merchant_order_id = response.data.merchant_order_id;
        router.push({
          pathname: "/tickets/general_complete",
          query: { ...router.query, merchant_order_id },
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
  };
  

  const handleIncrement = () => {
    setmember((prevmember) => (prevmember < 5 ? prevmember + 1 : prevmember)); //최대값을 5로 설정
  };

  const handleDecrement = () => {
    setmember((prevmember) => (prevmember > 1 ? prevmember - 1 : prevmember)); //최소값을 1로 설정
  };

  const handleCheckboxChange1 = (event: any) => {
    setIsCheck(event.target.value === "true");
  };

  const handleCheckboxChange2 = (event: any) => {
    setPayment(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const phoneNumber = event.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    setphone_num(phoneNumber);
  };

  const handleBuyerChange = (event: any) => {
    setBuyer(event.target.value);
  };

  useEffect(() => {
    let newHeightClass = "";

    if (member === 1) {
      newHeightClass = "h-[1180px] sm:h-[1900px] md:h-[1900px] lg:h-[1700px]";
    } else if (member === 2) {
      newHeightClass = "h-[1308px] sm:h-[2100px] md:h-[2100px] lg:h-[1850px]";
    } else if (member === 3) {
      newHeightClass = "h-[1436px] sm:h-[2300px] md:h-[2300px] lg:h-[2000px]";
    } else if (member === 4) {
      newHeightClass = "h-[1564px] sm:h-[2500px] md:h-[2500px] lg:h-[2150px]";
    } else if (member === 5) {
      newHeightClass = "h-[1692px] sm:h-[2700px] md:h-[2700px] lg:h-[2300px]";
    } else {
      newHeightClass = "h-[1720px] sm:h-[2700px] md:h-[2700px] lg:h-[2300px]";
    }
    setDynamicHeightClass(newHeightClass);

    const calculatePrice = () => {
      return 5000 * member;
    };

    const newPrice = calculatePrice();
    setPrice(newPrice);
  }, [member]);

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
        <div className="font-pretendard w-[250px] h-[270px] sm:w-auto sm:h-auto bg-[#FFF] flex-shrink-0 fixed rounded-[10px] z-20 sm:pb-[60px] pb-[26px] px-[12px]">
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
              className="mt-[28px] sm:mt-[28px] flex items-center w-[110px] h-[30px] sm:w-[160px] sm:h-[40px] justify-center rounded-[5px] bg-[#281CFF] text-[white] text-[12px] sm:text-[16px] font-[700] leading-[17px] text-center  hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[1px] sm:border-[2px] border-[#281CFF]"
            >
              제출하기
            </button>
            <button
              onClick={handleIsClose}
              className="mt-[12px] sm:mt-[16px] flex items-center w-[110px] h-[30px] sm:w-[160px] sm:h-[40px] justify-center rounded-[4px] bg-[#281CFF] text-[white] text-[12px] sm:text-[16px] font-[700] leading-[17px] text-center  hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[1px] sm:border-[2px] border-[#281CFF]"
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

  const payer_info = () => {
    const divs: JSX.Element[] = [];
    divs.push(
      <div key={0}>
        <div className="flex flex-col w-[100%] justify-center sm:mt-[18px] pb-[8px]">
          <div className="inline-flex flex-wrap flex-col lg:flex-row lg:space-x-8 items-start">
            <div className="w-[70vw] lg:w-[calc(50%-16px)] h-auto">
              <div className="text-[8px] sm:text-[16px] lg:text-xl font-[500]">
                예매자 이름
              </div>
              <div className="input-with-placeholder relative h-[32px] sm:h-[43px] lg:h-[64px] px-2 lg:p-4 flex-shrink-0 bg-white border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px]">
                <input
                  type="text"
                  placeholder="예매자 이름을 적어주세요."
                  onChange={handleBuyerChange}
                />
              </div>
            </div>
            <div className="mt-[8px] lg:mt-0 w-[70vw] lg:w-[calc(50%-16px)] h-auto">
              <div className="text-[8px] sm:text-[16px] lg:text-xl font-[500]">
                연락처
              </div>
              <div className="input-with-placeholder relative h-[32px] sm:h-[43px] lg:h-[64px] px-2 lg:p-4 flex-shrink-0 bg-white border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px]">
                <input
                  type="text"
                  placeholder="‘-’없이 입력해주세요."
                  onChange={handlePhoneNumberChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    for (let i = 1; i < member; i++) {
      const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedNames = [...namesArray];
        updatedNames[i - 1] = event.target.value;
        setNamesArray(updatedNames);
      };

      const handlePhoneChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const phoneNumber = event.target.value.replace(/[^0-9]/g, "");
        const updatedPhones = [...phonesArray];
        updatedPhones[i - 1] = phoneNumber;
        setPhonesArray(updatedPhones);
      };

      divs.push(
        <div key={i}>
          <div className="flex flex-col w-[100%] justify-center sm:mt-[18px] pb-[8px]">
            <div className="inline-flex flex-wrap flex-col lg:flex-row lg:space-x-8 items-start">
              <div className="w-[70vw] lg:w-[calc(50%-16px)] h-auto">
                <div className="text-[8px] sm:text-[16px] lg:text-xl font-[500] mt-[8px] sm:mt-0">
                  동반인{i} 이름
                </div>
                <div className="input-with-placeholder relative h-[32px] sm:h-[43px] lg:h-[64px] px-2 lg:p-4 flex-shrink-0 bg-white border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px]">
                  <input
                    type="text"
                    placeholder="동반인 이름을 적어주세요."
                    onChange={handleNameChange}
                  />
                </div>
              </div>
              <div className="mt-[8px] lg:mt-0 w-[70vw] lg:w-[calc(50%-16px)] h-auto">
                <div className="text-[8px] sm:text-[16px] lg:text-xl font-[500]">
                  연락처
                </div>
                <div className="input-with-placeholder relative h-[32px] sm:h-[43px] lg:h-[64px] px-2 lg:p-4 flex-shrink-0 bg-white border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px]">
                  <input
                    type="text"
                    placeholder="‘-’없이 입력해주세요."
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return divs;
  };

  return (
    <div className={`${dynamicHeightClass}`}>
      <Background>
        <div className=" font-pretendard px-[12.5vw] flex items-center flex-col mb-[84px]">
          <div className="flex flex-col items-center mx-[12.5vw] text-center sm:mt-[40px]">
            <Image
              src="/assets/images/tickets/divider_medium.svg"
              alt="티켓"
              width={75}
              height={17}
              className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"
            />
            <div className="mt-[8px] sm:mt-[16px] font-[700] text-[20px] sm:text-[32px] leading-[42px] whitespace-nowrap flex flex-row">
              <div className="text-[#281CFF]">일반 티켓</div>
              <span>&nbsp;예매하기</span>
            </div>
            <div className="mt-[16px] sm:mt-[32px] font-[500] text-[10px] sm:text-[14px] leading-[21px]">
              <div>깔루아 2024 3월 정기공연</div>
              <div>2023.03.04 오후 7시</div>
            </div>
          </div>
          <div className="mt-[32px] sm:mt-[64px] flex flex-col mx-auto w-[100%] ">
            <div className="font-[700] text-[16px] sm:text-[20px] leading-[30px]">
              예매 인원을 선택해주세요.{" "}
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[8px] sm:mt-[16px] bg-[#000] flex " />
            <div>
              <div className="mt-[8px] sm:mt-[32px] flex flex-row">
                <div className="text-[8px] sm:text-[14px] font-[500] leading-[21px] text-[#6A6A6A]">
                  일반
                </div>
                <div className="ml-[4vw] text-[8px] sm:text-[14px] font-[500] w-[60vw] leading-[21px] text-[#2D2D2D]">
                  일반 티켓은 1인 5매까지 예매 가능합니다.
                </div>
              </div>
              <div className="mt-[8px] relative flex flex-row">
                <div className="flex flex-row">
                  <div className="w-[68px] sm:w-[120px] h-[26px] sm:h-[76px] flex flex-col justify-center flex-shrink-0 text-[16px] sm:text-[24px] font-[700] text-[#000000]">
                    5000원
                  </div>
                </div>
                <div className="bg-[white] w-[76px] sm:w-[110px] h-[26px] sm:h-[35px] ml-[5vw] sm:mt-[20px] flex flex-shrink-0 border border-solid border-[#D9D9D9] rounded-[10px] items-center justify-center mr-[5vw] sm:mr-0">
                  <div className="flex gap-2 sm:gap-4 text-[20px] sm:text-[26px] font-[700]">
                    <button
                      className="flex h-[25.9px] sm:h-[35px] my-auto ml-[2px] pr-[7px] sm:ml-[4px] sm:pr-[9px] text-center items-center justify-center border-r text-[#000000] border-[#D9D9D9]"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <p>{member}</p>
                    <button
                      className="flex h-[25.9px] sm:h-[35px] my-auto pl-[6px] sm:pl-[8px] text-center items-center justify-center border-l text-[#000000] border-[#D9D9D9]"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]" />
            <div>
              <div className=" flex lg:flex-row flex-col ">
                <div className="mt-[8px] sm:mt-[30px] w-[140px] h-[29px] font-[700] sm:pt-[8px] text-[16px] sm:text-[20px] leading-[24px]">
                  예매자 정보 입력
                </div>
                <div className="w-[80vw] h-[30px] lg:w-[60vw] text-[8px] sm:text-[14px] text-[#464646] lg:ml-[3vw]  flex flex-col lg:mt-[40px] mt-[8px] sm:mt-[24px] ">
                  <div>본인확인을 위해 정확한 정보를 입력해주세요.</div>
                </div>
              </div>
              {payer_info()}
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]" />
            <div>
              <div className="mt-[12px] sm:mt-[32px] flex lg:flex-row flex-col">
                <div className="w-[160px] h-[29px] font-[700] text-[16px] sm:text-[20px] leading-[30px]">
                  티켓수령방법 선택
                </div>
                <div className="whitespace-pre-wrap sm:w-[47.5vw] h-[26px] lg:ml-[2.5vw]  lg:mt-[5px] mt-[8px] sm:mt-[15px] text-[8px] sm:text-[14px] font-[500] leading-[21px] text-[#464646] flex-shrink-0 flex flex-col lg:flex-row">
                  <p className="whitespace-nowrap">
                    티켓현장수령은 예매가 완료되면 부여되는
                  </p>
                  <div className="flex flex-row">
                    <p className="hidden lg:flex">&nbsp;</p>
                    <p className="text-[#281CFF] whitespace-nowrap">
                      [예약번호]로 공연 당일 티켓을 수령하여 입장
                    </p>
                    <p className="whitespace-nowrap">합니다.</p>
                  </div>
                </div>
              </div>
              <div className="text-[20px] mt-[8px] sm:mt-[18px]">
                <label className="flex flex-row">
                  <div className="flex items-center justify-center mt-[8px] sm:mt-[20px]">
                    <input
                      type="radio"
                      name="현장수령"
                      checked={isCheck}
                      onChange={handleCheckboxChange1}
                      className="sm:mr-[18px] mr-[6px] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] accent-[#281CFF] flex-shrink-0"
                    />
                    <div className="text-[8px] sm:text-[20px] font-[500] leading-[30px]">
                      현장수령
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[8px] sm:mt-[40px] bg-[#D3D3D3]" />
            <div>
              <div className="mt-[8px] sm:mt-[32px] flex lg:flex-row flex-col">
                <div className="w-[160px] h-[29px] font-[700] text-[16px] sm:text-[20px] leading-[30px]">
                  결제 방법 선택
                </div>
                <div className="whitespace-pre-wrap sm:w-[47.5vw] h-[26px] lg:ml-[2.5vw]  lg:mt-[5px] mt-[8px] sm:mt-[15px] text-[8px] sm:text-[14px] font-[500] leading-[21px] text-[#464646] flex-shrink-0 flex flex-col lg:flex-row">
                  계좌이체 선택 시 다음 화면에서 계좌번호를 확인해주세요.
                </div>
              </div>
              <div className="mt-[8px] sm:mt-[18px] flex lg:flex-row flex-col">
                <label className="flex items-center mt-[8px] sm:mt-[20px]">
                  <input
                    type="radio"
                    name="결제방법"
                    value={"계좌이체"}
                    checked={payment === "계좌이체"}
                    onChange={handleCheckboxChange2}
                    className="sm:mr-[18px] mr-[6px] accent-[#281CFF] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] flex-shrink-0 justify-center"
                  />
                  <div className="text-[8px] sm:text-[20px] font-[500] justify-center">
                    계좌이체
                  </div>
                </label>
              </div>
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]" />
            <div>
              <div className="mt-[8px] sm:mt-[32px] flex lg:flex-row flex-col">
                <div className="w-[200px] h-[29px] font-[700] text-[16px] sm:text-[20px] leading-[30px]">
                  최종 결제 금액
                </div>
              </div>
              <div className="font-[700] text-[16px] sm:text-[24px] mt-[20px] flex flex-row">
                5000원 x {member}매 ={" "}
                <p className="text-[#281CFF]">&nbsp;{5000 * member}원</p>
              </div>
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]" />
            <div>
              <div className="mt-[12px] sm:mt-[20px] flex flex-row">
                <div className="w-[100%] h-[29px] font-[700] text-[16px] sm:text-[20px] sm:leading-[28px] whitespace-nowrap">
                  유의사항 및 취소규정
                </div>
              </div>
              <ol className="list-decimal ml-[12px] sm:ml-[24px] font-[500] text-[8px] sm:text-[14px] lg:text-[16px] mt-[12px] sm:mt-[14px] leading-[26px]">
                <li>
                  예매취소는 공연 24시간 이전에만 가능하며 그 이후에는 환불이
                  불가합니다.{" "}
                </li>
                <li>여러 장의 티켓을 구매하셨을 경우 결제와 결제 취소의 경우 모든 티켓이 일괄처리됩니다.{" "}</li>
                <li>결제 취소를 원하시면 [예매하기 - 결제 내역확인하기 - 예매번호 조회]를 통해 취소하실 수 있습니다.{" "}
                </li>
                <li>
                  공연 24시간 전 이후에 예매 확정 및 안내 문자 발송예정입니다.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex items-center justify-center mt-[48px] sm:mt-[94px]">
            <div className="flex items-center justify-center">
              <button
                onClick={handleShowConfirmationModal}
                className="w-[170px] h-[35px] sm:w-[270px] sm:h-[53px] felx items-center justify-center rounded-[10px] bg-[#281CFF] text-[white] text-[8px] sm:text-[18px] font-[700] leading-[17px] text-center hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[2px] border-[#281CFF]"
              >
                예매하기
              </button>
            </div>
          </div>
          {isError && <Error_modal />}
          {!isFormComplete && isClick && <Input_modal />}
          {isConfirmationModalVisible && <ConfirmationModal />}
          {isTokenErrorModalVisible && <TokenErrorModal/>}
        </div>
      </Background>
    </div>
  );
}
