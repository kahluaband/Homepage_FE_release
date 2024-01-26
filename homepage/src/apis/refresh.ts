import axios from "axios";

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem("access");
  const refreshToken = localStorage.getItem("refresh");

  const res = await axios.post(
    "https://kahluaband.com/users/token/refresh/",
    {
      refreshToken,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return res.data;
};
