import React from "react";
import { useState, useEffect } from "react";
import { getAuthAxios } from "@/apis/authAxios";
import AllTicketItem from "./TicketItem_all";

const AllTicketList = () => {
  const access = localStorage.getItem("access");
  const authAxios = getAuthAxios(access);
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState();
  const [name_sorted, setNameSorted] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const sorting = name_sorted ? "" : `?name=${name_sorted}`
        const response = await authAxios.get(
          `https://api.kahluaband.com/kahlua_admin/tickets/all/${sorting}`
        );
        setTickets(response.data.data.tickets);
        setCount(response.data.data.total_tickets);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [name_sorted]);

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

          <li className="flex flex-row h-16 w-[1476px] bg-[#D9D9D9] px-4 items-center text-center">
            <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              예매번호
            </p>
            <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2" onClick={()=>setNameSorted(!name_sorted)}>
              이름 {name_sorted ? "∧" : "∨"}
            </p>
            <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              전화번호
            </p>
            <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              매수
            </p>
            <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              학과
            </p>
            <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              학번
            </p>
            <p className="flex justify-center items-center w-[120px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              뒷풀이 참석 여부
            </p>
            <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              결제상황
            </p>
            <p className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              참석자 1
            </p>
            <p className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              참석자 2
            </p>
            <p className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              참석자 3
            </p>
            <p className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              참석자 4
            </p>
          </li>

          <>
            {tickets.map((ticket) => (
              <AllTicketItem key={ticket.id} ticket={ticket} />
            ))}
          </>
        </>
      }
    </div>
  );
};

export default AllTicketList;
