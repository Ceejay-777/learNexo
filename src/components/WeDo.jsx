import React from "react";

const WeDo = ({ index, heading, info }) => {
  return (
    <div className="flex gap-6 justify-center items-center py-4 md:py-6 border-y-[1px] border-[#01628F]">
      <p className="font-extrabold text-base md:text-xl lg:text-[32px] self-start">
        0{index}
      </p>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#01628F] font-semibold text-base md:text-xl lg:text-[32px]">
          {heading}
        </h3>
        <p className="text-[#5C5C5C] text-sm md:text-base lg:text-xl">{info}</p>
      </div>
    </div>
  );
};

export default WeDo;
