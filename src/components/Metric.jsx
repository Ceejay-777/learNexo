import React from "react";

const Metric = ({ perc }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-1/5`}
      style={{ height: `${perc}%` }}
    >
      <p className="font-bold">
        <span className=" text-[9px] sm:text-sm md:text-base lg:text-xl">
          {perc}%/
        </span>
        <span className="text-[#808080] text-[6px] sm:text-xs md:text-sm lg:text-base">
          100%
        </span>
      </p>
      <div
        className={`border-t-8 border-[#01628F] bg-[#01628F33] h-full w-full`}
      ></div>
    </div>
  );
};

export default Metric;
