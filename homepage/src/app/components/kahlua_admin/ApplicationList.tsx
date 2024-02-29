import React, { useEffect, useState } from "react";
import AppItem from "./ApplicationItem";
import { getAuthAxios } from "@/apis/authAxios";

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

interface AppListProps {
  session: string;
}

const AppList: React.FC<AppListProps> = ({session}) => {
  const access = localStorage.getItem("access");
  const authAxios = getAuthAxios(access);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const query = session === "전체" ? "" : `?first_preference=${session}`;
        const response = await authAxios.get(
          `https://api.kahluaband.com/kahlua_admin/application/apply_forms${query}`
          // query params에서 first_preference를 각 세션으로 설정해서 해당 세션을 1지망으로 선택한 지원서 디비를 받아옴
        );
        setApplications(response.data.data.apply_forms);
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
