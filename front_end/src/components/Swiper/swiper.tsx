import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import Link from "next/link";

const posterData = [
  {
    image: "./images/m1.jpeg",
    title: "Store",
  },

  {
    image: "./images/m2.jpeg",
    title: "Food",
  },
  {
    image: "./images/m3.jpeg",
    title: "Blog",
  },
  {
    image: "./images/m4.jpeg",
    title: "Fitness",
  },
];

const SwiperSection = () => {
  return (
    <div className="container mx-auto pt-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          2100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        className="mySwiper"
      >
        {posterData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                background:
                  "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
              }}
              className="w-full h-96 p-10 rounded-md text-white text-3xl pt-20"
            >
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSection;
