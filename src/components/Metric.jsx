import React from "react";

const Metric = ({ perc, info }) => {
  return (
    <div>
      <div
        className={`h-[${perc}%] border-t-8 border-[#01628F] bg-[#01628F33]`}
      ></div>
      <p className="text-xl text-[#808080]">{info}</p>
    </div>
  );
};

export default Metric;
