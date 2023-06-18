import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, A11y, Autoplay } from "swiper";

import type {  imageLink } from "../../env";
import "swiper/css";
import "swiper/css/pagination";

const IndustryInteractionSwiper: React.FC<{
  data: imageLink[];
}> = ({ data }) => {
  return (
    <Swiper
      modules={[  A11y, Autoplay]}
      autoplay={{
        delay: 2500,
      }}
      spaceBetween={50}
      slidesPerView={1}
      // pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {data.map((d) => (
        <SwiperSlide key={d.alt}>
          <span className="w-full h-[130%] block" >

          <img src={d.img} alt={d.alt} width={600} height={400} className="w-full
          aspect-video object-cover rounded-2xl
          " />
          </span>
        </SwiperSlide>
      ))}
      <style>{`
            .swiper-pagination-bullet-active {
              background-color: #344054;
            }
            // .swiper-pagination  {
            //   padding-top: 1rem;
            // }
          `}</style>
      {/* <div className="swiper-pagination" /> */}
    </Swiper>
  );
};

export default IndustryInteractionSwiper;
