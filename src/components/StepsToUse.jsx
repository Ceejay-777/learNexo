import React from "react";

const StepsToUse = ({ image, index, step, info, reverse }) => {
  return (
    <div
      className={`w-full flex items-center ${reverse && "flex-row-reverse"} gap-4`}
    >
      <img src={image} className="w-1/2 h-full" />
      <div className="flex flex-col gap-4 justify-between w-1/2 h-fit border-b-1 border-[#B4B4B4] pb-4">
        <h3 className="font-extrabold text-[40px] mb-2 leading-[140%]">
          STEP {index}
        </h3>
        <div>
          <h4 className="font-medium text-[32px] leading-[140%] capitalize">
            {step}
          </h4>
          <p className="font-medium text-xl leading-[140%]">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default StepsToUse;
