import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Carousel = ({ bannerImg }) => {
  console.log('輪播牆', bannerImg[0].Picture && "123", bannerImg)
  console.log(false || "123");
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerImg &&

          bannerImg.map((v) => {
            return (
              <SwiperSlide>
                <img src={v.Picture.PictureUrl1
                  || '/Images/Logo-desktop.svg'} alt="" />
                <p className="name">
                  <span>
                    {v.Address ? v.Address.substr(0, 3) : ""}
                  </span>
                  <span>{v.ScenicSpotName || ''}</span>
                </p>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </>
  )
}

export default Carousel