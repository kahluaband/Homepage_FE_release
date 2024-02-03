import React, {useEffect, useState} from "react";
import AppItem from "./ApplicationInfo";
import axios from "axios";
import { access } from "fs";
import { getAuthAxios } from "@/apis/authAxios";

const sampleApplication = {
    "id": 196,
    "created": "2024-02-03T15:54:56.401973Z",
    "updated": "2024-02-03T15:54:56.402027Z",
    "name": "afds",
    "phone_num": "af",
    "birthdate": "afs",
    "gender": "남성",
    "address": "sdf",
    "major": "컴퓨터공학과",
    "first_preference": "보컬",
    "second_preference": "보컬",
    "experience_and_reason": "sdf",
    "play_instrument": "sdf",
    "motive": "sfd",
    "finish_time": "sdf",
    "meeting": true,
    "readiness": "sdf",
    "count": 1
}

const AppList = () => {

    // const access = localStorage.getItem("access");
    // const authAxios = getAuthAxios(access);
    // const [applications, setApplications] = useState<any[]>([]);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await authAxios.get(
    //                 `https://api.kahluaband.com/kahlua_admin/application/apply_forms/`,{
    //                 }
    //             );
    //             setApplications(response.data.apply_forms)
    //             console.log(applications);
    //         } catch(error){
    //             console.log(error);
    //         }
    //         setLoading(false);
    //     }
    //     fetchData();
    // },[]);

    // if (loading) {
    //     return <div>대기 중 ...</div>;
    // }

    // if (!applications) {
    //     return null;
    // }

    // return (
    //     <div>
    //         {applications.map((application) => (
    //             <AppItem key={application.id} application={application}/>
    //         ))}
    //     </div>
    // );

    return (

        <div className="whitespace-nowrap overflow-auto flex flex-col">
            {<>
                <div className="flex flex-row w-full px-10 py-4 gap-4">
                    <p className="flex justify-center items-center w-[140px] h-8 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
                        23기 지원자 정보
                    </p>
                    <p className="flex justify-center items-center w-[80px] h-8 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
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
                
                <AppItem application={sampleApplication}/>
            </>}
        </div>

    );
}

export default AppList;