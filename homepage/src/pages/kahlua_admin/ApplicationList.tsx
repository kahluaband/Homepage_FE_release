import React, {useEffect, useState} from "react";
import AppItem from "./ApplicationItem";
import axios from "axios";
import { access } from "fs";
import { getAuthAxios } from "@/apis/authAxios";
import { StringifyOptions } from "querystring";

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
                    }
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

    return (
        <>
            {applications.map((application) => (
                <AppItem key={application.id} application={application}/>
            ))}
        </>
    );
}

export default AppList;