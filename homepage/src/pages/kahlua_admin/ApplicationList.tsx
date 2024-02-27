import React, {useEffect, useState} from "react";
import AppItem from "./ApplicationItem";
import axios from "axios";
import { access } from "fs";
import { getAuthAxios } from "@/apis/authAxios";
import { StringifyOptions } from "querystring";

//통신이 안돼서 값 잘 보이는지, 레이아웃 잘 되는지 확인용 샘플
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

const AppList = (session: any) => {

    const access = localStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const [applications, setApplications] = useState<any[]>([]);
    const [num, setNum] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = session === "전체" ? "" : `&session = ${session}`;
                const response = await authAxios.get(
                    `https://api.kahluaband.com/kahlua_admin/application/apply_forms?first_preference=${session}`,{
                    } //query params에서 first_preference를 각 세션으로 설정해서 해당 세션을 1지망으로 선택한 지원서 디비를 받아옴
                );
                setApplications(response.data.apply_forms);
                console.log(applications);
            } catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    },[session]);

    if (loading) {
        return <div>대기 중 ...</div>;
    }

    if (!applications) {
        return null;
    }

    //디비 정보를 appitem에 application으로 넣어서 appitem에서 화면에 출력 
    return (
        <>
            {applications.map((application) => (
                <AppItem key={application.id} application={application}/>
            ))}
        </>
    );
}

export default AppList;