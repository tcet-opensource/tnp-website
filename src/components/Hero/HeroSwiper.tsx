import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const HeroSwiper = ({ data }: { data: string[] }) => {
  return (
    <>
      <Swiper

        autoplay={{
          delay: 2500,
        }}
        slidesPerView={1}
        // added breakpoints to swiper. mobile one photo, tablet 2 photos
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          1720: {
            slidesPerView: 3,
          }
        }}
        spaceBetween={50}
        loop={true}
        modules={[Autoplay]}
        className="rounded-xl"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {data.map((d) => (
          <SwiperSlide key={d} >
            {/* changed widths on breakpoints */}
            {/* moved images to Hero folder */}
            <img className="w-full md:w-3/4 lg:w-max mx-auto" src={`/Hero/${d}`} alt="image" 
            width={844} height={448} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSwiper;
