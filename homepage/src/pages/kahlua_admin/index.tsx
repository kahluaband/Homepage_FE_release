import React, { useCallback, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import { useState } from "react";
import DropdownApplication from "./DropdownApplication";
import { useRouter } from "next/router";
import AdminMain from "./Main";
import FreshmanTicketList from "@/app/components/kahlua_admin/TicketList_freshman";
import AllTicketList from "@/app/components/kahlua_admin/TicketList_all";
import GeneralTicketList from "@/app/components/kahlua_admin/TicketList_general";
import AppList from "@/app/components/kahlua_admin/ApplicationList";

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
  const [selectedSession, setSession] = useState("전체");
  const onSelect = useCallback((selectedSession: string) => {
    setSession(selectedSession);
  }, []);

  const [viewAllTicket, setViewAllTicket] = useState(false);
  const [viewGeneralTicket, setViewGeneralTicketl] = useState(false);
  const [viewFreshmanTicket, setViewFreshmanTicketl] = useState(false);
  const [ticketType, setTicketType] = useState("all");

  const DropdownTicket = () => {
    // const handleDropdownItemClick = (e :any) => {
    //   e.stopPropagation();
    // }

    return (
      <div
        id="dropdown"
        className="w-[170px] sm:w-[180px] md:w-[220px] h-auto text-[18px] flex-col justify-center items-center bg-white"
      >
        <li
          className="p-1"
          onClick={() => {
            setViewAllTicket(true);
            setViewFreshmanTicketl(false);
            setViewGeneralTicketl(false);
            setTicketType("전체");
          }}
        >
          전체
        </li>
        <li
          className="p-1"
          onClick={() => {
            setViewGeneralTicketl(true);
            setViewAllTicket(false);
            setViewFreshmanTicketl(false);
            setTicketType("general")
          }}
        >
          일반 예매
        </li>
        <li
          className="p-1"
          onClick={() => {
            setViewFreshmanTicketl(true);
            setViewAllTicket(false);
            setViewGeneralTicketl(false);
          }}
        >
          신입생 예매
        </li>
      </div>
    );
  };

  return (
    <div className="w-full flex-col font-pretendard">
      <AdminHeader />
      <div className="h-[calc(100vh-78px)] sm:h-[calc(100vh-86px)] sm:flex">
        <div className="w-full sm:w-[180px] md:w-[220px] h-auto gap-4 sm:gap-0 flex sm:flex-col text-center justify-center items-center sm:justify-start bg-gray">
          <ul
            onClick={() => {
              setViewApplication(true);
              setViewTicket(false);
            }}
            className="font-bold text-[20px] w-[170px] sm:w-[180px] md:w-[220px]"
          >
            지원자 정보 {viewApplication ? "<" : ">"}
            {viewApplication && (
              <DropdownApplication session={selectedSession} onSelect={onSelect} />
            )}
          </ul>
          <ul
            onClick={() => {
              setViewTicket(true);
              setViewApplication(false);
            }}
            className="font-bold text-[20px] w-[170px] sm:w-[180px] md:w-[220px]"
          >
            예매자 정보 {viewTicket ? "<" : ">"}
            {viewTicket && <DropdownTicket />}
          </ul>
        </div>
        <div className="w-full sm:w-[calc(100%-180px)] md:w-[calc(100%-220px)] flex text-[20px]">
          {!viewApplication && !viewTicket && <AdminMain />}

          {/*application은 세션 선택을 카테고리화 시켰는데, 티켓은 백엔드 보면 query params 이용하지 않고 모든티켓/신입생티켓/일반티켓이 다 따로 만들어져있어서 카테고리화 시키지 않고 따로따로 페이지 만들어두었음*/}
          {viewApplication && <AppList session={selectedSession} />}

          {viewTicket && viewAllTicket && <AllTicketList />}
          {viewTicket && viewFreshmanTicket && <FreshmanTicketList />}
          {viewTicket && viewGeneralTicket && <GeneralTicketList />}
        </div>
      </div>
    </div>
  );
}
