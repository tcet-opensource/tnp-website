import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

interface SuperStarPerformer {
  img: string;
  batch: number;
  name: string;
  company: string;
  branch: string;
  package: string;
}

const superStarPerformers = [
  {
    img: "/Students/avatar.webp",
    batch: 2022,
    name: "GHADGE SAYALI",
    company: "MuSigma",
    branch: "COMP",
    package: "30 LPA",
  },
  {
    img: "/Students/avatar.webp",
    batch: 2022,
    name: "SINGH ANIKET",
    company: "JP Morgan Chase & Co.",
    branch: "IT",
    package: "14 LPA",
  },
  {
    img: "/Students/avatar.webp",
    batch: 2021,
    name: "PURANIK ANUSHKA",
    company: "MuSigma",
    branch: "IT",
    package: "30 LPA",
  },
  {
    img: "/Students/avatar.webp",
    batch: 2020,
    name: "JHA AAKASH",
    company: "MuSigma",
    branch: " ",
    package: "21 LPA",
  },
  {
    img: "/Students/avatar.webp",
    batch: 2020,
    name: "BHAT VISHAL",
    company: "MuSigma",
    branch: "",
    package: "21 LPA",
  },
  {
    img: "/Students/avatar.webp",
    batch: 2019,
    name: "AWASTHI ANAY",
    company: "MuSigma",
    branch: "COMP",
    package: "21 LPA",
  },
  {
    img: "/Students/avatar.webp",
    batch: 2019,
    name: "Akshay Singh",
    company: "MuSigma",
    branch: "E&TC",
    package: "10 LPA",
  },
];

const SuperStarPerformers = () => {
  const Cards = superStarPerformers.map(
    (superStarPerformer: SuperStarPerformer) => {
      return (
        <SwiperSlide key={superStarPerformer.name}>
          <div className="text-sans bg-slate-50 p-4 border-1 rounded-xl border">
            {/* <!-- Image  --> */}
            <div className="min-w-full">
              <img
                className="rounded-lg w-full h-40 object-cover"
                src={superStarPerformer.img}
                alt="Super Star Performer Photo"
              />
            </div>

            {/* <!-- Batch  --> */}
            <div className="mt-2">
              <span className="text-sm font-medium px-2 py-1 rounded-full bg-gray-200 text-gray-700">
                {superStarPerformer.batch}
              </span>
            </div>

            {/* <!-- Name  --> */}
            <div className="mt-1">
              <span className="text-lg font-semibold text-gray-900">
                {superStarPerformer.name}
              </span>
            </div>

            {/* <!-- Company  --> */}
            <div>
              <span className="text-base font-normal text-gray-600">
                @{superStarPerformer.company}
              </span>
            </div>

            {/* <!-- Branch  --> */}
            <div>
              <span className="text-base font-normal text-gray-600">
                {superStarPerformer.branch}
              </span>
            </div>

            {/* <!-- Package --> */}
            <div className="text-center rounded-lg bg-gray-200 mt-1 p-2">
              <span className="text-lg font-semibold text-gray-900">
                {superStarPerformer.package}
              </span>
            </div>
          </div>
        </SwiperSlide>
      );
    }
  );

  return (
    // <!-- Content  -->
    <div className="mt-4">
      <Swiper
        className="w-full  mb-6"
        // install Swiper modules
        modules={[Navigation, FreeMode, A11y]}
        freeMode={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
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
        {Cards}
        <div className="swiper-prev flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
        </div>
        <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-right.svg" alt="next-image-btn" />
        </div>
      </Swiper>
    </div>
    // </div>
  );
};

export default SuperStarPerformers;
