import Image from "next/image";
import React from "react";
import logo from "/public/assets/images/admin/admin_logo.svg";
import { Router, useRouter } from "next/router";
import { logout } from "@/apis/logout";

const AdminHeader = () => {
  const router = useRouter();

  const onLogoutHandler = async () => {
    logout();
    router.push("/login");
  };

  const logoutConfirm = () => {
    const message = window.confirm("로그아웃 하시겠습니까?");

    if (message) {
      onLogoutHandler();
    } else {
    }
  };

  return (
    <div className="w-full bg-white mt-[28px] mb-[26px] px-[24px] sm:px-[40px] md:px-[100px] lg:px-[180px] flex justify-between">
      <Image src={logo} alt="admin_logo" className="h-[24px] sm:h-[32px] w-auto" height={32} onClick={() => location.reload()} />
      <button
        className="rounded-[10px] bg-black text-white text-xs sm:text-base px-[12px] py-[4px]"
        onClick={logoutConfirm}
      >
        <p>로그아웃</p>
      </button>
    </div>
  );
};

export default AdminHeader;
