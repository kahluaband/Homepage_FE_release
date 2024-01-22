import React, { useEffect, useState } from "react";
import Image from "next/image";
import btDown from "/public/assets/images/performance/bt_down.svg";
import btUp from "/public/assets/images/performance/bt_up.svg";
import All from "./All";
import Background from "@/app/components/Background";
import divider from "/public/assets/images/performance/divider_medium.svg";
import styles from "./index.module.css";
import playIcon from "/public/assets/images/performance/ic_play.svg";

require("dotenv").config();

const thumbnails = [
  "/assets/images/performance/thumbnail1.jpg",
  "/assets/images/performance/thumbnail2.jpg",
  "/assets/images/performance/thumbnail3.jpg",
  "/assets/images/performance/thumbnail4.jpg",
  "/assets/images/performance/thumbnail5.jpg",
  "/assets/images/performance/thumbnail6.jpg",
  "/assets/images/performance/thumbnail7.jpg",
  "/assets/images/performance/thumbnail8.jpg",
  "/assets/images/performance/thumbnail9.jpg",
  "/assets/images/performance/thumbnail10.jpg",
  "/assets/images/performance/thumbnail11.jpg",
  "/assets/images/performance/thumbnail12.jpg",
  "/assets/images/performance/thumbnail13.jpg",
];

