import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

function IndustryInteraction() {
  const IndustryInteractionData = [
    {
      companyLogo:
        "https://jobs.vibhaga.com/wp-content/uploads/2018/07/infosys-logo.jpg",
      companyName: "Infosys",
      themeColor: "blue",
      description:
        "The Training and Placement department serves as a bridge between the academic environment and the industry by establishing connections with various companies and organisations. The ultimate aim of the T&P department is to ensure that students are well prepared for the job market and have access to the resources they need to achieve their career goals.",
      eventImages: [
        "https://i0.wp.com/www.blogs.hss.ed.ac.uk/pubs-and-publications/files/2018/04/conference-meeting-seminar.jpg?w=1352",
        "https://mk0blogcolonialjxv0v.kinstacdn.com/wp-content/uploads/2020/07/meeting.jpg",
      ],
      imageLeftAlign: false,
    },
    {
      companyLogo:
        "https://i1.wp.com/www.itvoice.in/wp-content/uploads/2016/12/Reliance_Jio_Logo_October_2015.png?ssl=1",
      companyName: "Jio",
      themeColor: "red",
      description:
        "The Training and Placement department serves as a bridge between the academic environment and the industry by establishing connections with various companies and organisations. The ultimate aim of the T&P department is to ensure that students are well prepared for the job market and have access to the resources they need to achieve their career goals.",
      eventImages: [
        "https://mk0blogcolonialjxv0v.kinstacdn.com/wp-content/uploads/2020/07/meeting.jpg",
        "https://i0.wp.com/www.blogs.hss.ed.ac.uk/pubs-and-publications/files/2018/04/conference-meeting-seminar.jpg?w=1352",
      ],
      imageLeftAlign: true,
    },
  ];
  return (
    <div>
      <div className="h-screen w-full m-4 flex">
        <div className="w-2/4 h-full mt-10">
          <p className="text-4xl font-title mb-4">Industry Interaction</p>
          <p>
            The Training and Placement department serves as a bridge between the
            academic environment and the industry by establishing connections
            with various companies and organisations. The ultimate aim of the
            T&P department is to ensure that students are well prepared for the
            job market and have access to the resources they need to achieve
            their career goals.
          </p>
        </div>
        <div className="w-full flex justify-center align-middle">
          <div className="w-1/4 border-2 h-fit border-blue-400 rounded-2xl p-4 bg-blue-100 m-6">
            <img
              src="https://jobs.vibhaga.com/wp-content/uploads/2018/07/infosys-logo.jpg"
              className="rounded-full w-12"
            />
            <p className="font-title mb-3 mt-3 ">Infosys</p>
            <p className="text-gray-500 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehender
            </p>
            <button className="w-full bg-white rounded-lg p-2 mt-4 hover:bg-blue-400 hover:text-white">
              Read More ↓
            </button>
          </div>
          <div className="w-1/4 border-2 h-fit border-red-400 rounded-2xl p-4 bg-red-100 m-6 mt-24">
            <img
              src="https://jobs.vibhaga.com/wp-content/uploads/2018/07/infosys-logo.jpg"
              className="rounded-full w-12"
            />
            <p className="font-title mb-3 mt-3 ">Infosys</p>
            <p className="text-gray-500 font-light ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehender
            </p>
            <button className="w-full bg-white rounded-lg p-2 mt-4 hover:bg-blue-400 hover:text-white">
              Read More ↓
            </button>
          </div>
          
        </div>
      </div>
      <div>
        {IndustryInteractionData.map((data) => (
          <div
            className={`w-full m-4 h-fit bg-${
              data.themeColor
            }-100 p-10 rounded-xl  xl:flex ${
              data.imageLeftAlign
                ? "xl:flex-row-reverse md:flex-row-reverse"
                : "xl:flex-row md:flex-row"
            } sm:flex-col`}
          >
            <div
              className={`flex flex-col h-full mb-4 align-middle p-5 ${
                data.imageLeftAlign ? "xl:ml-6 md:ml-6" : "xl:ml-0 md:ml-0"
              } sm:ml-0 xl:w-1/2 md:1/2 sm:w-full`}
            >
              <img
                className="rounded-full w-12 mb-4 mt-4"
                src={data.companyLogo}
              />
              <p className="text-3xl font-title mb-4">
                {data.companyName} Industry Interaction
              </p>
              <p className="xl:w-4/5 md:w-4/5 sm:w-full">{data.description}</p>
            </div>
            <div className="h-full flex justify-center align-middle xl:w-1/2 md:1/2 sm:w-full">
              <div className="w-full h-fit">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  style={{ "--swiper-pagination-color": "#344054" }}
                >
                  {data.eventImages.map((imgLink) => (
                    <SwiperSlide>
                      <div className="w-full mb-10 mt-4">
                        <img
                          className="rounded-xl  w-full object-contain"
                          src={imgLink}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustryInteraction;
