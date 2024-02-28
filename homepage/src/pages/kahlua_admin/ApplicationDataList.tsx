import React from "react";
import axios from "axios";
import AppList from "./ApplicationList";

const ApplicationDataList = (session: any) => {
  return (
    <div className="whitespace-nowrap overflow-auto flex flex-col">
    {/*리스트 보는 스크린 내에서 좌우 스크롤 생기도록*/}
        {<>
        {/*리스트 상단에 고정으로 나오는 항목들 */}
            <div className="flex flex-row px-10 py-4 gap-4">
                <p className="flex justify-center items-center p-4 w-[140px] h-8 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
                    23기 지원자 정보
                </p>
                <p className="flex justify-center items-center p-4 w-[80px] h-8 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
                    ?명
                </p>
            </div>

            <li className="flex flex-row h-16 w-[1712px] bg-[#D9D9D9] px-4 items-center text-center">
                <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    이름
                </p>
                <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    성별
                </p>
                <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    생년월일
                </p>
                <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    전화번호
                </p>
                <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    학과
                </p>
                <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    거주지
                </p>
                <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    1지망 선택
                </p>
                <p className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    2지망 선택
                </p>
                <p className="flex justify-center items-center w-[220px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    지원 세션의 경력과 지원 이유
                </p>
                <p className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    깔루아 지원 동기
                </p>
                <p className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    다룰 줄 아는 악기
                </p>
                <p className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    수업 끝나는 시간
                </p>
                <p className="flex justify-center items-center w-[120px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    뒷풀이 참여
                </p>
                <p className="flex justify-center items-center w-[120px] h-full bg-[#D9D9D9] text-base font-bold p-2">
                    각오 한마디
                </p>
            </li>
            
            {/*리스트는 applist로 받아옴 */}
            <AppList session={session}/>
        </>}
    </div>
  )
}

export default ApplicationDataList;