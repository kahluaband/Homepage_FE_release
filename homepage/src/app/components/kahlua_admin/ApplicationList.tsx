import React, { useEffect, useState } from "react";
import AppItem from "./ApplicationItem";
import axios from "axios";
import { access } from "fs";
import { getAuthAxios } from "@/apis/authAxios";
import { StringifyOptions } from "querystring";

const AppList = (session: any) => {
  const access = localStorage.getItem("access");
  const authAxios = getAuthAxios(access);
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = session === "전체" ? "" : `&session= ${session}`;
        const response = await authAxios.get(
          `https://api.kahluaband.com/kahlua_admin/application/apply_forms/?first_preference=${session}`

          // query params에서 first_preference를 각 세션으로 설정해서 해당 세션을 1지망으로 선택한 지원서 디비를 받아옴
        );
        setApplications(response.data.apply_forms);
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
