import React from "react";

const StepsToUse = ({ image, index, step, info, reverse }) => {
  return (
    <div
      className={`w-full flex flex-col sm:flex-row items-center ${
        reverse && "sm:flex-row-reverse"
      } gap-4`}
    >
      <img src={image} className="w-1/2 h-full" />
      <div className="flex flex-col md:gap-4 justify-between md:w-1/2 h-fit border-b-1 border-[#B4B4B4] pb-4 mx-12 sm:mx-0">
        <h3 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[40px] mb-2 leading-[140%]">
          STEP {index}
        </h3>
        <div> 
          <h4 className="font-medium text-base sm:text-xl md:text-2xl lg:text-[32px] md:leading-[140%] capitalize">
            {step}
          </h4>
          <p className="font-medium text-xs sm:text-sm md:text-base lg:text-xl md:leading-[140%]">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default StepsToUse;
