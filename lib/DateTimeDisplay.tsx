import React from "react";

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="">
      <h3 className="text-xl md:text-3xl lg:text-4xl 2xl:text-6xl text-center font-bold text-glow -mb-1 md:mb-0">
        {value.toString().length == 1 ? "0" + value : value}
      </h3>
      <h3 className="text-base md:text-xl lg:text-2xl 2xl:text-5xl font-semibold text-glow">
        {type}
      </h3>
    </div>
  );
};

export default DateTimeDisplay;
