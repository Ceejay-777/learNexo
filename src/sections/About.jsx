import React from "react";
import Metric from "../components/Metric";

const About = () => {
  return (
    <section
      className="w-screen px-4 sm:px-8 md:px-16 py-12 pb-24 bg-white"
      id="about"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24">
        <h2 className="text-2xl sm:text-3xl md:4xl lg:text-[64px] font-bold md:font-semibold w-full leading-tight md:mt-12 text-center md:text-left">
          About us
        </h2>
        <div className="max-w-[655px]">
          <p className="text-xs sm:text-sm md:text-base lg:text-[18px] font-semibold mb-8">
            At Learnexo, we are passionate about empowering individuals through
            education. Founded in 2025, we have grown from a small startup to a
            trusted global leader in the educational technology space. Our
            mission is simple yet powerful: to make high-quality education
            accessible, engaging, and transformative for everyone, everywhere.
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-[18px] font-semibold text-[#808080]">
            We are a team of educators, innovators, and lifelong learners who
            believe in the power of knowledge to change lives. Our diverse team
            brings together expertise in technology, pedagogy, and design to
            create a learning experience that is both effective and enjoyable.
            We are driven by a shared vision: to break down barriers to
            education and inspire learners to reach their full potential.
          </p>
        </div>
      </div>
      <div className="">
        <div className="h-[420px] flex gap-4 lg:gap-10 justify-between items-end border-b-[0.5px] border-b-[#B4B4B4] mb-2">
          <Metric perc={90} />
          <Metric perc={95} />
          <Metric perc={78} />
          <Metric perc={72} />
          <Metric perc={69} />
        </div>

        <div className="flex gap-4 lg:gap-10 justify-center text-[6px] sm:text-xs md:text-base lg:text-xl text-[#808080] text-center">
          <p className="w-1/5">Sustanability</p>
          <p className="w-1/5">Customer&apos;s Satisfaction</p>
          <p className="w-1/5">Our Services</p>
          <p className="w-1/5">Improved Grades</p>
          <p className="w-1/5">Improved WAEC Results</p>
        </div>
      </div>
    </section>
  );
};

export default About;