export default function Performance() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("ALL");

  const yearArr1 = ["ALL", "2023", "2022", "2019"];
  const yearArr2 = ["2018", "2017", "2016"];

  const [colorPickerVisible1, setColorPickerVisible1] = useState([
    true,
    false,
    false,
    false,
  ]);
  const [colorPickerVisible2, setColorPickerVisible2] = useState(
    yearArr2.slice().map(() => false)
  );

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const openHandler = () => {
      if (isOpen === false) {
        setIsOpen(false);
      }
    };
  }, [isOpen]);

  const yearHandler = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <div
      className={`${
        selectedYear === "ALL"
          ? "h-[5800px] sm:h-[2800px] l:h-[2200px] tiny:h-[5400px]"
          : "h-[1300px] year2:h-[2500px] year5:h-[2000px]"
      }  flex items-center justify-center `}
    >
      <Background>
        <div className="font-['pretendard']">
          <div className="flex flex-col justify-center items-center mt-[4rem] mb-[16rem]">
            <Image
              src={divider}
              alt="divider"
              className="w-[50px] h-[11px] sm:w-[75px] sm:h-[17px]"
            />
            <p className="text-center font-bold text-2xl mt-[16px] mb-[48px]">
              정기 공연 및 연합 공연 영상
            </p>

            <div
              className={`${
                isOpen ? "h-[120px]" : "h-[60px]"
              } flex relative flex-wrap w-[620px] rounded-[10px] mb-[96px] bg-[#EEEEEE] z-0
              year1:w-[540px] year2:w-[500px] year3:w-[460px] year4:w-[440px] year5:w-[420px] year6:w-[388px] year7:w-[360px] year8:w-[348px]`}
            >
              {yearArr1.map((year, index) => {
                return (
                  <button
                    className={
                      `flex justify-center items-center min-w-[140px] h-[60px] font-bold text-lg text-black cursor-pointer z-10 rounded-[10px]
                      year1:min-w-[120px] year2:min-w-[110px] year3:min-w-[100px] year4:min-w-[95px] year5:min-w-[90px] year6:text-[16px] year6:min-w-[82px] year7:min-w-[76px] year8:min-w-[72px]` +
                      (colorPickerVisible1[index] && " bg-[#281CFF] text-white")
                    }
                    key={index}
                    onClick={() => {
                      yearHandler(year);
                      setColorPickerVisible2(yearArr2.slice().map(() => false));
                      const newVisible = yearArr1.slice().map(() => false);
                      if (newVisible[index] === false) {
                        newVisible[index] = !newVisible[index];
                      }
                      setColorPickerVisible1(newVisible);
                    }}
                  >
                    {year}
                  </button>
                );
              })}
              <button
                className="flex justify-center items-center min-w-[48px] h-[60px] cursor-pointer z-0"
                onClick={openMenu}
              >
                <Image
                  src={isOpen ? btUp : btDown}
                  alt="arrow-icon"
                  id="arrow"
                  width={26}
                  height={12}
                  className="year4:w-[24px] year4:h-[11px] year7:w-[20px] year7:h-[10px]"
                />
              </button>
              {yearArr2.map((year, index) => {
                return (
                  <button
                    className={
                      `${
                        isOpen ? "flex" : "hidden"
                      } justify-center items-center min-w-[140px] h-[60px] font-bold text-lg text-black cursor-pointer z-10 rounded-[10px]
                      year1:min-w-[120px] year2:min-w-[110px] year3:min-w-[100px] year4:min-w-[95px] year5:min-w-[90px] year6:text-[16px] year6:min-w-[82px] year7:min-w-[76px] year8:min-w-[72px]` +
                      (colorPickerVisible2[index] && " bg-[#281CFF] text-white")
                    }
                    key={index}
                    onClick={() => {
                      yearHandler(year);
                      setColorPickerVisible1(yearArr1.slice().map(() => false));
                      const newVisible = yearArr2.slice().map(() => false);
                      newVisible[index] = !newVisible[index];
                      setColorPickerVisible2(newVisible);
                    }}
                  >
                    {year}
                  </button>
                );
              })}
            </div>

            <>
              <div className="grid gap-[64px] place-items-center px-[3rem] grid-cols-1 sm:grid-cols-2 m:grid-cols-3">
                {selectedYear === "ALL" && <All />}
                {selectedYear === "2023" && (
                  <>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuvOWc_mlR5d5eC3EnYZPiH"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[0]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2023.03.06 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row mt-[0.5rem]">
                          <p className={styles.subText}># 스물다섯 스물하나</p>
                          <p className={styles.subText}># 데이식스</p>
                          <p className={styles.subText}># 잔나비</p>
                          <p className={styles.subText}># YB 밴드</p>
                          <p className={styles.subText}># 백예린</p>
                          <p className={styles.subText}># 미도와 파라솔</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9Luus1TGr0V9kNhXqSRJJbJkTW"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[1]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2023.01.28 새해맞이 공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># Last Christmas</p>
                          <p className={styles.subText}># 너드커넥션</p>
                          <p className={styles.subText}># 쏜애플</p>
                          <p className={styles.subText}>
                            # Can&apos;t take my eyes off you
                          </p>
                          <p className={styles.subText}># Radiohead</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedYear === "2022" && (
                  <>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9Luusvf1KLF90v1FQBAOejv8_g"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[2]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2022.09.01 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># The Volunteers</p>
                          <p className={styles.subText}># 사건의 지평선</p>
                          <p className={styles.subText}># (여자)-아이들</p>
                          <p className={styles.subText}># Sk8er Boy</p>
                          <p className={styles.subText}># Muse</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuutWQhQJW-c1j1_rkFdwsRYt"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[3]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2022.03.07 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 윤하</p>
                          <p className={styles.subText}># Reality</p>
                          <p className={styles.subText}># 새소년</p>
                          <p className={styles.subText}>
                            # Champagne Supernova
                          </p>
                          <p className={styles.subText}># 비와 당신</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedYear === "2019" && (
                  <>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9Luuuq168b0ZO6X0bE5p5W8LbX"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[4]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2019.09 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 박하사탕</p>
                          <p className={styles.subText}># Basket Case</p>
                          <p className={styles.subText}># 크라잉넛</p>
                          <p className={styles.subText}>
                            # Wake Up When September Ends
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9Luusva097pGe_sxwVQ5LwBeLN"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[5]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2019.06 깔루아&고스락 연합공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 그의 바다</p>
                          <p className={styles.subText}># This Love</p>
                          <p className={styles.subText}># 아이유</p>
                          <p className={styles.subText}># 로맨틱펀치</p>
                          <p className={styles.subText}># Triptych</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuutTG8UD9hNIWbv_F3JotPS-"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[6]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2019.03 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}>
                            # 나에게로 떠나는 여행
                          </p>
                          <p className={styles.subText}># Hysteria</p>
                          <p className={styles.subText}># 브로큰발렌타인</p>
                          <p className={styles.subText}>
                            # Time Is Running Out
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedYear === "2018" && (
                  <>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuuvV3XHuq5t_xgpziwANqfau"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[7]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2018.09 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 델리스파이스</p>
                          <p className={styles.subText}># 자우림</p>
                          <p className={styles.subText}>
                            # Don&apos;t Look Back In Anger
                          </p>
                          <p className={styles.subText}># Radiohead</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedYear === "2017" && (
                  <>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuIldOPyDdJ-G84HM2zGYR5"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[8]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2017.11 문화제
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 쏜애플</p>
                          <p className={styles.subText}># 시퍼런 봄</p>
                          <p className={styles.subText}>
                            # 우리의 밤은 당신의 낮보다 아름답다
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuutEF-XP649aTv4I8xTaaNKd"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[9]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2017.09 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 봄이 오면</p>
                          <p className={styles.subText}># 빅뱅</p>
                          <p className={styles.subText}># 낙화</p>
                          <p className={styles.subText}>
                            # 뜨거운 여름은 가고 남은 건 볼품없지만
                          </p>
                          <p className={styles.subText}># Radiohead</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9Luuv5NBskT0N_LHOGiPNET16p"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[10]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2017.05 공학인의 밤
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># 장기하와 얼굴들</p>
                          <p className={styles.subText}># 암실</p>
                          <p className={styles.subText}># 살아있는 너의 밤</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.gridItem}
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuHdbZ3r2wiFAIXYSHmHNBx"
                        )
                      }
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src={thumbnails[11]}
                          alt="thumbnail"
                          width={0}
                          height={0}
                          layout="fill"
                        />
                        <Image
                          src={playIcon}
                          alt="playIcon"
                          className={styles.playicon}
                        />
                      </div>
                      <div
                        className="w-full pt-[1rem]"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <h3 className="text-[20px] font-bold">
                          2017.03 정기공연
                        </h3>
                        <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                          <p className={styles.subText}># Butterfly</p>
                          <p className={styles.subText}># 아틀란티스 소녀</p>
                          <p className={styles.subText}># Hooka</p>
                          <p className={styles.subText}>
                            # Almost is never Enough
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {selectedYear === "2016" && (
                  <div
                    className={styles.gridItem}
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/playlist?list=PLLmJk1z9LuuuyEwS6WeHKNWWnsAGjwV3c"
                      )
                    }
                  >
                    <div className={styles.thumbnail}>
                      <Image
                        src={thumbnails[12]}
                        alt="thumbnail"
                        width={0}
                        height={0}
                        layout="fill"
                      />
                      <Image
                        src={playIcon}
                        alt="playIcon"
                        className={styles.playicon}
                      />
                    </div>
                    <div
                      className="w-full pt-[1rem]"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <h3 className="text-[20px] font-bold">
                        2016.09 정기공연
                      </h3>
                      <div className="flex flex-wrap flex-row  mt-[0.5rem]">
                        <p className={styles.subText}># 검정치마</p>
                        <p className={styles.subText}># 버스커 버스커</p>
                        <p className={styles.subText}># Starlight</p>
                        <p className={styles.subText}># 우리 지금 만나</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          </div>
        </div>
      </Background>
    </div>
  );
}
