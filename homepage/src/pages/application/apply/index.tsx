import Background from "@/app/components/Background";
import ApplicationNotice from "./ap_notice";
import Caution from "./caution";
import Form from "./form";

export default function Recruit() {
    return (
        <div className="h-[4800px] x:h-[4500px] s:h-[4000px] font-pretendard flex flex-col justify-center items-center content-center">
            <Background>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-3/4">
                        <ApplicationNotice/>
                        <Caution/>
                        <Form/>
                    </div>
                </div>
            </Background>
        </div>
    )
}