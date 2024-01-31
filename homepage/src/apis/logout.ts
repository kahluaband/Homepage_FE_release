// import { getAuthAxios } from "./authAxios";

// export const logout = (email: string, password: string) => {
//   const access = localStorage.getItem("access");
//   const authAxios = getAuthAxios(access);
//   const res = authAxios.post("/users/logout", {
//     email,
//     password,
//   });
//   localStorage.removeItem("access");
//   localStorage.removeItem("refresh");
//   return res;
// };

export const logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};
