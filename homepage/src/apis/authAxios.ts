import axios, { InternalAxiosRequestConfig } from "axios";
import { getNewRefreshToken } from "./refresh";
import { useRouter } from "next/router";

export const getAuthAxios = (access: string | null) => {
  const router = useRouter();
  const token = access;

  // authAxios로 보내는 모든 요청의 헤더에 access token이 포함됨
  const authAxios = axios.create({
    baseURL: "https://api.kahluaband.com/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // 응답 인터셉터
  authAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    // 요청 실패 시
    async (error) => {
      const {
        config,
        response: { status },
      } = error;

      if (status === 401) {
        if (error.response.data.message === "Unauthorized") {
          alert("LOGIN ERROR");
          const originRequest = config;
          const response = await getNewRefreshToken();
          if (response.status === 200) {
            console.log(response.data);
            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
            axios.defaults.headers.common.Authorization = access;
            originRequest.headers.Authorization = access;
            return axios(originRequest);
          } else if (response.status === 404) {
            //리프레시 토큰 요청이 실패할때(리프레시 토큰도 만료되었을때 = 재로그인 안내)
            alert("다시 로그인 해주세요");
            router.push("/login");
          } else {
            alert("LOGIN ERROR");
          }
        }
      }
    }
  );
  return authAxios;
};
