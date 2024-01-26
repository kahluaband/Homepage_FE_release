import axios from "axios";

export const login = async (email: string, password: string) => {
  const res = await axios.post("https://kahluaband.com/users/login/", {
    email,
    password,
  });
  return res.data.data;
};
