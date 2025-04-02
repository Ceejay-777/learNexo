import React from "react";

const WeDo = ({ index, heading, info }) => {
  return (
    <div className="flex gap-6 justify-center items-center py-6 md:py-12 border-y-[1px] border-[#01628F]">
      <p className="font-extrabold text-xl md:text-2xl lg:text-[40px] self-start">
        0{index}
      </p>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#01628F] font-semibold text-xl md:text-2xl lg:text-[40px]">
          {heading}
        </h3>
        <p className="text-[#5C5C5C] text-base md:text-xl lg:not-odd:text-2xl">{info}</p>
      </div>
    </div>
  );
};

export default WeDo;
