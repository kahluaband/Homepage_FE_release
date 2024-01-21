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
          `https://kahluaband.com/tickets/freshman_ticket/`,
          formData
        );
        if (response.status === 200) {
          const reservation_id = response.data.data.reservation_id;
          router.push({
            pathname: "/tickets/freshman_complete",
            query: { ...router.query, reservation_id },
          });
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
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
    const phone_num = event.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
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
        className="mr-[18px] accent-[#281CFF] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] flex-shrink-0"
      />
      <div className="font-[500]">{label}</div>
    </label>
  );

  return (
    <div className="w-[100%] h-[1100px] p:h-[1150px] x:h-[1200px] sm:h-[1900px] md:h-[1850px] lg:h-[1580px] z-60">
      <Background>
        <div className="font-pretendard px-[12.4vw] flex items-center flex-col mb-[84px]">
          <div className="flex flex-col items-center mx-[12.5vw] text-center sm:mt-[40px]">
            <Image
              src="/assets/images/tickets/divider_medium.svg"
              alt="티켓"
              width={75}
              height={17}
              className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"
            />
            <div className="mt-[8px] sm:mt-[16px] font-[700] text-[20px] sm:text-[32px] leading-[42px] whitespace-nowrap flex flex-row">
              <div className="text-[#281CFF]">신입생 티켓</div>
              <span>&nbsp;예매하기</span>
            </div>
            <div className="mt-[16px] sm:mt-[32px] font-[500] text-[10px] sm:text-[14px] leading-[21px]">
              <div>깔루아 2024 3월 정기공연</div>
              <div>2024.03.04 오후 7시</div>
            </div>
          </div>
          <div className="mt-[32px] sm:mt-[64px] flex flex-col mx-auto w-[100%]">
            <div className="font-[700] text-[12px] sm:text-[20px] leading-[30px]">
              예매 인원을 선택해주세요.{" "}
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[8px] sm:mt-[16px] bg-[#000] flex " />
            <div>
              <div className="mt-[8px] sm:mt-[32px] flex flex-row">
                <div className="text-[8px] sm:text-[14px] font-[500] leading-[21px] text-[#6A6A6A]">
                  신입생
                </div>
                <div className="ml-[4vw] text-[8px] sm:text-[14px] font-[500] w-[60vw] leading-[21px] text-[#2D2D2D]">
                  신입생 티켓은 1인 1매만 예매 가능합니다.
                </div>
              </div>
              <div className="mt-[12px] sm:mt-[16px] relative flex flex-row justify-between sm:justify-normal">
                <div className="flex flex-row">
                  <div className="w-[68px] sm:w-[120px] h-[26px] sm:h-[76px] flex flex-col justify-center flex-shrink-0 text-[12px] sm:text-[24px] font-[700] text-[#939393]">
                    5000원
                  </div>
                  <div className="flex flex-col justify-center flex-shrink-0 text-[12px] h-[26px] sm:h-[76px] sm:text-[24px] leading-[28px] font-[700] text-[#281CFF]">
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
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]" />
            <div className="mx-auto">
              <div className=" flex lg:flex-row flex-col">
                <div className="mt-[12px] sm:mt-[30px] w-[140px] h-[29px] font-[700] sm:pt-[8px] text-[12px] sm:text-[20px] leading-[24px]">
                  예매자 정보 입력
                </div>
                <div className="w-[80vw] h-[40px] lg:w-[60vw] text-[8px] sm:text-[14px] text-[#464646] lg:ml-[3vw] flex flex-col lg:mt-[16px] sm:mt-[24px] ">
                  <p>본인확인을 위해 정확한 정보를 입력해주세요.</p>
                  <div className="flex flex-col">
                    <div className="flex whitespace-nowrap">
                      <p>컴퓨터공학과</p>
                      <p className="text-[#281CFF] flex flex-row">
                        &nbsp;신입생 확인
                      </p>
                      을 위해 <p className="text-[#281CFF]">&nbsp;다음 정보</p>
                      <p>를 입력해야 합니다.</p>
                    </div>
                    <p className="text-[#0047FF] flex">
                      추후 공연장 입장 시 학생증 확인이 이루어질 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[75vw] justify-center sm:pt-8 sm:pb-[8px] lg:pb-10">
                <div className="inline-flex flex-wrap flex-col lg:flex-row lg:space-x-8 items-start">
                  <div className="w-[70vw] lg:w-[calc(50%-23px)] h-auto">
                    <div className="text-[8px] sm:text-[16px] lg:text-xl font-[500] mt-[8px] sm:mt-0">
                      이름
                    </div>
                    <div className="input-with-placeholder relative h-[32px] sm:h-[43px] lg:h-[64px] px-2 lg:p-4 flex-shrink-0 border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px] bg-white">
                      <input
                        value={buyer}
                        type="text"
                        placeholder=""
                        onChange={(e) => setBuyer(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-[8px] lg:mt-0 w-[70vw] lg:w-[calc(50%-23px)] h-auto">
                    <div className="text-[8px] sm:text-[16px] lg:text-xl font-[500]">
                      연락처
                    </div>
                    <div className="input-with-placeholder relative h-[32px] sm:h-[43px] lg:h-[64px] px-2 lg:p-4 flex-shrink-0 border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px] bg-white">
                      <input
                        value={phone_num}
                        type="text"
                        placeholder="‘-’없이 입력해주세요."
                        onChange={handlePhoneNumberChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[75vw] justify-center">
                <div className="inline-flex flex-wrap flex-col lg:flex-row lg:space-x-8 items-start">
                  <div className="w-[70vw] lg:w-[calc(50%-23px)] h-auto">
                    <div className="text-[8px] sm:text-[16px] lg:text-xl font-[500] mt-[8px] sm:mt-0">
                      학과
                    </div>
                    <div className="input-with-placeholder relative h-[32px] sm:h-[43px] lg:h-[64px] px-2 lg:p-4 flex-shrink-0 border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px] bg-white">
                      <input
                        value={major}
                        type="text"
                        placeholder=""
                        onChange={(e) => setmajor(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-[8px] lg:mt-0 w-[70vw] lg:w-[calc(50%-23px)] h-auto">
                    <div className="text-[8px] sm:text-[16px] lg:text-xl font-[500]">
                      학번
                    </div>
                    <div className="input-with-placeholder relative h-[32px] sm:h-[43px] lg:h-[64px] px-2 lg:p-4 flex-shrink-0 border border-[#464646] border-solid rounded-[10px] sm:mt-4 mt-[4px] bg-white">
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
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]" />
            <div>
              <div className="mt-[12px] sm:mt-[32px] flex lg:flex-row flex-col">
                <div className="w-[160px] h-[29px] font-[700] text-[12px] sm:text-[20px] leading-[30px]">
                  티켓수령방법 선택
                </div>
                <div className="whitespace-pre-wrap sm:w-[47.5vw] h-[26px] lg:ml-[2.5vw] lg:mt-[5px] mt-[4px] sm:mt-[15px] text-[8px] sm:text-[14px] font-[500] leading-[21px] text-[#464646] flex-shrink-0 flex flex-col lg:flex-row">
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
                      className="mr-[18px] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] accent-[#281CFF] flex-shrink-0"
                    />
                    <div className="text-[8px] sm:text-[20px] font-[500] leading-[30px]">
                      현장수령
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]" />
            <div className="flex flex-col lg:flex-row">
              <div className="w-[200px] h-[29px] mt-[12px] sm:mt-[32px] font-[700] text-[12px] sm:text-[20px] leading-[30px] whitespace-nowrap">
                신입생 뒷풀이 참여 여부
              </div>
              <div className="lg:w-[740px] lg:mt-[36px] sm:mt-[15px] mt-[4px] lg:ml-[40px] whitespace-nowrap text-[8px] sm:text-[14px] font-[500] leading-[21px] text-[#464646] flex-shrink-0 flex flex-row">
                공연 후 조가 배정되어{" "}
                <span className="text-[#281CFF] whitespace-nowrap ">
                  &nbsp;뒷풀이
                </span>
                가 있을 예정입니다.
              </div>
            </div>
            <div className="mt-[8px] sm:mt-[20px] text-[8px] sm:text-[20px] flex flex-row gap-[8.8vw]">
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
            <div className="mx-auto w-[100%] h-[1.5px] sm:h-[3px] mt-[16px] sm:mt-[40px] bg-[#D3D3D3]" />
            <div className="mt-[16px] sm:mt-[20px] flex flex-row">
              <div className="w-[100%] h-[29px] font-[700] text-[12px] sm:text-[20px] sm:leading-[28px] whitespace-nowrap">
                유의사항 및 취소규정
              </div>
            </div>
            <ol className="list-decimal ml-[3vw] sm:ml-[16px] font-[500] text-[8px] sm:text-[14px] mt-[4px] sm:mt-[14px] leading-[26px]">
              <li>
                예매취소는 24시간 이전에만 가능하며 그 이후에는 환불이
                불가합니다.{" "}
              </li>
              <li>여러장을 구매했을 시에는 일괄취소만 가능합니다.</li>
              <li>예매하기-예매확인 - 예매취소 버튼으로 취소 가능합니다.</li>
              <li>
                공연 24시간 전 이후에 예매 확정 및 안내 문자 발송예정입니다.
              </li>
            </ol>
          </div>
          <div className="flex items-center justify-center mt-[24px] sm:mt-[94px]">
            <button
              onClick={handleSubmit}
              className="w-[170px] h-[35px] sm:w-[270px] sm:h-[53px] felx items-center justify-center rounded-[10px] bg-[#281CFF] text-[white] text-[8px] sm:text-[18px] font-[700] leading-[17px] text-center hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[2px] border-[#281CFF]"
            >
              예매하기
            </button>
          </div>
        </div>
        {isError && <Error_modal />}
        {isClick && !isFormComplete && <Input_modal />}
      </Background>
    </div>
  );
}
