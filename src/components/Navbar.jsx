import React, { PureComponent } from "react";

const Navbar = () => {
  return (
    <nav className="bg-white ">
      <div className="flex items-center  px-1 py-3 border-b-[#E4E7EC]">
        <ul className="flex flex-row font-normal font-Inter leading-4 mt-0 mr-6 gap-28 text-sm">
          <li>
            <a href="#" className="pl-7 text-[#101828] hover:underline">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#101828] hover:underline flex flex-row"
            >
              <span>Training</span>
              <svg
                className="w-4 ml-1"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#101828] hover:underline flex flex-row"
            >
              <span>Placement</span>
              <svg
                className="w-4 ml-1"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="text-[#101828] hover:underline">
              Internship
            </a>
          </li>
          <li>
            <a href="#" className="text-[#101828] hover:underline">
              Open Source
            </a>
          </li>
          <li>
            <a href="#" className="text-[#101828] hover:underline">
              Industry Interaction
            </a>
          </li>
          <li>
            <a href="#" className="text-[#101828] hover:underline">
              Guidelines
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#101828] pl-8 hover:underline flex flex-row"
            >
              <span>About Us</span>
              <svg
                className="w-4 ml-1"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
