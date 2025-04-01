import React from "react";

const Metric = ({ perc, info }) => {
  return (
      <div className={`flex flex-col gap-4 justify-center items-center w-1/5 h-[${perc}%]`}>
      <div
        className={`border-t-8 border-[#01628F] bg-[#01628F33] h-full w-full`}
      ></div>
      <p className="text-xl text-[#808080]">{info}</p>
    </div>
  );
};

export default Metric;
