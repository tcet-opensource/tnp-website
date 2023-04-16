import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

function IndustryInteraction() {
  return (
    <div>
      <div className="w-full m-4 h-fit bg-blue-100 p-10 rounded-xl  xl:flex  xl:flex-row md:flex-row sm:flex-col">
        <div className="flex-0.5 flex flex-col h-full mb-4 align-middle p-5 ">
          <img
            className="rounded-full w-12 mb-4 mt-4"
            src="https://jobs.vibhaga.com/wp-content/uploads/2018/07/infosys-logo.jpg"
          />
          <p className="text-3xl font-title mb-4">
            Infosys Industry Interaction
          </p>
          <p className="xl:w-4/5 md:w-4/5s">
            The Training and Placement department serves as a bridge between the
            academic environment and the industry by establishing connections
            with various companies and organisations. The ultimate aim of the
            T&P department is to ensure that students are well prepared for the
            job market and have access to the resources they need to achieve
            their career goals.
          </p>
        </div>
        <div className="h-full flex justify-center align-middle xl:w-1/2 md:1/2 sm:w-full">
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="w-full mb-10 mt-4">
                  <img
                    className="rounded-xl  w-full object-contain"
                    src="https://live.staticflickr.com/761/23388109362_49c91ba9f6.jpg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full mb-10 mt-4">
                  <img
                    className="rounded-xl  w-full object-contain"
                    src="https://live.staticflickr.com/761/23388109362_49c91ba9f6.jpg"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-full m-4 h-fit bg-red-100 p-10 rounded-xl  xl:flex  xl:flex-row-reverse md:flex-row sm:flex-col">
        <div className="flex flex-col h-full mb-4 align-middle justify-center p-5 xl:ml-6 md:ml-6 sm:ml-0">
          <img
            className="rounded-full w-12 mb-4 mt-4"
            src="https://i1.wp.com/www.itvoice.in/wp-content/uploads/2016/12/Reliance_Jio_Logo_October_2015.png?ssl=1"
          />
          <p className="text-3xl font-title mb-4">
            Jio Industry Interaction
          </p>
          <p className="xl:w-4/5 md:w-4/5">
            The Training and Placement department serves as a bridge between the
            academic environment and the industry by establishing connections
            with various companies and organisations. The ultimate aim of the
            T&P department is to ensure that students are well prepared for the
            job market and have access to the resources they need to achieve
            their career goals.
          </p>
        </div>
        <div className="h-full flex justify-center align-middle xl:w-1/2 md:1/2 sm:w-full">
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="w-full mb-10 mt-4">
                  <img
                    className="rounded-xl  w-full object-contain"
                    src="https://live.staticflickr.com/761/23388109362_49c91ba9f6.jpg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full mb-10 mt-4">
                  <img
                    className="rounded-xl  w-full object-contain"
                    src="https://live.staticflickr.com/761/23388109362_49c91ba9f6.jpg"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryInteraction;
