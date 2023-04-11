import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import type { TestimonialType } from "../../env";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TestimonialSwiper: React.FC<{
  data: TestimonialType[];
}> = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((testimonial) => (
        <SwiperSlide key={testimonial.name} >
          <Testi
            info={testimonial.info}
            photo={testimonial.photo}
            name={testimonial.name}
            position={testimonial.position}
          />
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
      <div className="swiper-pagination" />
    </Swiper>
  );
};

const Testi = (props: TestimonialType) => {
  //   console.log(props.photo);
  return (
    <div className="bg-gradient-to-tr from-white bg-[#F6F9FB] rounded-xl p-5 flex xl:h-80 flex-col items-center  font-sans relative">
      <div className="absolute bottom-8 left-8 hidden md:block ">
        <img src="/misc/testi.svg" className="h-30 " />
      </div>
      <div className=" text-lg px-5 text-center">{props.info}</div>
      <div className="rounded-full mt-auto pt-2 ">
        <img src={"/Testimonials/" + props.photo} className="rounded-full w-20" />
      </div>
      <div className="font-bold">{props.name}</div>
      <div className="text-sm text-gray-500 mb-4">{props.position}</div>
    </div>
  );
};

export default TestimonialSwiper;
