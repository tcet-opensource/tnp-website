import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
} from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import type { imageLink } from "../../../env";

const Hero:React.FC<{
  heroSlideObj: imageLink[]
}> = ({heroSlideObj}) => {
  // const heroSlideObj = [
  //   {
  //     studentImg: "EventPage.png",
  //   },
  //   {
  //     studentImg: "EventPage.png",
  //   },
  //   {
  //     studentImg: "EventPage.png",
  //   },
  //   {
  //     studentImg: "EventPage.png",
  //   },
  //   {
  //     studentImg: "EventPage.png",
  //   },
  //   {
  //     studentImg: "EventPage.png",
  //   },
  //   {
  //     studentImg: "EventPage.png",
  //   },
  // ];

  const heroSlide = heroSlideObj.map((data) => {
    return (
      <SwiperSlide>
        <img
          src={`/EventsPage/${data.img}`}
          className="object-cover h-full w-full"
          alt={data.alt}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className="h-auto xl:w-[540px] lg:w-[480px] md:w-full border rounded-lg xl:rounded-xl "
      // install Swiper modules
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
      }}
      spaceBetween={30}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {heroSlide}
    </Swiper>
  );
};

export default Hero;
