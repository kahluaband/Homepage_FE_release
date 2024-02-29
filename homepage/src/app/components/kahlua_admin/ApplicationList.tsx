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
  const [count, setCount] = useState();
  
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
        setCount(response.data.data.total_member);
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
    <div className="whitespace-nowrap overflow-auto flex flex-col">
      {/*리스트 보는 스크린 내에서 좌우 스크롤 생기도록*/}
      {
        <>
          {/*리스트 상단에 고정으로 나오는 항목들 */}
          <div className="flex flex-row px-10 py-4 gap-4">
            <p className="flex justify-center items-center p-4 w-[140px] h-8 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
              23기 지원자 정보
            </p>
            <p className="flex justify-center items-center p-4 w-[80px] h-8 rounded-[24px] bg-[#D9D9D9] text-center text-base text-black">
              총 {count} 명
            </p>
          </div>

          <li className="flex flex-row h-16 w-[3292px] bg-[#D9D9D9] px-4 items-center text-center">
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
            <p className="flex justify-center items-center w-[600px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              지원 세션의 경력과 지원 이유
            </p>
            <p className="flex justify-center items-center w-[600px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              깔루아 지원 동기
            </p>
            <p className="flex justify-center items-center w-[600px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              다룰 줄 아는 악기
            </p>
            <p className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              수업 끝나는 시간
            </p>
            <p className="flex justify-center items-center w-[120px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              뒷풀이 참여
            </p>
            <p className="flex justify-center items-center w-[400px] h-full bg-[#D9D9D9] text-base font-bold p-2">
              각오 한마디
            </p>
          </li>

          {/*리스트는 applist로 받아옴 */}
          <>
            {applications.map((application) => (
              <AppItem key={application.id} application={application} />
            ))}
          </>
        </>
      }
    </div>
  );
};

export default AppList;
