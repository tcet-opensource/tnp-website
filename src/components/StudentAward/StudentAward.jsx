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

const StudentAward = () => {
  const achievementSlideObj = [
    {
        awardId: 1,
        awardImg: "about-slider-4.jpg",
        caption: `Falicitation of Riya Vishwakarma for being placed in Amazon with 40.00CTC package.`,
        achievementType: "Student Achievement",
    },
    {
        awardId: 2,
        awardImg: "about-slider-2.jpg",
        caption: `Our proud students taking part in science exhibition.`,
        achievementType: "Student Achievement"
    },
    {
        awardId: 3,
        awardImg: "about-slider-3.jpg",
        caption: `Congratulating all our students placed with high packages.`,
        achievementType: "Student Achievement"
    },
];
  const awardSlideObj = [
    {
        "eventId": 1,
        "awardImg": "multicon.jpg",
        "awardName": "Multicon 2023",
        "caption": `
MULTICON-W is an initiative of Thakur College of
Engineering and Technology (TCET). This platform is created with the objective of inculcating the Research
culture in the Higher and Technical Educational Institutes, where UG and PG programs are evaluated by the
accrediting bodies like NBA and NAAC in which research contribution is the major parameter to evaluate the
R&D activities
        `
    },
    {
        "eventId": 2,
        "awardImg": "zephyr.jpg",
        "awardName": "Zephyr 2023",
        "caption": "Technical Festival was organized to enhance the technical skills as well as managerial skill which will enhance the overall skill of the student through various platforms with the keen vision that further it would help in the augmentation of name, fame, and growth of the institute."
    },
    {
        "eventId": 3,
        "awardImg": "sojourn.jpg",
        "awardName": "Sojourn 2023",
        "caption": "The annual cultural festival Sojourn is one of the most awaited events at the college campus. Sojourn is a thoroughfare along which the engineering students are able to unveil their talent on the much isolated turf of performing arts. This is an event where students take a brief time off their busy schedule and strive hard to acclaim proficiency in the field of performing arts."
    },
]

  const awardSlides = awardSlideObj.map((data) => {
    return (
      <SwiperSlide key={data.awardName} >
        <div className="relative h-full  bg-[#F8FEFF] ">
          <div className="absolute  top-0 left-0 inset-0 flex  ">
            <img
              src={`/TcetAwards/${data.awardImg}`}
              className="object-cover h-full w-3/5 lg:w-1/2  ml-auto"
              alt={data.awardName}
            />
            <div className=" bg-gradient-to-r  from-[#F8FEFF] absolute left-[40%] lg:left-[50%]  to-30% to-transparent h-full w-full "></div>
          </div>
          <div className="relative py-12 lg:py-16   px-6 xl:px-14 space-y-2">
            <div className="text-2xl xl:text-3xl   font-semibold">{data.awardName}</div>
            <div className="text-slate-600 text-xs lg:text-sm 2xl:text-base w-[70%]">
              {data.caption}
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  const achivementSlides = achievementSlideObj.map((data) => {
    return (
      <SwiperSlide key={data.caption}>
        <div className="relative h-full  bg-[#F8FEFF]">
          <div className="absolute  top-0 left-0 inset-0 flex  ">
          <div className="absolute bg-gradient-to-b  from-transparent via-transparent to-[#000000bf] h-full w-full "></div>

            <img
              src={`/StudentAward/${data.awardImg}`}
              className="object-cover h-full w-full"
              alt={data.caption}
            />
          </div>
          <div className="relative pt-20 lg:pt-32 xl:pt-40 2xl:pt-52 pb-6  px-6 xl:px-8 space-y-2">
            <div className="text-xs xl:text-sm bg-white rounded-full w-max px-2 py-px">
              {data.achievementType}
            </div>
            <div className="text-white text-xs  lg:text-sm 2xl:text-base ">
              {data.caption}
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className=" gap-4 flex flex-col md:flex-row">
      {/* left section */}

      <Swiper
        className=" h-auto w-full lg:w-[48%] border rounded-lg xl:rounded-xl"
        // install Swiper modules
        modules={[Navigation, A11y, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
          disabledClass: "swiper-button-disabled",
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {awardSlides}
        <div className="swiper-prev flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
        </div>
        <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-right.svg" alt="next-image-btn" />
        </div>
      </Swiper>

      {/* right section */}

      <Swiper
        className=" h-auto w-full lg:w-[48%] border rounded-lg xl:rounded-xl "
        // install Swiper modules
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
          disabledClass: "swiper-button-disabled",
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {achivementSlides}
      </Swiper>
    </div>
  );
};

export default StudentAward;
