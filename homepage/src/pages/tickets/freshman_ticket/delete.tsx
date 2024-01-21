import { useState } from "react";
import Image from "next/image";
import Background from "@/app/components/Background";
import Ticket_info from "../ticket_info"
import axios from 'axios';
import { useRouter } from "next/router";

const Freshman_delete = () => {
    const router = useRouter();
    const [reservation_id, setreservation_id] = useState("");
    const [searched, setSearched] = useState(false);
    const [validReservation_id, setValidReservation_id] = useState(true);
    const [buyer, setBuyer] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://kahluaband.com/tickets/freshman_complete/?reservation_id=${reservation_id}`);
            
            if (response.data) {
                setSearched(true);
                setValidReservation_id(true);
                setBuyer(response.data.data.buyer);
            } else {
                setSearched(false);
                setValidReservation_id(false);
            }
        } catch (error) {
            //console.error('Error searching reservation:', error);
            setSearched(false);
            setValidReservation_id(false);
        }
    };

    const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
        handleSearch();
        }
    };

    const handleCancelReservation = () => {
        router.push({
            pathname: '/tickets/freshman_ticket/check/',
            query: { reservation_id :reservation_id } 
        })};
    
    return  (
        <div className="h-[100vh] sm:h-[650px] min-h-screen">
            <Background>
            <div className="font-pretendard mx-[12.5vw] flex items-center flex-col mb-[84px] ">
                <div className="flex flex-col items-center mx-[12.5vw] text-center content-center mt-[12px] sm:mt-[40px] leading-normal">
                    <Image src="/assets/images/tickets/divider_medium.svg" alt="ticket" width={52} height={12}  className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"/>
                    <p className="mt-[8px] sm:mt-[16px] font-[700] text-[20px] sm:text-[32px] leading-[42px] whitespace-nowrap">신입생 예매 내역 확인</p>
                    <p className="mt-[16px] sm:mt-[32px] font-[500] text-[12px] sm:text-[14px] leading-[21px] text-[#4A4A4A] whitespace-nowrap">티켓 예매 내역을 확인하고 취소할 수 있습니다.</p>
                </div>
                <div className="mt-[24px] sm:mt-[48px] mx-auto w-[70vw] sm:w-[400px] md:w-[516px] h-[48px] flex rounded-[10px] items-center text-center content-center border-[1px] border-solid bg-[#FFF] border-[#000] outline-none">
                    <input type="text" value={reservation_id} onChange={(e) => setreservation_id(e.target.value)} placeholder="예매번호를 입력해 주세요." className="flex-grow px-[10px] sm:px-[16px] outline-none text-[14px] w-[60px] whitespace-nowrap" onKeyDown={handleInputKeyPress}/>
                    <div onClick={handleSearch} className="relative bg-[#eaeaea] rounded-[4px] w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] my-[12px] mr-[16px] cursor-pointer hover:bg-[#D9D9D9]">
                        <Image src="/assets/images/tickets/search.png" alt="돋보기" width={1000} height={1000} className="flex w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] mx-auto mt-[5px]"/>
                    </div>
                </div>
                {searched && (
                    <div className="mt-[12px] sm:mt-[48px]items-center content-center flex flex-col ">
                        <Ticket_info reservation_id={reservation_id} buyer={buyer} />
                        <div className="w-[75vw] sm:w-[400px] md:w-[514px] h-[48px] mt-[48px] mx-auto flex items-center">
                        <button onClick={handleCancelReservation} className="w-full h-full bg-[#E8E8E8] rounded-[10px] text-center text-[#000] hover:text-[#FFF] text-[14px] font-[600] leading-[19px] hover:bg-[#281CFF]">
                            예매 취소하기
                        </button>
                        </div>
                    </div>
                )}
                {!validReservation_id && ( <div className="mt-[48px] flex text-center justify-center items-center font-[700] text-[14px]">잘못된 예매 번호 입니다.</div>)}
            </div>
        </Background>
    </div>
    )
};

export default Freshman_delete;