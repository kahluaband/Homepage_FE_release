import React, { useState } from "react";

const DropdownTicket = () => {

  const [viewAllTicket, setViewAllTicket] = useState(false);
  const [viewGeneralTicket, setViewGeneralTicketl] = useState(false);
  const [viewFreshmanTicket, setViewFreshmanTicketl] = useState(false);

  return (
    <div
      id="dropdown"
      className="w-[238px] h-[148px] flex-col justify-center items-center bg-white"
    >
      <li onClick={() => {
          setViewAllTicket(!viewAllTicket);
        }}>
          전체
      </li>
      <li onClick={() => {
          setViewGeneralTicketl(!viewGeneralTicket);
        }}>
        일반 예매
      </li>
      <li onClick={() => {
          setViewFreshmanTicketl(!viewFreshmanTicket);
        }}>
          신입생 예매
      </li>
    </div>
  );
};

export default DropdownTicket;
