import logo from "/public/assets/images/admin/admin_logo.svg";
import Image from "next/image";
import React, { useState } from "react";
import { login } from "@/apis/login";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const router = useRouter();

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPwHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const onLoginHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const res = await login(email, password);
    const { access, refresh } = res;
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    router.push("/kahlua_admin");
  };

  return (
    <div className="font-pretendard w-full h-screen flex justify-center items-center py-10">
      <div className="w-[300px] md:w-[540px] lg:w-[780px] h-auto bg-gray p-10">
        <Image
          src={logo}
          alt="admin-logo"
          className="w-[250px] h-[30px] my-[40px] ml-4"
        />
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label style={{ display: "none" }}>이메일</label>
          <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={onEmailHandler}
            required
            className="w-full h-[74px] mt-[40px] mb-[60px] pl-[30px] rounded-[10px]"
          />
          <label style={{ display: "none" }}>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPwHandler}
            required
            className="w-full h-[74px] mb-[90px] pl-[30px] rounded-[10px]"
          />
          <button
            // onClick={onLoginHandler}
            className="w-full md:w-[214px] h-[60px] bg-btnGray text-white text-xl font-bold rounded-[10px]"
            onClick={onLoginHandler}
          >
            관리자 로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
