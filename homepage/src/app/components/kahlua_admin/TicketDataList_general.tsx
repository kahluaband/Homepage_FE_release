import React from "react";
import GeneralTicketList from "./TicketList_general";

const GeneralTicketDataList = () => {
  return (
    <div className="whitespace-nowrap overflow-auto flex flex-col">
      {
        <>
          <div className="flex flex-row w-full px-10 py-4 gap-4">
            <p className="flex justify-center items-center w-[140px] h-8 p-4 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
              2024.03 정기공연
            </p>
            <p className="flex justify-center items-center w-[80px] h-8 p-4 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
              일반예매
            </p>
          </div>

          <div className="flex flex-row h-16 w-[1380px] bg-[#D9D9D9] px-4 items-center text-center">
            <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              예매번호
            </li>
            <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              이름
            </li>
            <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              전화번호
            </li>
            <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              매수
            </li>
            <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              결제상황
            </li>
          </div>

          <GeneralTicketList/>
        </>
      }
    </div>
  );
};

export default GeneralTicketDataList;
