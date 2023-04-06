import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import pfp from "../../public/pfp-pixelated.png";

interface Testimonial {
  info: string;
  photo: string;
  name: string;
  position: string;
}

const Testi = (props: Testimonial) => {
  console.log(props.photo);
  return (
    <div className="bg-[#F6F9FB] rounded-xl p-5 flex flex-col items-center h-80">
      <div className="h-32 text-lg">
        {props.info}
      </div>
      <div className="rounded-full">
        <img src={props.photo} className="rounded-full w-20" />
      </div>
      <div className="font-bold">
        {props.name}
      </div>
      <div className="text-sm text-gray-500">
        {props.position}
      </div>
    </div>
  );
};
const Testimonial = () => {
  const studentTestimonials: Array<Testimonial> = [
    {
      info:
        "As I stare out the window, I can see the leaves of the trees rustling in the wind. The sun is setting, freshly cut grass. I take a deep breath and let it out slowly, feeling the tension in my body release. In this moment, everything feels perfect, and I am grateful for the simple joys in life.",
      photo: "../../public/pfp-pixelated.png",
      name: "Rahil",
      position: "badeLog"
    },
    {
      info:
        "casting a warm glow across the sky. I feel a sense of peace and contentment wash over me, as if all my worries have disappeared. The sound of birds chirping fills the air, and I can smell the fragrance of s",
      photo: "../../public/pfp-pixelated.png",
      name: "Sahil",
      position: "badeLog"
    },
    {
      info:
        "freshly cut grass. I take a deep breath and let it out slowly, feeling the tension in my body release. In this moment, everything feels perfect, and I am grateful for the simple joys in life.",
      photo: "../../public/pfp-pixelated.png",
      name: "Aahil",
      position: "badeLog"
    }
  ];

  const companyTestimonial: Array<Testimonial> = [
    {
      info:
        "in the wind. The sun is setting, freshly cut grass. I take a deep breath and let it out slowly, feeling the tension in my body release. In this moment, everything feels perfect, and I am grateful for the simple joys in life.",
      photo: "../../public/pfp-pixelated.png",
      name: "Rahil",
      position: "badeLog"
    },
    {
      info:
        "casting a warm glow across the sky. I feel a sense of peace and contentment wash over me, as if all my worries have disappeared. The sound of birds chirping fills the air, and I can smell the fragrance of s",
      photo: "../../public/pfp-pixelated.png",
      name: "Sahil",
      position: "badeLog"
    },
    {
      info:
        "freshly cut grass. I take a deep breath and let it out slowly, feeling the tension in my body release. In this moment, everything feels perfect, and I am grateful for the simple joys in life.",
      photo: "../../public/pfp-pixelated.png",
      name: "Aahil",
      position: "badeLog"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 px-6 grid-cols-1">
      <div className="flex flex-col gap-3">
        <div className="title text-[#3081F1] bg-[#EFF8FF] text-3xl px-2 py-3 rounded-lg">
          Student Testimonials
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {studentTestimonials.map(testimonial =>
              <SwiperSlide>
                <Testi
                  info={testimonial.info}
                  photo={testimonial.photo}
                  name={testimonial.name}
                  position={testimonial.position}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="title text-[#039855] bg-[#ECFDF3] text-3xl px-2 py-3 rounded-lg">Company Testimonials</div>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {companyTestimonial.map(testimonial =>
              <SwiperSlide>
                <Testi
                  info={testimonial.info}
                  photo={testimonial.photo}
                  name={testimonial.name}
                  position={testimonial.position}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
