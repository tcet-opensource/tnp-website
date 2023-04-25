import CountUp from "react-countup";

const CountUpComponent = ({ start, end, title }) => {
  return (
    <>
      {/* bg changed to slate. removed max-w coz div limits are set my parent div ka max width */}
      <div className="bg-slate-50 p-4 pr-12  rounded-2xl border  border-slate-200 space-y-2">
        {" "}
        <div className="font-title  text-2xl">
          <CountUp start={start} end={end} />+
        </div>
        <div className="text-slate-500">{title}</div>
      </div>
    </>
  );
};

export default CountUpComponent;
