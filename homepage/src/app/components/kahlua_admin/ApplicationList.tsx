import React, { useEffect, useState } from "react";
import AppItem from "./ApplicationItem";
import axios from "axios";
import { access } from "fs";
import { getAuthAxios } from "@/apis/authAxios";
import { StringifyOptions } from "querystring";

//통신이 안돼서 값 잘 보이는지, 레이아웃 잘 되는지 확인용 샘플
interface Application {
  id: number;
  created: string;
  updated: string;
  name: string;
  phone_num: string;
  birthdate: string;
  gender: string;
  address: string;
  major: string;
  first_preference: string;
  second_preference: string;
  experience_and_reason: string;
  play_instrument: string;
  motive: string;
  finish_time: string;
  meeting: boolean;
  readiness: string;
  count: number;
};

const AppList = (props: {session: any}) => {
  const {session} = props;
  const access = localStorage.getItem("access");
  const authAxios = getAuthAxios(access);
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const query = session === "전체" ? "" : `&session=${session}`;
        const response = await authAxios.get(
          `https://api.kahluaband.com/kahlua_admin/application/apply_forms`

          // query params에서 first_preference를 각 세션으로 설정해서 해당 세션을 1지망으로 선택한 지원서 디비를 받아옴
        );
        setApplications(response.data.data.apply_forms);
        console.log(applications);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [session]);

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
        <AppItem key={application.id} application={application} />
      ))}
    </>
  );
};

export default AppList;
