import React, { useState } from "react";

function Navbar() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  function handleClick() {
    setIsMenuHidden(!isMenuHidden);
  }
  return (
    <nav className="bg-white">
      <div className="max-w-6xl">
        <ul className="hidden md:flex grid-flow-cols  justify-evenly font-normal leading-4 text-sm">
          <li>
            <a href="#" className="text-[#101828] hover:underline">
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
              className="text-[#101828] hover:underline flex flex-row"
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

        <div className="md:hidden">
          <button className="mobile-menu-button" onClick={handleClick}>
            <svg
              class=" w-6 h-6 text-gray-500 hover:text-green-500 "
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className={`mobile-menu ${isMenuHidden ? "hidden" : ""}`}>
            Hello world
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
