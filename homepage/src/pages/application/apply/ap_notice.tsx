import Image from "next/image";
import divider from "/public/assets/images/recruit/divider_medium.svg";

export default function ApplicationNotice(){
    return(
        <div className="flex flex-col justify-center items-center py-10">
            <Image src={divider} alt="notice" width={75} className="w-[50px] h-[11px] s:w-[75px] s:h-[17px]"/>
            <p className="font-Gotham text-2xl s:text-[32px] mt-4 font-bold">지원하기</p>
            <p className="text-xs s:text-sm mt-8 text-center">
                아 우리는~ 깔❗️깔❗️깔❗️깔루아~‼️<br/>
                안녕하세요 24학번 새내기 여러분🤩<br/>
                저희는 홍익대학교 컴퓨터공학과 최강 비주얼 밴드 동아리 깔루아입니다~!!<br/><br/>
                <span className="text-ocean">지원 기간은 3월 15일 금요일</span>까지입니다.<br/><br/>
                악기를 다뤄본 적이 없어도 열정만 있다면 모두 지원 가능하니 많이많이 지원해주세요!<br/>
                * 보컬 지원자는 지원 후 개별 연락을 받으신 뒤 3/15(금)까지 영상을 보내주셔야 합니다!<br/><br/>
                <span className="text-ocean">면접은 3월 18일 월요일 오후</span>에 진행합니다.<br/><br/>
                * 구체적인 면접 일정은 지원 마감 후 개별적으로 공지 드리겠습니다!<br/>
                * 면접이라고 해서 거창한 것이 아니라 새내기 여러분 얼굴 한 번씩 익히고 같이 이야기 하는 시간입니다!<br/>
                부담 가지지 마시고 지원하세요!!
            </p>
        </div>
    )
}