import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
const images = [
  "/assets/images/about/play1.jpg",
  "/assets/images/about/play2.jpg",
  "/assets/images/about/play3.jpg",
  "/assets/images/about/play4.jpg",
  "/assets/images/about/play5.jpg",
  "/assets/images/about/play6.jpg",
  "/assets/images/about/play7.jpg",
  "/assets/images/about/play8.jpg",
  "/assets/images/about/play9.jpg",
  "/assets/images/about/play10.jpg",
  "/assets/images/about/play11.jpg",
  "/assets/images/about/play12.jpg",
  "/assets/images/about/play13.jpg",
  "/assets/images/about/play14.jpg",
];
export default function ImageSlider3() {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="text-sm font-bold"># MT</p>
          <Image
            src={images[0]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># MT</p>
          <Image
            src={images[1]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 20&21&22기 MT</p>
          <Image
            src={images[2]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># MT</p>
          <Image
            src={images[3]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 크리스마스는 깔루아와</p>
          <Image
            src={images[4]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 한강 피크닉</p>
          <Image
            src={images[5]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 롯데월드</p>
          <Image
            src={images[6]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 바다 여행</p>
          <Image
            src={images[7]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># 한강 피크닉</p>
          <Image
            src={images[8]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># K동 앞에서</p>
          <Image
            src={images[9]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># MT</p>
          <Image
            src={images[10]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># K동 앞에서</p>
          <Image
            src={images[11]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># MT</p>
          <Image
            src={images[12]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-sm font-bold"># MT</p>
          <Image
            src={images[13]}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "0.5rem",
              borderRadius: "30px",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
