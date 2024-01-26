import axios from "axios";
import { getNewRefreshToken } from "./refresh";

export const getAuthAxios = (token: string | null) => {
  // authAxios로 보내는 모든 요청의 헤더에 access token이 포함됨
  const authAxios = axios.create({
    baseURL: "https://kahluaband.com/",
    headers: {
      Authorization: token,
    },
  });

  authAxios.interceptors.response.use(
    (res) => res,
    // 요청 실패 시
    async (error) => {
      if (error.response.status === 401) {
        // 401 일 때 (토큰 만료 시)
        const { access, refresh } = await getNewRefreshToken();
        error.config.headers.Authorization = access;
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        return (await axios.get(error.config.url, error.config)).data;
      }
    }
  );
  return authAxios;
};
