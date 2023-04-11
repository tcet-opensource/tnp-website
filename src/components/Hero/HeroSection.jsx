import React from "react";
import CountUp from "react-countup";
import GridWrapper from "./GridWrapper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <>
      {/* Text of the HeroSection */}
      <div className="flex" style={{ display: isMobile ? "grid" : "flex" }}>
        <div className="p-10" style={{ width: isMobile ? "100%" : "50%" }}>
          <button className="flex bg-[#F2F4F7] p-[.5rem] rounded-[19px]">
            <div className="px-3">Visit Our Guidelines</div>
            {/* Svg for arrow in button */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#E4E7EC" />
              <path
                d="M6.16663 12H17.8333M17.8333 12L12 6.16669M17.8333 12L12 17.8334"
                stroke="#101828"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div
            className="bold text-title"
            style={{ fontSize: isTablet ? "2rem" : "2.4rem" }}
          >
            "Unlock Your Career Potential with Training And Placement Cell -
            Where Dreams Meet Opportunities!"
          </div>
        </div>
        <div
          className="w-[50%] p-10 justify-between flex flex-col"
          style={{ width: isMobile ? "100%" : "50%" }}
        >
          <div
            className="text-[#475467] leading-[28px] tracking-wider"
            style={{ fontSize: isTablet ? "1rem" : "18px" }}
          >
            The Training and Placement department serves as a bridge between the
            academic environment and the industry by establishing connections
            with various companies and organizations. The ultimate aim of the
            T&P department is to ensure that students are well-prepared for the
            job market and have access to the resources they need to achieve
            their career goals.
          </div>
          <button
            className="my-6 p-3 rounded-2xl"
            style={{ border: "2px solid #E5E5E5" }}
          >
            View More
          </button>
        </div>
      </div>

      {/* Numbers and text inside it */}
      <div className="justify-evenly" style={{ display: isTablet ? "grid" : "flex" }}>
        <div className="ml-6" style={{ maxWidth: isTablet ? "100%" : "40%" }}>
          <GridWrapper columns={2}>
            <div
              className="max-w-[180px] p-4 m-3 rounded-2xl"
              style={{ border: "2px solid #E5E5E5" }}
            >
              {" "}
              <div className="text-title text-2xl">
                <CountUp start={0} end={852} />+{" "}
              </div>
              <div className="">Number of students placed</div>
            </div>
            <div
              className="max-w-[180px] p-4 m-3 rounded-2xl"
              style={{ border: "2px solid #E5E5E5" }}
            >
              {" "}
              <div className="text-title text-2xl">
                <CountUp start={0} end={7400} />+{" "}
              </div>
              <div className="">Number of companies visited</div>
            </div>
          </GridWrapper>
          <GridWrapper columns={2}>
            <div
              className="max-w-[180px] p-4 m-3 rounded-2xl"
              style={{ border: "2px solid #E5E5E5" }}
            >
              {" "}
              <div className="text-title text-2xl">
                <CountUp start={0} end={7400} />+{" "}
              </div>
              <div className="">Students with 10+ LPA packages</div>
            </div>
            <div
              className="max-w-[180px] p-4 m-3 rounded-2xl"
              style={{ border: "2px solid #E5E5E5" }}
            >
              {" "}
              <div className="text-title text-2xl">
                <CountUp start={0} end={7400} />+{" "}
              </div>
              <div className="">Number of companies that come to TCET</div>
            </div>
          </GridWrapper>
        </div>

        {/* Swiper/ Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          style={{ maxWidth: isTablet ? "100%" : "40%", margin: "1rem" }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="/images/swiperImage1.png"
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="/images/swiperImage1.png"
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="/images/swiperImage1.png"
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="/images/swiperImage1.png"
              alt="image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroSection;
