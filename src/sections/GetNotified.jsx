import React from "react";
import ellipse1 from "../assets/Ellipse 100.png";
import ellipse2 from "../assets/Ellipse 101.png";

const GetNotified = () => {
  return (
      <section className="px-16 py-12 pb-24 bg-[#01628F33] relative overflow-hidden">
          <img src={ellipse1} className="absolute top-0 -left-0 -z-10"/>
          <img src={ellipse2} className="absolute top-0 -left-0 -z-10"/>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-[40px] text[#263238]">
            Get notified about some informations
          </h2>
          <p className="text-xl text[#263238]">
            We can get you up to date about some details, articles and blogs.
          </p>
        </div>
        <div className="w-full max-w-[365px] rounded-full h-[50px] bg-[#455A64] text-white flex justify-center">
          <input
            type="email"
            name="email"
            className="h-full w-full rounded-full outline-0 pl-4"
            placeholder="Enter your email"
          />
          <button className="w-1/4 p-4 m-2 bg-[#01628F] rounded-full border-0 outline-0 flex justify-center items-center hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetNotified;
