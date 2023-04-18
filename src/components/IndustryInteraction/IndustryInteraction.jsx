import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

function IndustryInteraction() {
  const IndustryInteractionHeaderData = [
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
      <div className="w-full m-4 flex xl:flex-row md:flex-row flex-col">
        <div className="z-50 h-full mt-10 xl:w-1/2 md:w-1/2 sm:w-full p-3">
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
        <div className="absolute bg-gray-400 w-96 h-96 z-40 -left-14 top-25 rounded-full flex justify-center bg-gradient-to-l from-gray-100 to-white">
          <div className="bg-white w-72 h-72 rounded-full mt-12"></div>
        </div>
        <div className="z-50 w-full flex justify-center align-middle flex-col xl:flex-row">
          {IndustryInteractionHeaderData.map((data, i) => (
            <div
              key={i}
              className={`border-2 h-fit border-${
                data.themeColor
              }-400 rounded-2xl p-4 bg-${
                data.themeColor
              }-100 m-6 xl:w-1/4 sm:w-full ${
                i % 2 != 0 ? "xl:mt-24 md:mt-24 sm:mt-6" : ""
              }`}
            >
              <img src={data.companyLogo} className="rounded-full w-12" />
              <p className="font-title mb-3 mt-3 ">{data.companyName}</p>
              <p className="text-gray-500 font-light text-sm">
                {data.description}
              </p>
              <button
                className={`w-full bg-white rounded-lg p-2 mt-4 hover:bg-${data.themeColor}-500 hover:text-white`}
              >
                Read More ↓
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        {IndustryInteractionData.map((data,i) => (
          <div
            className={`w-full m-4 h-fit bg-${
              data.themeColor
            }-100 p-10 rounded-xl  xl:flex ${
              data.imageLeftAlign
                ? "xl:flex-row-reverse md:flex-row-reverse"
                : "xl:flex-row md:flex-row"
            } sm:flex-col`}
            key={i}
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