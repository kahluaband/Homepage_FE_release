import Background from "@/app/components/Background";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Cancel_complete(){
    const router = useRouter();
    const { rid } = router.query;

    return (
        <div className = "h-[900px]">
            <Background>
            <div className="font-pretendard mx-[12.5vw] flex items-center flex-col mb-[84px]">
                <div className="flex flex-col items-center mx-[12.5vw] text-center content-center mt-[12px] sm:mt-[40px] leading-normal">
                        <Image src="/assets/images/tickets/divider_medium.svg" alt="ticket" width={52} height={12}  className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"/>
                        <p className="mt-[8px] sm:mt-[16px] font-[700] text-[20px] sm:text-[32px] leading-[42px] whitespace-nowrap">예매 취소가 완료되었습니다.</p>
                    </div>
                    <div className="mt-4 sm:mt-[64px] flex flex-col mx-auto ">
                        <div className="font-[700] text-[14px] sm:text-[20px] leading-[30px]">취소 정보</div>

                        <div className="w-[72.5vw] h-[1.5px] sm:h-[3px] mt-4 bg-[#000] flex "/>

                        <div className="mt-4 md:mt-8 sm:ml-[0.5vw] flex flex-row items-center">
                            <div className="text-[12px] sm:text-[20px] w-[100px] font-[500] leading-[0.4px]">예매번호</div>
                            <div className="ml-[2vw] sm:ml-[5.5vw] text-[10px] sm:text-[16px] font-[500] w-[35vw] leading-[21px] text-[#281CFF]">{rid}</div>
                        </div>

                        <div className="w-[72.5vw] h-[1.5px] sm:h-[3px] mt-4 md:mt-8  bg-[#D3D3D3] flex"/>
                    </div>

                    <div className="flex ml-[0.5vw] w-[72.5vw] flex-col">
                        <div className="mt-4 md:mt-8 flex w-[247px] h-[30px] font-[700] text-[16px] sm:text-[20px] leading-[28px] whitespace-nowrap">필독 사항</div>
                        <ol className="list-decimal ml-[24px] font-[500] text-[10px] sm:text-[12px] lg:text-[16px] mt-[8px] sm:mt-[22px] leading-[26px]">
                            <li><div className="flex md:flex-row flex-col">계좌이체결제를 선택하신 분들은 24시간 이내로 자동 환불처리될 예정입니다. </div></li>
                            <li><div className="flex md:flex-row flex-col">여러 장의 티켓을 구매하셨을 경우 모든 티켓이 일괄취소 처리됩니다.</div></li>
                            <li><div className="flex md:flex-row flex-col">이외에 모든 문의 사항은 깔루아 카카오톡을 이용해주시기 바랍니다. </div></li>
                        </ol>
                    </div>
                </div>
            </Background>
        </div>
    );
}