import React from 'react';

interface Ticket_info_Props {
reservation_id: string;
buyer: string;
}

const Ticket_info_Props: React.FC<Ticket_info_Props> = ({ reservation_id, buyer }) => {
return (
    <div className="mt-[10px] sm:mt-[32px] mx-auto bg-[#F1F5FF] w-[75vw] sm:w-[400px] md:w-[516px] h-[120px] flex-shrink-0 rounded-[10px]">
    <div className="flex flex-row align-center justify-center text-[10px] sm:text-[12px] font-[700]">
        <div className="mt-[15px] ml-[3vw] sm:ml-[24px] w-[33%] md:w-[118px] h-[19px] flex text-center justify-center items-center"> 예매번호 </div>
        <div className="mt-[15px] mx-auto w-[33%] md:w-[118px] h-[19px] flex text-center justify-center items-center"> 예매자 성명 </div>
        <div className="mt-[15px] mr-[3vw] sm:mr-[24px] w-[33%] md:w-[118px] h-[19px] flex text-center justify-center items-center "> 취소 가능 여부 </div>
    </div>
    <div className="mt-[21px] h-[1px] w-[100%] bg-[#D3D3D3]" />
    <div className="flex flex-row align-center justify-center text-[10px] sm:text-[14px] font-[500]">
        <div className="mt-[19px] ml-[3vw] sm:ml-[24px] w-[33%] md:w-[118px] h-[21px] flex text-center justify-center items-center "> {reservation_id} </div>
        <div className="mt-[19px] mx-auto w-[33%] md:w-[118px] flex text-center justify-center items-center "> {buyer} </div>
        <div className="mt-[19px] mr-[3vw] sm:mr-[24px] w-[33%] md:w-[118px] flex text-center justify-center items-center ">취소 불가</div>
    </div>
    </div>
);
};

export default Ticket_info_Props;