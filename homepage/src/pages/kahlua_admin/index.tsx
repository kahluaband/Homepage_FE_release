import React, { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import { useState } from "react";
import DropdownApplication from "./DropdownApplication";
import DropdownTicket from "./DropdownTicket";

export default function Admin() {
  const [viewApplication, setViewApplication] = useState(false);
  const [viewTicket, setViewTicket] = useState(false);

  return (
    <div className="w-full flex-col font-pretendard">
      <AdminHeader />
      <div className="h-screen flex">
        <div className="w-[356px] flex-col text-center justify-center items-center bg-gray">
          <ul
            onClick={() => {
              setViewApplication(!viewApplication);
            }}
            className="font-bold text-[24px]"
          >
            지원자 정보 {viewApplication ? "<" : ">"}
            {viewApplication && <DropdownApplication />}
          </ul>
          <ul
            onClick={() => {
              setViewTicket(!viewTicket);
            }}
            className="font-bold text-[24px]"
          >
            예매자 정보 {viewTicket ? "<" : ">"}
            {viewTicket && <DropdownTicket />}
          </ul>
        </div>
        <div className="w-[calc(100%-356px)] flex justify-center items-center text-[20px]">
          홍익대학교 깔루아
          <br />
          어드민 페이지입니다.
        </div>
      </div>
    </div>
  );
}
