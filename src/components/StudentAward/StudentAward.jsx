import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
} from "swiper";

const StudentAchivement = "StudentAchievement.jpg";
const Student = "StudentAward.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

const StudentAward = () => {
  const achievementSlideObj = [
    {
      studentImg: StudentAchivement,
      achievementType: "Student Achievement",
      studentName: "Student 1",
      companyName: "Company",
    },
    {
      studentImg: StudentAchivement,
      achievementType: "Student Achievement",
      studentName: "Student 1",
      companyName: "Company",
    },
    {
      studentImg: StudentAchivement,
      achievementType: "Student Achievement",
      studentName: "Student 1",
      companyName: "Company",
    },
    {
      studentImg: StudentAchivement,
      achievementType: "Student Achievement",
      studentName: "Student 1",
      companyName: "Company",
    },
    {
      studentImg: StudentAchivement,
      achievementType: "Student Achievement",
      studentName: "Student 1",
      companyName: "Company",
    },
    {
      studentImg: StudentAchivement,
      achievementType: "Student Achievement",
      studentName: "Student 1",
      companyName: "Company",
    },
    {
      studentImg: StudentAchivement,
      achievementType: "Student Achievement",
      studentName: "Student 1",
      companyName: "Company",
    },
  ];
  const awardSlideObj = [
    {
      studentImg: Student,
      studentName: "Student 1",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: Student,
      studentName: "Student 2",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: Student,
      studentName: "Student 3",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: Student,
      studentName: "Student 4",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: Student,
      studentName: "Student 5",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: Student,
      studentName: "Student 6",
      companyName: "Company",
      salary: "20 Lakhs",
    },
    {
      studentImg: Student,
      studentName: "Student 7",
      companyName: "Company",
      salary: "20 Lakhs",
    },
  ];

  const awardSlides = awardSlideObj.map((data) => {
    return (
      <SwiperSlide>
        <div className="relative h-[280px] -z-20 bg-[#F8FEFF] pl-[-20px]">
          <div className="absolute -z-10 inset-0 flex ">
            <div className="lg:w-1/2"></div>
            <div className="flex">
              <div class="absolute bg-gradient-to-r z-20 from-[#F8FEFF] to-transparent h-full w-full lg:w-1/2"></div>
            </div>
            <img
              src={`../../public/StudentAward/${data.studentImg}`}
              className="z-0 object-cover h-full w-full lg:w-1/2 "
              alt=""
            />
          </div>

          <div className="text-[30px] z-30  pt-6 lg:pt-12 px-6 font-semibold">Awards</div>
          <div className="text-[#667085] text-[12px] px-6 pb-12 w-[70%]">
            Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
            in scelerisque volutpat fringilla eget sollicitudin rhoncus.
            Dignissim sit odio felis tortor imperdiet eu velit. Bibendum
            bibendum vitae pellentesque ultricies porttitor.
          </div>
        </div>
      </SwiperSlide>
    );
  });

  const achivementSlides = achievementSlideObj.map((data) => {
    return (
      <SwiperSlide>
        <div className="relative -z-20 h-[280px] w-full bg-[#F8FEFF] pl-[-20px]">
          <div className="absolute -z-10 inset-0 ">
            <div className="lg:w-1/2"></div>

            <img
              src={`../../../public/StudentAward/${data.studentImg}`}
              className="z-0 object-cover h-full w-full"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-end h-full w-full">
            <div className="text-[10px] z-30 w-fit mx-6 p-[3px] rounded-full  bg-[#FFFFFF]">
              {data.achievementType}
            </div>
            <div className="text-[#FFFFFF] font-semibold mb-6 mx-6 text-[12px]">
              Massa elementum mi sed magnis orci tristique turpis. Quam at vitae
              in scelerisque volutpat fringilla eget sollicitudin rhoncus.
              Dignissim sit odio felis tortor imperdiet eu velit. Bibendum
              bibendum vitae pellentesque ultricies porttitor.
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="my-4 px-8 flex flex-wrap">
      {/* left section */}

      <Swiper
        className="h-auto w-full lg:w-[48%] border-[1px] rounded-lg"
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
        className="h-auto w-full lg:w-[48%] border-[1px] rounded-lg mt-4 lg:mt-0"
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {achivementSlides}
      </Swiper>
    </div>
  );
};

export default StudentAward