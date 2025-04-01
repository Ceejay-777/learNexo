import React from "react";
import mail from "../assets/mail.png";

const Talk = () => {
  return (
    <div className="flex gap-4 bg-white border-[0.5px] border-[#808080]  rounded-sm p-3 items-center justify-center h-10">
      <img src={mail} alt="lets talk" className="w-[18px] h-[14px]" />
      <p className="font-semibold">Let&apos;s talk</p>
    </div>
  );
};

export default Talk;
