import React from "react";
import ellipse1 from "../assets/Ellipse 100.png";
import ellipse2 from "../assets/Ellipse 101.png";

const GetNotified = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-12 pb-6 sm:pb-12 md:pb-24 bg-[#01628F33] relative overflow-hidden">
      <img src={ellipse1} className="absolute top-0 -left-0 -z-10" />
      <img src={ellipse2} className="absolute top-0 -left-0 -z-10" />
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div>
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[40px] text[#263238] text-center md:text-left">
            Get notified about some informations
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text[#263238]">
            We can get you up to date about some details, articles and blogs.
          </p>
        </div>
        <div className="w-full max-w-[365px] rounded-full h-[50px] bg-[#455A64] text-white flex justify-center">
          <input
            type="email"
            name="email"
            className="h-full w-full rounded-full outline-0 pl-4 text-xs sm:text-sm md:text-base"
            placeholder="Enter your email"
          />
          <button className="w-1/4 p-2 px-4 md:p-4 m-2 bg-[#01628F] rounded-full border-0 outline-0 flex justify-center items-center hover:scale-105 text-[9px] sm:text-xs md:text-sm lg:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetNotified;
