import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AllAppList = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone_num, setPhoneNum] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [major, setMajor] = useState("");
  const [first_preference, setFirst_preference] = useState("");
  const [second_preference, setSecond_preference] = useState("");
  const [reason, setReason] = useState("");
  const [instrument, setInstrument] = useState("");
  const [motive, setMotive] = useState("");
  const [finish_time, setFinishtime] = useState("");
  const [meeting, setMeeting] = useState(true);
  const [readiness, setReadiness] = useState("");
  const { id } = router.query;
  const [appID, setID] = useState("");
  const [apps, setApps] = useState([]);


useEffect(() => {
    const fetchReservationData = async () => {
        try {
          const response = await axios.get(
            `https://api.kahluaband.com/kahlua_admin/application/apply_forms/`,
          );
          if (response.status === 200) {
            setID(response.data.data.id);
            setName(response.data.data.name);
            setPhoneNum(response.data.data.phone_num);
            setBirthdate(response.data.data.birthdate);
            setGender(response.data.data.birthdate);
            setAddress(response.data.data.address);
            setFirst_preference(response.data.data.first_preference);
            setSecond_preference(response.data.data.second_preference);
            setInstrument(response.data.data.play_instrument);
            setMotive(response.data.data.motive);
          } 
          else {
          }
        } catch (error) {}
      };
    fetchReservationData();
  }, [appID]);
  
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

      <div className="flex flex-row h-16 w-[1712px] bg-[#D9D9D9] px-4 items-center text-center">
        <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          이름
        </li>
        <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          성별
        </li>
        <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          생년월일
        </li>
        <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          전화번호
        </li>
        <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          학과
        </li>
        <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          거주지
        </li>
        <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          1지망 선택
        </li>
        <li className="flex justify-center items-center w-[100px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          2지망 선택
        </li>
        <li className="flex justify-center items-center w-[220px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          지원 세션의 경력과 지원 이유
        </li>
        <li className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          깔루아 지원 동기
        </li>
        <li className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          다룰 줄 아는 악기
        </li>
        <li className="flex justify-center items-center w-[140px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          수업 끝나는 시간
        </li>
        <li className="flex justify-center items-center w-[120px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          뒷풀이 참여
        </li>
        <li className="flex justify-center items-center w-[120px] h-full bg-[#D9D9D9] text-base font-bold p-2">
          각오 한마디
        </li>
      </div>
      
      {/* <ApplicationList apps={apps}/> */}

      <div className="flex flex-row h-16 w-[1712px] px-4 items-center text-center">
        <li className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
          {name}
        </li>
        <li className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
          {gender}
        </li>
        <li className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
          {birthdate}
        </li>
        <li className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
          {phone_num}
        </li>
        <li className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
          학과
        </li>
        <li className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
          {address}
        </li>
        <li className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
          {first_preference}
        </li>
        <li className="flex justify-center items-center w-[100px] h-full text-base font-bold p-2">
          {second_preference}
        </li>
        <li className="flex justify-center items-center w-[220px] h-full text-base font-bold p-2">
          지원 세션의 경력과 지원 이유
        </li>
        <li className="flex justify-center items-center w-[140px] h-full text-base font-bold p-2">
          {motive}
        </li>
        <li className="flex justify-center items-center w-[140px] h-full text-base font-bold p-2">
          {instrument}
        </li>
        <li className="flex justify-center items-center w-[140px] h-full text-base font-bold p-2">
          수업 끝나는 시간
        </li>
        <li className="flex justify-center items-center w-[120px] h-full text-base font-bold p-2">
          뒷풀이 참여
        </li>
        <li className="flex justify-center items-center w-[120px] h-full text-base font-bold p-2">
          각오 한마디
        </li>
      </div>

      </>}
    </div>
  );
};

export default AllAppList;

// const ApplicationList = (props) => {
//   return(
//     <div>
//       {props.apps.map(app => (
//         <Application key={app.id} app={app}/>
//       ))}
//     </div>
//   );
// }

// const Application = (props) => {
//   return(
//     <div>
//       {props.app.}
//     </div>
//   )
// }