import {useState, useRef} from 'react';
import useOnClickOutside  from "../../hooks/useOnClickOutside";
import type { link } from "../../env";


const Accordian: React.FC<{ links: link[] }> = ({ links }) => {
  const [isOn, setIsOn] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  useOnClickOutside(ref, () => setIsOn(false), ref2);
  return (
    <span ref={ref2} className="relative" onClick={() => setIsOn(!isOn)}>
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
          className="animate-fadeIn absolute top-5 right-0 rounded-xl p-4 bg-white border text-xs w-max "
        >
          {links.map((l) => (
            <a
              href={l.link}
              className=" text-xs xl:text-sm  text-slate-900 hover:underline"
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
