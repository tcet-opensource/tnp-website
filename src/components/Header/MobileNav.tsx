import { useRef, useState } from "react";
import type { link } from "../../env.d.ts";
import useOnClickOutside  from "../../hooks/useOnClickOutside.ts";
import Accordian from "./Accordian";
const MobileNav: React.FC<{
  primaryLinks: link[];
  secondaryLinks: link[];
}> = ({ primaryLinks, secondaryLinks }) => {
  const [navOpen, setNavOpen] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  useOnClickOutside(ref, () => setNavOpen(false), ref2);
  return (
    <div className="relative" >
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-slate-700 rounded-lg  focus:outline-none"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <span ref={ref2} >

        {!navOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
          </svg>
        ) : (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              />
          </svg>
        )}
        </span>
      </button>
      {navOpen && (
        <aside
          ref={ref}
          className="animate-fadeIn absolute top-[10%] z-10 right-[100%] py-6 px-4  bg-white w-56 rounded-xl border max-w-sm"
        >
          <nav className="flex flex-col gap-4 xl:gap-6 2xl:gap-8">
            <a className="flex items-center " href="https://thakureducation.org">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#667085"
                className="xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 mr-1 w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                ></path>
              </svg>

              <span className=" text-sm  text-slate-900 hover:underline">
                thakureducation.org
              </span>
            </a>
            {primaryLinks.map((p) => (
              <a
                key={p.title}
                href={p.link}
                className=" text-sm w-full  text-slate-900 hover:underline"
              >
                {p.title}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-4 py-6 px-4 my-4 border border-slate-200 rounded-xl ">
            {secondaryLinks.map((s) => (
              <span key={s.title} className="flex justify-between ">
                {!s.subLinks &&
                <a
                  href={s.link}
                  className=" text-sm  text-slate-900 hover:underline w-full"
                >
                  {s.title}
                </a>}
                {s.subLinks && <Accordian title={s.title} links={s.subLinks} />}
              </span>
            ))}
          </nav>
        </aside>
      )}
    </div>
  );
};

export default MobileNav;
