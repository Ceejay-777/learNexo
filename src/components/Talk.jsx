import React from "react";
import mail from "../assets/mail.png";

const Talk = () => {
  return (
    <div className="flex gap-2 md:gap-4 bg-white border-[0.5px] border-[#808080]  rounded-sm sm:p-3 p-2 items-center justify-center h-10">
      <img
        src={mail}
        alt="lets talk"
        className="sm:w-[18px] sm:h-[14px] w-3 h-[10px]"
      />
      <p className="font-semibold text-xs sm:text-base">Let&apos;s talk</p>
    </div>
  );
};

export default Talk;
