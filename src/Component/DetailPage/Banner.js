import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export const Banner = ({ imgArr }) => {

  console.log('img', imgArr)
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={imgArr.PictureUrl1} alt="" />
      </SwiperSlide>
    </Swiper>
  )
}
