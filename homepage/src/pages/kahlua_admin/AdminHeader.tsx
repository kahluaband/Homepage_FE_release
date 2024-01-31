import Image from "next/image";
import React from "react";
import logo from "/public/assets/images/admin/admin_logo.svg";
import { Router, useRouter } from "next/router";
import { logout } from "@/apis/logout";

const AdminHeader = () => {
  const router = useRouter();

  const onLogoutHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    logout();
    router.push("/login");
  };

  return (
    <div className="w-full bg-white pl-[166px] mt-[28px] mb-[26px] flex justify-between">
      <Image src={logo} alt="admin_logo" height={26} />
      <button
        className="mr-[180px] rounded-[10px] bg-black text-white px-[12px] py-[4px]"
        onClick={onLogoutHandler}
      >
        <p>로그아웃</p>
      </button>
    </div>
  );
};

export default AdminHeader;
