import React from 'react';

const CountUp = ({ end, duration }) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toFixed()}</span>;
};

export default CountUp;
