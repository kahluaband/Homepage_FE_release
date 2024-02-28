import React, { useState } from "react";

const DropdownTicket = () => {

  const [viewAllTicket, setViewAllTicket] = useState(false);
  const [viewGeneralTicket, setViewGeneralTicketl] = useState(false);
  const [viewFreshmanTicket, setViewFreshmanTicketl] = useState(false);

  return (
    <div
      id="dropdown"
      className="w-[180px] md:w-[220px] h-auto text-[18px] text-center flex-col justify-center items-center bg-white"
    >
      <li className="p-1" onClick={() => {
          setViewAllTicket(!viewAllTicket);
        }}>
          전체
      </li>
      <li className="p-1" onClick={() => {
          setViewGeneralTicketl(!viewGeneralTicket);
        }}>
        일반 예매
      </li>
      <li className="p-1" onClick={() => {
          setViewFreshmanTicketl(!viewFreshmanTicket);
        }}>
          신입생 예매
      </li>
    </div>
  );
};

export default DropdownTicket;
