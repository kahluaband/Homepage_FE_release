import axios from "axios";

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem("access");
  const refreshToken = localStorage.getItem("refresh");

  const res = await axios.post(
    "https://api.kahluaband.com/users/token/refresh/",
    {
      refreshToken,
    },
    {
      withCredentials: true,
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return res.data;
};
