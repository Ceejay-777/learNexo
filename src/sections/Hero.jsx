import React from "react";
import Header from "../components/Header";
import topright from "../assets/topright.png";
import bottomright from "../assets/bottomright.png";
import heroImage from "../assets/hero image.png";

const Hero = () => {
  return (
    <section
      className="text-center flex flex-col justify-center items-center lg:mb-24 p-4 sm:px-8 sm:py-6"
      id="hero"
    >
      <Header />
      <h1 className="mt-4 font-bold md:font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[48px] md:leading-[3.5rem] md:mb-4">
        EDUCATIONAL/LEARNING PLATFORM
      </h1>
      <div className="sm:flex justify-between items-center gap-12 ">
        <div className="sm:w-1/2">
          <div className="max-w-[1024px] mx-auto py-4 flex flex-col items-center">
            <p className="font-semibold text-[#808080] text-sm sm:text-base">
              Welcome to{" "}
              <span className="text-[#01628F] font-bold text-base sm:text-lg">
                LEARNEXO
              </span>
              , where education meets innovation. Whether you're a student,
              professional, or lifelong learner, our platform is designed to
              empower you with the knowledge and skills you need to succeed in
              today&apos;s fast-paced world.
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 mb-8">
            <button className="bg-[#01628F] text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-300 flex gap-3 items-center justify-center text-xs sm:text-sm">
              Get in touch
              <img src={topright} alt="topright" />
            </button>
            <button className="text-[#01628F] bg-white px-4 py-2 rounded-lg hover:scale-105 transition duration-300 flex justify-center items-center gap-3 border-[0.5px] border-[#01628F] text-xs sm:text-sm">
              Learn more
              <img src={bottomright} alt="bottomright" />
            </button>
          </div>
        </div>

        <div className="sm:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
