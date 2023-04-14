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
      studentImg: DummyImg,
      studentName: "Student 1",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: DummyImg,
      studentName: "Student 2",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: DummyImg,
      studentName: "Student 3",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: DummyImg,
      studentName: "Student 4",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: DummyImg,
      studentName: "Student 5",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: DummyImg,
      studentName: "Student 6",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: DummyImg,
      studentName: "Student 7",
      companyName: "Company",
      salary: "20 Lakhs",
    },
  ];

  const mappedSlides = slideObj.map((data) => {
    return (
      <SwiperSlide className="border-[1px] rounded-lg p-1 m-0 mb-9 mx-2">
        <div className="p-3">
          <img
            src={`../../public/TopPlacedStudent/${data.studentImg}`}
            alt={data.studentName}
          />
        </div>
        <div className="px-3 pb-3 text-[18px]">{data.studentName}</div>
        <div className="px-3 text-[16px]">{data.companyName}</div>
        <div className="bg-[#F4F4F7] m-3 p-3 rounded-lg">
          <div className="text-[14px]">per annum</div>
          <div className="text-[18px] font-semibold">{data.salary}</div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <Swiper
        className="h-auto w-full"
        // install Swiper modules
        modules={[Navigation, FreeMode, A11y]}
        freeMode={true}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
          disabledClass: "swiper-button-disabled",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
