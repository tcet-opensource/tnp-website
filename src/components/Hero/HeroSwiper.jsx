import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const HeroSwiper = () => {
  return (
    <>
      {" "}
      <Swiper
        spaceBetween={50}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
        className="max-lg:max-w-[100%] max-w-[40%] m-4"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img className="w-full" src="/images/swiperImage1.png" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/images/swiperImage1.png" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/images/swiperImage1.png" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/images/swiperImage1.png" alt="image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSwiper;
