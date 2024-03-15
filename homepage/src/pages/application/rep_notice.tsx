import Image from "next/image";
import band from "/public/assets/images/recruit/band.svg";
import band1 from "/public/assets/images/recruit/band1.png";
import Link from "next/link";

export default function RepNotice() {
    return (
        <>
        <div className="w-full py-3 flex flex-col justify-center items-center">
            <Image src={band1} alt="KAHLUA" className="absolute w-full h-[600px] x:h-[740px] object-cover brightness-50"/>
            <div className="h-[600px] x:h-[740px] z-10 w-full flex flex-col justify-center items-center">
                <p className="font-Salvar text-6xl x:text-7xl s:text-8xl m:text-9xl text-center text-[#FFFFFF]">
                    KAHLUA
                </p>
                <p className=" font-GothamItalic text-center font-bold text-2xl x:text-3xl s:text-4xl m:text-5xl mt-10 text-[#FFFFFF]">
                    23rd MEMBER<br/>RECUIRMENT
                </p>
                <p className="text-center text-sm mt-6 text-[#FFFFFF]">
                    모집기간 : 2024.01.19(금) ~ 2024.03.15(금)
                    <br/>
                    면접날짜 : 2024.03.18(월)
                </p>
                <button className="flex justify-center items-center h-[64px] w-[260px] x:w-1/2 rounded-[300px] bg-[#B9B9B9] mt-14 text-xl x:text-2xl font-semibold text-[#FFFFFF] cursor-not-allowed">
                    KAHLUA 23기 지원 마감
                </button>

            </div>
        </div>
        </>
    )
}