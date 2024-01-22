import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import mainImg from "/public/assets/images/about/concert3.jpg";

export default function Main() {
  // 소개하기 메인 이미지 및 소개글
  return (
    <div className="relative bg-cover mt-[12px]">
      <Image
        src={mainImg}
        alt="about-main-image"
        width={0}
        height={0}
        sizes="100vw"
        className={styles.mainImg}
      />
      <div className={styles.mainDiv}>
        <p className={styles.mainText}>
          아 우리는 <br /> 깔 깔 깔 깔루아 !
        </p>
        <p className={styles.subText}>
          깔루아는
          <br />
          2003년부터 지금까지 21년의 전통을 이어오고 있는
          <br />
          홍익대학교 컴퓨터공학과 밴드학회입니다.
        </p>
        <p
          //   className="font-GothamItalic w-full h-fit text-white absolute bottom-0 left-1/2 text-center translate-x-[-50%] translate-y-[30%]
          // tiny:text-[40px] year5:text-[60px] text-[80px] s:text-[120px] sx:text-[100px]"
          className={styles.aboutText}
        >
          ABOUT US
        </p>
      </div>
    </div>
  );
}
