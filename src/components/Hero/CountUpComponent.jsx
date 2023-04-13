import React from "react";
import CountUp from "react-countup";

const CountUpComponent = ({start, end}) => {
  return (
    <>
      <CountUp start={start} end={end} />+{" "}
    </>
  );
};

export default CountUpComponent;
