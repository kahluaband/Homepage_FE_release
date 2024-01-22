import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import ImageSlider1 from "./ImageSlider1";
import ImageSlider2 from "./ImageSlider2";
import ImageSlider3 from "./ImageSlider3";
import Background from "@/app/components/Background";
import divider from "/public/assets/images/about/divider_medium.svg";
import Main from "./Main";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <Background>
        <div className="font-pretendard">
          <div className="flex flex-col justify-center items-center">
            <Main />
            <Image
              src={divider}
              alt="divider"
              className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px] mt-[80px]"
            />
            <p className={styles.divideText}>ACTIVITIES</p>
            <p className={styles.detailText}>
              매주 월요일은 깔요일 !<br />
              매주 월요일에는 깔루아 정기 회의 및 뒷풀이가 있는 날입니다.
              <br />
              정기 모임 외에도 또 어떤 활동들을 할까요?
            </p>
            <div className={styles.imgContainer}>
              <ImageSlider1 />
            </div>
            <p className={styles.detailText}>
              밴드의 꽃은 바로 공연!
              <br />
              깔루아는 매년 3월과 9월 정기 공연을 열고 있습니다.
              <br />
              이 외에도 학교 축제, 컴퓨터공학과 축제 등 무대만 있다면 달려가
              다양한 공연을 하고 있습니다.
              <br />
              공연 전 한두달간 수십번의 합주를 하며 팀워크를 다지고, 공연
              직전에는 런스루와 리허설도 진행합니다.
              <br />
              누군가 연주를 시작하면 하나둘씩 소리를 더해가며 곡을 완성해내는
              것이 밴드학회만의 낭만이랍니다.
            </p>
            <div className={styles.imgContainer}>
              <ImageSlider2 />
            </div>
            <p className={styles.detailText}>
              7월에는 깔루아의 창립일을 기념하는 창립제, 12월에는 다함께 연말을
              마무리하는 송년회가 열립니다.
              <br />
              1기부터 활동기수까지 선후배가 함께 모여 네트워킹을 할 수 있는
              행사입니다.
              <br />
              이렇게 많은 선배들, 동기들, 후배들을 사귈 수 있는 것이 깔루아의
              자랑 중 하나입니다.
            </p>
            <div className={styles.imgContainer}>
              <ImageSlider3 />
            </div>
            <p className={styles.detailText}>
              이 외에도 친목을 다질 수 있는 MT, 바다 여행, 놀이공원 등의 활동과
              <br />
              한강 산책, 보드게임 카페, 술자리, 맛집 탐방 등 일상을 함께하는
              다양한 모임들이 있습니다.
              <br />
              이렇게 많은 시간을 함께 보내는 만큼 깔루아는 가족보다 더 가족같은
              사이랍니다.
            </p>
          </div>
        </div>
      </Background>
    </div>
  );
}
