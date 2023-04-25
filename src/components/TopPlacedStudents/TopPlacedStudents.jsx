import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper";

const DummyImg = "TopPlacedDummy.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

const TopPlaceStudents = () => {
  const slideObj = [
    {
      studentImg: "TopPlacedDummy.jpg",
      studentName: "Jayesh Potlabattini",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: "TopPlacedDummy.jpg",
      studentName: "Gaurang Vishwakarma",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: "TopPlacedDummy.jpg",
      studentName: "Student 3 Student 3",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: "TopPlacedDummy.jpg",
      studentName: "Student 4 Student 4",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: "TopPlacedDummy.jpg",
      studentName: "Student 5 Student 5",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: "TopPlacedDummy.jpg",
      studentName: "Student 6 Student 6",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: "TopPlacedDummy.jpg",
      studentName: "Student 7 Student 7",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: "TopPlacedDummy.jpg",
      studentName: "Student 7 Student 7",
      companyName: "Company",
      salary: "20 Lakhs",
    },
  ];

  const mappedSlides = slideObj.map((data) => {
    return (
      <SwiperSlide key={data.studentName} className="border  rounded-lg  ">
        <div className="h-72 p-3  flex flex-col justify-between">
          <div className="space-y-2">
            <div className="min-w-full">
              <img
                src={`/TopPlacedStudent/${data.studentImg}`}
                alt={data.studentName}
              />
            </div>
            <div className=" font-semibold text-lg">{data.studentName}</div>
            <div className=" text-base ">{data.companyName}</div>
          </div>
          <div className="bg-[#F4F4F7]  p-3 rounded-lg mb-2   ">
            <div className="text-sm text-slate-600  ">per annum</div>
            <div className="text-lg font-semibold text-slate-900">
              {data.salary}
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <Swiper
        className="w-full  mb-6"
        // install Swiper modules
        modules={[Navigation, FreeMode, A11y]}
        freeMode={true}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          420: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
          disabledClass: "swiper-button-disabled",
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {mappedSlides}
        <div className="swiper-prev flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
        </div>
        <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-right.svg" alt="next-image-btn" />
        </div>
      </Swiper>
    </div>
  );
};

export default TopPlaceStudents;
