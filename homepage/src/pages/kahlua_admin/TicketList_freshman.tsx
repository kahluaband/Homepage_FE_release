import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const FreshmanTicketList = () => {

  const router = useRouter();
  
  const [buyer, setBuyer] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [major, setMajor] = useState("");
  const [studentID, setStudentID] = useState("");
  const [meeting, setMeeting] = useState(false);

  useEffect(() => {
    const fetchReservationData = async () => {
        try {
          const response = await axios.get(
            `https://api.kahluaband.com/kahlua_admin/tickets/freshman_tickets/`,
          );
          if (response.status === 200) {
            setBuyer(response.data.tickets.buyer);
            setPhoneNum(response.data.tickets.phone_num);            
          } 
          else {
          }
        } catch (error) {}
      };
    fetchReservationData();
  }, );

  return (
    <div className="whitespace-nowrap overflow-auto flex flex-col">
      {<>
      <div className="flex flex-row w-full px-10 py-4 gap-4">
        <p className="flex justify-center items-center w-[140px] h-8 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
          2024.03 정기공연
        </p>
        <p className="flex justify-center items-center w-[80px] h-8 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
          ?명
        </p>
      </div>

      <div className="flex flex-row h-16 w-[1712px] bg-[#D9D9D9] px-4 items-center text-center">
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
          학과
        </li>
        <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          학번
        </li>
        <li className="flex justify-center items-center w-[120px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          뒷풀이 참석 여부
        </li>
      </div>
      </>}
    </div>
  );
};

export default FreshmanTicketList;
