import axios from "axios";
import { getNewRefreshToken } from "./refresh";
import { getAuthAxios } from "./authAxios";

// admin page에서 각 함수 호출해서 데이터 가져와야 함

// 어드민 신입생 티켓 데이터 가져오기
// export const getTicketAdmin = async () => {
//   const access = localStorage.getItem("access");
//   const authAxios = getAuthAxios(access);
//   const res = await authAxios.get("/kahlua_admin/tickets/freshman_tickets/");
//   return res.data;
// };

// 어드민 일반 티켓 데이터  가져오기
// export const getApplyAdmin = async () => {
//   const access = localStorage.getItem("access");
//   const authAxios = getAuthAxios(access);
//   const res = await authAxios.get("/kahlua_admin/tickets/general_tickets/");
//   return res.data;
// };

export const getAdminData = async () => {
  const access = localStorage.getItem("access");
  const authAxios = getAuthAxios(access);
  const freshmanTicketsData = (
    await authAxios.get("/kahlua_admin/tickets/freshman_tickets/")
  ).data;

  const generalTicketsData = (
    await authAxios.get("/kahlua_admin/tickets/general_tickets/")
  ).data;

  return { freshmanTicketsData, generalTicketsData };
};
