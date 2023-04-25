import {useState, useRef} from 'react';
import useOnClickOutside  from "../../hooks/useOnClickOutside";
import type { link } from "../../env";


const Accordian: React.FC<{ links: link[], title: string }> = ({ links, title }) => {
  const [isOn, setIsOn] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  useOnClickOutside(ref, () => setIsOn(false), ref2);
  return (
    <span ref={ref2} className="w-full relative text-sm lg:text-xs xl:text-sm flex justify-between items-center gap-2" 
      onMouseOver={() => {
        // console.log("mouse over");
        setIsOn(true);
      }}
      onMouseOut={() => {
        // console.log("mouse out");
        // setIsOn(false)
        // setTimeout(() => {
        //   setIsOn(false);          
        // },1000) 
      }}
    > <p>{title}</p>
      {!isOn ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 lg:w-4 lg:h-4 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 lg:w-4 lg:h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
      {isOn && (
        <span
          ref={ref}
          onMouseOver={() => {
            // console.log("mouse over");
            setIsOn(true);
          }}
          onMouseOut={() => {
            // console.log("mouse out");
            setIsOn(false);
          }}
          className="animate-fadeIn absolute top-5 right-0 rounded-xl p-4 bg-white border text-xs w-max flex flex-col z-10 gap-2 "
        >
          {links.map((l) => (
            <a
              href={l.link}
              className=" text-xs xl:text-sm  text-slate-900 hover:underline border-b border-slate-200 pb-2 last:border-0 last:pb-0 w-full"
            >
              {l.title}
            </a>
          ))}
        </span>
      )}
    </span>
  );
};

export default Accordian;
