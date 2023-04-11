import React from "react";

const GridWrapper = ({ children, columns = 2 , justifyContent = 'space-evenly', margin= '1.2rem 0' }) => {
  const gridStyles = {
    display: "flex",
    justifyContent,
    margin
  };

  return <div style={gridStyles}>{children}</div>;
};

export default GridWrapper;
