import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";

import "swiper/css";

const data = [
  {
    caption: "Massa elementum mi sed magnis",
    imgLink: "student-workshop.png",
  },
  {
    caption: "Massa elementum mi sed magnis",
    imgLink: "student-workshop.png",
  },
];

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        prevEl: ".swiper-prev",
        nextEl: ".swiper-next",
        disabledClass: "swiper-button-disabled",
      }}
      className="h-full relative"
    >
      {data.map((d) => (
        <SwiperSlide className="relative">
          <img
            src={"/TrainingHero/" + d.imgLink}
            alt="student-workshop"
            className="h-full w-auto object-cover rounded-xl"
          />
          <p className="absolute z-10 left-4 bottom-4 text-white font-bold">
            {d.caption}
          </p>
          <div className="absolute bottom-0 left-0 h-12 rounded-br-xl rounded-bl-xl w-full bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0.8),rgba(0,0,0,0))] opacity-40"></div>
        </SwiperSlide>
      ))}

      <div className="swiper-prev flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
        <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
      </div>
      <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
        <img src="/misc/chevron-right.svg" alt="next-image-btn" />
      </div>
    </Swiper>
  );
};
