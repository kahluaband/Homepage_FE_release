import { useEffect, useState } from "react";
import Image from "next/image";

const Input_modal = () => {
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
            <div className="font-pretendard w-[200px] h-[170px] sm:w-[580px] sm:h-[260px] bg-[#FFF] flex-shrink-0 fixed rounded-[3px] z-20">
                <button onClick={handleIsClose} className="ml-[180px] h-[22px] sm:h-[30px] sm:ml-[550px] flex-col items-center flex justify-center">
                <Image src="/assets/images/layout/close.svg" width={36} height={38} alt="close" className="w-[16px] h-[16px] sm:w-[22px] sm:h-[22px]"/>
                </button>
                <div className="flex flex-col items-center text-center content-center mt-[12px] sm:mt-[40px] leading-normal">
                    <Image src="/assets/images/tickets/divider_medium.svg" alt="ticket" width={52} height={12} className="sm:w-[52px] sm:h-[12px] w-[30px] h-[10px]"/>
                    <p className="font-[700] mt-[12px] text-[12px] sm:text-[24px] leading-[28px]">모든 정보를 입력해야 합니다.</p>
                    <p className="mt-[8px] sm:mt-[20px] sm:font-[500] text-[8px] sm:text-[14px] leading-[21px] text-[#4A4A4A]">입력한 정보를 다시 한번 확인해주세요.</p>
                    <button onClick={handleIsClose}  className="mt-[8px] sm:mt-[28px] flex items-center w-[70px] h-[20px] sm:w-[100px] sm:h-[24px] justify-center rounded-[3px] bg-[#281CFF] text-[white] text-[8px] sm:text-[12px] font-[700] leading-[17px] text-center  hover:bg-[white] hover:text-[#281CFF] hover:border-[#281CFF] transition-all duration-450 border-[1px] sm:border-[2px] border-[#281CFF]">다시 입력하기</button>
                </div>
                </div>
        </div>
    ): null;
};

export default Input_modal;