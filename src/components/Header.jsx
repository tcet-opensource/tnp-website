import React from "react";

const Header = () => {
  return (
    <div className="flex text-[Inter]">
      <div className="w-[50%] p-10">
        <button className="flex bg-[#F2F4F7] p-[.5rem] rounded-[19px]">
          <div className="px-3">Visit Our Guidelines</div>
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
          className="text-[42px] bold"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          "Unlock Your Career Potential with Training And Placement Cell - Where
          Dreams Meet Opportunities!"
        </div>
      </div>
      <div className="w-[50%] p-10">
        <div
          style="color: #475467"
          className="text-[18px] leading-[28px] tracking-wider"
        >
          The Training and Placement department serves as a bridge between the
          academic environment and the industry by establishing connections with
          various companies and organizations. The ultimate aim of the T&P
          department is to ensure that students are well-prepared for the job
          market and have access to the resources they need to achieve their
          career goals.
        </div>
            <button className="my-6 p-3 rounded-xl" style={{border: '2px solid #E5E5E5'}}>View More</button>
      </div>
    </div>
  );
};

export default Header;
