import { useState } from "react";
import CompanyCard from "./CompanyCard.tsx";
import type { CompanyCardType } from "../../env.d.ts";

const ReadMore: React.FC<{
  companies: CompanyCardType[];
  title: string;
}> = ({ companies, title }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <button
        className="w-max py-2 px-4 flex text-slate-600 gap-x-2 items-center border rounded-full 
      bg-gray-50 hover:bg-gray-100 active:bg-gray-50 transition-all ml-auto mr-8 mb-4"
        onClick={() => setReadMore(!readMore)}
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6  text-slate-500 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
      {readMore && (
        <>
          <div
            onClick={() => setReadMore(false)}
            className="w-screen h-screen bg-black bg-opacity-60 fixed transition-opacity top-0 left-0 "
          />
          <div
            className="w-11/12  max-h-[80%] overflow-y-scroll fixed top-[50%] translate-y-[-50%]  bg-white rounded-xl 
            shadow-xl mx-auto lg:py-20 left-[50%] translate-x-[-50%]
             p-12 "
          >
            <div className="pb-4 lg:pb-6 xl:pb-10 ">
              <h1 className=" text-2xl 2xl:text-3xl text-center font-title">
                {title}
              </h1>
            </div>
            <div className="grid max-h-[70%] overflow-x-hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-around gap-6 xl:gap-12">
              {companies.map((c) => (
                <CompanyCard name={c.name} img={c.img} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReadMore;
