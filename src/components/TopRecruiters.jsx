import Marquee from "react-fast-marquee";

const data = [
  {
    name: "Accenture",
    imgUrl: "https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png"
  },
  {
    name: "Accenture",
    imgUrl: "https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png"
  },
  {
    name: "Accenture",
    imgUrl: "https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png"
  },
  {
    name: "Accenture",
    imgUrl: "https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png"
  },
  {
    name: "Accenture",
    imgUrl: "https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png"
  },
  {
    name: "Accenture",
    imgUrl: "https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png"
  },
  {
    name: "Accenture",
    imgUrl: "https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png"
  },
]

function TopRecruiters() {
  let imgUrl =
    "https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png";

  return (
    <div className="w-100 max-h-min flex flex-1 flex-col pt-5  justify-between align-middle sm:flex-row">
      <div className="h-100 flex flex-col justify-center align-middle flex-initial xl:w-1/2 md:w-1/2 sm:w-full">
        <div className="m-8">
          <p className="text-3xl font-title pb-4">Top Recruiters</p>
          <p className="text-slate-700 font-Inter ">
            TCET has an enviable record in placement of students. The institute
            has been accredited by major companies like Infosys, Tata
            Consultancy Services, iGATE, and Tech mahindra, etc.
          </p>
        </div>
      </div>
      <div className="carousel relative flex-initial flex flex-col sm:left-16 gap-y-8 xl:gap-y-12 py-8 xl:py-10  w-100 rounded-3xl  bg-[#FCFCFD] xl:w-2/4 md:w-2/3 sm:w-full">
        <div className="w-full rounded-3xl absolute z-50 top-0 h-28 bg-gradient-to-b from-[rgba(242,244,247,1)] to-[rgba(242,244,247,0)]"></div>
        <div className="w-full rounded-3xl absolute z-50 bottom-0 h-28 bg-gradient-to-t from-[rgba(242,244,247,1)]  to-[rgba(242,244,247,0)]"></div>
        <div className="">
          <Marquee speed={30}>
            {data.map(d => (
              <img className="h-8 object-contain" src={imgUrl} alt="random" />  
            ))}

          </Marquee>
        </div>
        <div className="">
          <Marquee direction="right" speed={30}>
            {data.map(d => (
              <img className="h-8 object-contain" src={imgUrl} alt="random" />  
            ))}

          </Marquee>
        </div>
        <div className="">
          <Marquee speed={30}>
            {data.map(d => (
              <img className="h-8 object-contain" src={imgUrl} alt="random" />  
            ))}

          </Marquee>
        </div>
        <div className=" ">
          <Marquee direction="right" speed={30}>
            {data.map(d => (
              <img className="h-8 object-contain" src={imgUrl} alt="random" />  
            ))}

          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default TopRecruiters;
