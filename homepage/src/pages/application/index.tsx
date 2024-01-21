import Background from "@/app/components/Background";
import FAQ from "./FAQ";
import Notice from "./notice";
import RepNotice from "./rep_notice";

export default function Recruit() {
    return (
        <div className="m:h-[3200px] s:h-[3600px] x:h-[3100px] h-[3100px] flex items-center justify-center ">
            <Background>
            <div className="font-pretendard">
                <RepNotice/>
                <Notice/>
                <FAQ/>
            </div>
            </Background>
        </div>
    )
}