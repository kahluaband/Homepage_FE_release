import Image from "next/image"
import divider from "/public/assets/images/recruit/divider_medium.svg";
import person1 from "/public/assets/images/recruit/person1.png"
import person2 from "/public/assets/images/recruit/person2.png"
import person3 from "/public/assets/images/recruit/person3.png"
import person4 from "/public/assets/images/recruit/person4.png"

export default function FAQ(){
    return(
        //TODO: width 740px이하인 경우 반응형 추가
        <div className="s:pb-16">
            <div className="w-full flex flex-col justify-center items-center">
                <Image src={divider} alt="notice" className="w-[50px] h-[11px] md:w-[75px] md:h-[17px]"/>
                <p className="font-Gotham text-2xl sm:text-3xl md:text-5xl mt-4 mb-6 font-bold">FAQ</p>
            </div>

            <div dir="rtl" className="py-8 px-8 pt-8 sm:px-16 md:pt-24 lg:px-64 flex flex-row items-center">
                <Image src={person1} alt="질문자" className="hidden s:inline -mx-16 z-40 -mt-8"/>
                <p className="hidden m:inline w-64 h-64 rounded-[100%] z-10 bg-[#F1F5FF] -ml-[72px] -mr-44 -mt-24"/>
                <div dir="ltr" className="bg-ocean w-full sm:w-[352px] h-auto sm:h-20 flex items-center rounded-3xl md:ps-8 text-[#EEEEEE] text-sm z-20 mt-2 p-4">
                    다룰 줄 아는 악기가 없지만 깔루아에 들어가고 싶어요.<br/>
                    깔루아에 지원해도 될까요?
                </div>
            </div>

            <div dir="ltr" className="px-8 sm:px-20  lg:px-64 flex flex-row items-center">
                <Image src={person2} alt="답변자" className="hidden s:inline -mx-20 z-40 -mt-8 " width={240}/>
                <p className="hidden m:inline w-64 h-64 rounded-[100%] z-10 bg-[#F1F5FF] -ml-52 -mr-8 s:-mt-24"/>
                <div dir="ltr" className="bg-[#EEEEEE] w-full sm:w-[512px] h-auto sm:h-28 flex items-center rounded-3xl md:ps-6 text-sm z-20 p-4">
                    저는 드럼이라는 걸 대학 와서 처음 만져봤는데요.<br/>
                    선배들, 동기들이 붙잡고 가르쳐줘서 이제 혼자서도 척척 합주 연습을 할 수 있답니다!<br/>
                    선배들이 처음부터 친절하게 가르쳐주니 전혀 걱정 마세요!<br/>
                    악기를 안 다뤄본 동기들도 많아요!
                </div>
            </div>
            
            <div dir="rtl" className="px-8 sm:px-16 md:pt-8 lg:px-64 flex flex-row items-center">
                <Image src={person3} alt="질문자" className="hidden s:inline -mx-16 z-40 -mt-8 " width={200}/>
                <p className="hidden m:inline w-64 h-64 rounded-[100%] z-10 bg-[#F1F5FF] -ml-16 -mr-48 -mt-16"/>
                <div dir="ltr" className="bg-ocean w-full sm:w-[380px] md:w-[476px] h-auto s:h-12 flex items-center rounded-3xl s:ps-8 mt-12 text-[#EEEEEE] text-sm z-20 p-4">
                    저는 자율 전공인데 컴퓨터 공학과 소속 동아리인 깔루아에 들어갈 수 있나요?
                </div>
            </div>

            <div dir="ltr" className="px-8 sm:px-20 lg:px-64 flex flex-row items-center">
                <Image src={person4} alt="답변자" className="hidden s:inline -mx-20 z-40 -mt-16" width={240}/>
                <p className="hidden m:inline w-64 h-64 rounded-[100%] z-10 bg-[#F1F5FF] -ml-56 -mr-6 mt-0"/>
                <div dir="ltr" className="bg-[#EEEEEE] w-full sm:w-[360px] h-auto md:h-20 flex items-center rounded-3xl md:ps-6 mt-8 md:mt-4 text-sm z-20 p-4">
                    네! 저도 자율전공이랍니다.<br/>
                    “컴퓨터 공학과에 진입할 예정” 이라면 전혀 상관 없어요!
                </div>
            </div>
        </div>
    )
}