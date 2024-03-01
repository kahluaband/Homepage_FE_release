import React from "react";
import { useState, useEffect } from "react";
import { getAuthAxios } from "@/apis/authAxios";
import FreshmanTicketItem from "./TicketItem_freshman";

const FreshmanTicketList = () => {
  const access = localStorage.getItem("access");
  const authAxios = getAuthAxios(access);
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState();
  
  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await authAxios.get(
          `https://api.kahluaband.com/kahlua_admin/tickets/freshman_tickets/`
        );
        setTickets(response.data.data.tickets);
        setCount(response.data.data.total_freshman);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>대기 중 ...</div>;
  }

  if (!tickets) {
    return null;
  }

  return (
    <div className="whitespace-nowrap overflow-auto flex flex-col">
      {
        <>
          <div className="flex flex-row w-full px-10 py-4 gap-4">
            <p className="flex justify-center items-center w-[140px] h-8 p-4 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
              2024.03 정기공연
            </p>
            <p className="flex justify-center items-center w-[80px] h-8 p-4 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
              {count} 매
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
              학과
            </li>
            <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              학번
            </li>
            <li className="flex justify-center items-center w-[120px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              뒷풀이 참석 여부
            </li>
          </div>

          <>
            {tickets.map((ticket) => (
              <FreshmanTicketItem key={ticket.id} ticket={ticket} />
            ))}
          </>
        </>
      }
    </div>
  );
};

export default FreshmanTicketList;
