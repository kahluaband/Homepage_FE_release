import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Error_modal = () => {
    const [isClose, setIsClose] = useState(false);

    
    const handleIsClose = () => {
        setIsClose(true);
    };
    
    const handleOverlayClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.target === event.currentTarget) {
        handleIsClose();
        }
    };
    
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
        handleIsClose();
        }
    };
    
    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
        document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return !isClose ? (
        <div onClick={handleOverlayClick} className= "fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center">
            <div className="font-pretendard w-[250px] h-[260px] sm:w-[580px] sm:h-[360px] bg-[#FFF] flex-shrink-0 fixed rounded-[10px] z-20">
                <button onClick={handleIsClose} className="ml-[222px] mt-[8px] h-[22px] sm:h-[30px] sm:ml-[548px] flex-col items-center flex justify-center">
                <Image src="/assets/images/layout/close.svg" width={36} height={38} alt="close" className="w-[16px] h-[16px] sm:w-[22px] sm:h-[22px]"/>
                </button>
                <div className="flex flex-col items-center text-center content-center mt-[12px] sm:mt-[40px] leading-normal">
                    <Image src="/assets/images/tickets/divider_medium.svg" alt="ticket" width={52} height={12} className="sm:w-[60px] sm:h-[20px] w-[40px] h-[15px]"/>
                    <p className="font-[700] mt-[12px] text-[14px] sm:text-[24px] leading-[28px]">이미 예약한 정보입니다.</p>
                    <p className="mt-[8px] sm:mt-[20px] sm:font-[500] text-[12px] sm:text-[14px] leading-[21px] text-[#4A4A4A]">입력한 정보를 다시 한번 확인해주세요.</p>
                    <button onClick={() => window.location.reload()}  className="mt-[28px] sm:mt-[28px] flex items-center w-[110px] h-[30px] sm:w-[160px] sm:h-[40px] justify-center rounded-[5px] bg-[#281CFF] text-[white] text-[12px] sm:text-[16px] font-[700] leading-[17px] text-center  hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[1px] sm:border-[2px] border-[#281CFF]">다시 입력하기</button>
                    <Link href="freshman_ticket/delete">
                    <button className="mt-[16px] sm:mt-[28px] flex items-center w-[110px] h-[30px] sm:w-[160px] sm:h-[40px] justify-center rounded-[5px] bg-[#D3D3D3] text-[white] text-[12px] sm:text-[16px] font-[700] leading-[17px] text-center hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[1px] sm:border-[2px] border-[#D3D3D3]">예매내역 확인하기</button>
                    </Link>
                </div>
                </div>
        </div>
    ): null;
}

export default Error_modal;