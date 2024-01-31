import React, { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import { useState } from "react";
import DropdownApplication from "./DropdownApplication";
import DropdownTicket from "./DropdownTicket";
import { useRouter } from "next/router";
import FreshmanTicketList from "./TicketList_freshman";
import AllTicketList from "./TicketList_all";
import GeneralTicketList from "./TicketList_general";

export default function Admin() {
  const router = useRouter();
  
  useEffect(() => {
    if (!localStorage.getItem("access")) {
      alert("관리자 로그인 후 이용가능합니다.");
      router.push("/login");
    }
  });
  
  const [viewApplication, setViewApplication] = useState(false);
  const [viewTicket, setViewTicket] = useState(false);
  const [viewAllTicket, setViewAllTicket] = useState(false);
  const [viewGeneralTicket, setViewGeneralTicketl] = useState(false);
  const [viewFreshmanTicket, setViewFreshmanTicketl] = useState(false);

  const DropdownTicket = () => {

    return (
      <div
        id="dropdown"
        className="w-[238px] h-[148px] flex-col justify-center items-center bg-white"
      >
        <li onClick={() => {
            setViewAllTicket(true);
            setViewFreshmanTicketl(false);
            setViewGeneralTicketl(false);
          }}>
            전체
        </li>
        <li onClick={() => {
            setViewGeneralTicketl(true);
            setViewAllTicket(false);
            setViewFreshmanTicketl(false);
          }}>
          일반 예매
        </li>
        <li onClick={() => {
            setViewFreshmanTicketl(true);
            setViewAllTicket(false);
            setViewGeneralTicketl(false);
          }}>
            신입생 예매
        </li>
      </div>
    );
  };

  return (
    <div className="w-full flex-col font-pretendard">
      <AdminHeader />
      <div className="h-screen flex">
        <div className="w-[356px] flex-col text-center justify-center items-center bg-gray">
          <ul
            onClick={() => {
              setViewApplication(!viewApplication);
              setViewTicket(false)
            }}
            className="font-bold text-[24px]"
          >
            지원자 정보 {viewApplication ? "<" : ">"}
            {viewApplication && <DropdownApplication />}
          </ul>
          <ul
            onClick={() => {
              setViewTicket(true);
              setViewApplication(false)
            }}
            className="font-bold text-[24px]"
          >
            예매자 정보 {viewTicket ? "<" : ">"}
            {viewTicket && <DropdownTicket />}
          </ul>
        </div>
        <div className="w-[calc(100%-356px)] flex justify-center items-center text-[20px]">
          {viewAllTicket && <AllTicketList/>}
          {viewFreshmanTicket && <FreshmanTicketList/>}
          {viewGeneralTicket && <GeneralTicketList/>}
        </div>
      </div>
    </div>
  );
}
