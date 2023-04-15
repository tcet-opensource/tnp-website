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

function Testimonial({ data }) {
  const TestiSlide = data.map((data) => {
    return (
      <SwiperSlide
        className=" h-auto border-none rounded-lg xl:rounded-xl"
        style={{
          background:
            "radial-gradient(61.56% 85.33% at 50% 100%, rgba(212, 185, 255, 0.7) 0%, rgba(241, 232, 255, 0.3) 100%)",
        }}
      >
        <div className="flex flex-col items-center text-center p-8">
          <div className="absolute bottom-28 left-8 hidden md:block ">
            <img src="../../../../public/misc/purpleTesti.svg" className="h-30 " />
          </div>
          <p className="mb-8 text-lg text-slate-800">{data.review}</p>
          <img
            src={`${data.photo}`}
            className="object-cover h-20 w-20 rounded-full"
            alt=""
          />
          <div className="bg-white py-[3px] px-[8px] mt-4 mb-1 rounded-full">
            {data.position}
          </div>
          <div className="my-1 ">
            {data.name}
          </div>
          <div className="font-extralight">
            {data.department}
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <Swiper
        className="h-auto my-7"
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
        }}
        // pagination={{
        //     dynamicBullets: true,
        //   }}
        pagination={{ clickable: true }}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {TestiSlide}
        <div className="m-10"></div>
        <style>{`
            .swiper-pagination-bullet-active {
              background-color: #344054;
            }
            // .swiper-pagination  {
            //   padding-top: 1rem;
            // }
          `}</style>
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
}

export default Testimonial;
