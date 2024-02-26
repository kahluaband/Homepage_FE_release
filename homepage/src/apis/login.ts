import axios from "axios";

export const login = async (email: string, password: string) => {
  const res = await axios.post("https://api.kahluaband.com/users/login/", {
    headers: {
      withCredentials: true,
      "Content-Type": "application/json",
    },
    email,
    password,
  });
  return res.data.data;
};
