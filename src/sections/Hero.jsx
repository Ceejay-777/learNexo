import React from "react";
import Header from "../components/Header";
import topright from "../assets/topright.png";
import bottomright from "../assets/bottomright.png";
import heroImage from "../assets/hero image.png";

const Hero = () => {
  return (
    <section
      className="text-center flex flex-col justify-center items-center md:mb-12 lg:mb-24 p-4 sm:px-16 sm:py-12"
      id="hero"
    >
      <Header />
      <div className="max-w-[1024px] mx-auto py-8 flex flex-col items-center">
        <h1 className="font-bold md:font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[56px] md:leading-[3.5rem] mb-4">
          EDUCATIONAL/LEARNING PLATFORM
        </h1>
        <p className="font-semibold text-[#808080] text-sm sm:text-base">
          Welcome to <span className="text-[#01628F] font-bold">LEARNEXO</span>,
          where education meets innovation. Whether you're a student,
          professional, or lifelong learner, our platform is designed to empower
          you with the knowledge and skills you need to succeed in today&apos;s
          fast-paced world.
        </p>
      </div>

      <div className="flex justify-center items-center gap-6 mb-8">
        <button className="bg-[#01628F] text-white px-6 py-3 rounded-lg hover:scale-105 transition duration-300 flex gap-3 items-center justify-center text-sm sm:text-base">
          Get in touch
          <img src={topright} alt="topright" />
        </button>
        <button className="text-[#01628F] bg-white px-6 py-3 rounded-lg hover:scale-105 transition duration-300 flex justify-center items-center gap-3 border-[0.5px] border-[#01628F] text-sm sm:text-base">
          Learn more
          <img src={bottomright} alt="bottomright" />
        </button>
      </div>

      <div>
        <img src={heroImage} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
