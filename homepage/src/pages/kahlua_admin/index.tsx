import React, { useCallback, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import { useState } from "react";
import DropdownApplication from "./DropdownApplication";
import DropdownTicket from "./DropdownTicket";
import { useRouter } from "next/router";
import FreshmanTicketList from "./TicketList_freshman";
import AllTicketList from "./TicketList_all";
import GeneralTicketList from "./TicketList_general";
import AdminMain from "./Main";
import ApplicationDataList from "./ApplicationDataList";

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

  const [nameSorted, setNameSorted] = useState(true);
  const [session, setSession] = useState("전체");
  const onSelect = useCallback((session: string) => {setSession(session); console.log(session)}, []);

  const [viewAllTicket, setViewAllTicket] = useState(false);
  const [viewGeneralTicket, setViewGeneralTicketl] = useState(false);
  const [viewFreshmanTicket, setViewFreshmanTicketl] = useState(false);

  const DropdownTicket = () => {

    return (
      <div
        id="dropdown"
        className="w-[220px] h-auto text-[18px] flex-col justify-center items-center bg-white"
      >
        <li className="p-1" onClick={() => {
            setViewAllTicket(true);
            setViewFreshmanTicketl(false);
            setViewGeneralTicketl(false);
          }}>
            전체
        </li>
        <li className="p-1" onClick={() => {
            setViewGeneralTicketl(true);
            setViewAllTicket(false);
            setViewFreshmanTicketl(false);
          }}>
          일반 예매
        </li>
        <li className="p-1" onClick={() => {
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
      <div className="h-[calc(100vh-86px)] flex">
        <div className="w-[220px] flex-col text-center justify-center items-center bg-gray">
          <ul
            onClick={() => {
              setViewApplication(true);
              setViewTicket(false)
            }}
            className="py-1 font-bold text-[20px]"
          >
            지원자 정보 {viewApplication ? "<" : ">"}
            {viewApplication && <DropdownApplication session={session} onSelect={onSelect}/>}
          </ul>
          <ul
            onClick={() => {
              setViewTicket(true);
              setViewApplication(false)
            }}
            className="py-1 font-bold text-[20px]"
          >
            예매자 정보 {viewTicket ? "<" : ">"}
            {viewTicket && <DropdownTicket />}
          </ul>
        </div>
        <div className="w-[calc(100%-220px)] flex text-[20px]">
          {!viewApplication && !viewTicket && <AdminMain/>}
          
          {/*application은 세션 선택을 카테고리화 시켰는데, 티켓은 백엔드 보면 query params 이용하지 않고 모든티켓/신입생티켓/일반티켓이 다 따로 만들어져있어서 카테고리화 시키지 않고 따로따로 페이지 만들어두었음*/}
          {viewApplication && <ApplicationDataList session={session}/>}

          {viewTicket && viewAllTicket && <AllTicketList/>}
          {viewTicket && viewFreshmanTicket && <FreshmanTicketList/>}
          {viewTicket && viewGeneralTicket && <GeneralTicketList/>}
        </div>
      </div>
    </div>
  );
}
