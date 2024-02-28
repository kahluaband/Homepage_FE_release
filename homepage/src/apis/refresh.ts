import axios from "axios";

export const getNewRefreshToken = async () => {
  const res = await axios.post(
    "https://api.kahluaband.com/users/token/refresh/",
    {
      refreshToken: localStorage.getItem("refresh"),
    }
  );
  return res;
};
