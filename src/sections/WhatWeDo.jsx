import React from "react";
import WeDo from "../components/WeDo";

const data = [
  {
    index: 1,
    heading: "PERSONALIZED LEARNING PATHS",
    info: "No two learners are the same. That’s why we use advanced algorithms to create customized learning paths based on your goals, interests, and skill level. Whether you're mastering a new language, preparing for an exam, or upskilling for your career, we’ve got you covered.",
  },
  {
    index: 2,
    heading: "EXPERT-LED COURSES",
    info: "Learn from the best. Our platform features courses and tutorials created by industry experts, educators, and thought leaders. From coding and data science to creative arts and business, we offer a wide range of subjects to fuel your curiosity and growth.",
  },
  {
    index: 3,
    heading: "FLEXIBLE LEARNING ON YOUR TERMS",
    info: "Life is busy, and we get it. That’s why LEARNEXO is designed to fit into your schedule. Learn at your own pace, anytime, anywhere. Access our platform on your desktop, tablet, or mobile device—your education, your way.",
  },
  {
    index: 4,
    heading: "TRACK YOUR PROGRESS",
    info: "Stay on top of your goals with our intuitive progress tracking tools. Monitor your achievements, identify areas for improvement, and celebrate your milestones as you grow.",
  },
];

const WhatWeDo = () => {
  return (
    <section
      className="md:mb-12 flex flex-col justify-center items-center px-4 md:px-12 py-6"
      id="services"
    >
      <h2 className="font-bold md:font-extrabold text-2xl md:text-4xl lg:text-[50px] text-center mb-6">
        WHAT DO WE DO?
      </h2>

      <ul>
        {data.map((item) => (
          <WeDo
            key={item.index}
            index={item.index}
            heading={item.heading}
            info={item.info}
          />
        ))}
      </ul>
    </section>
  );
};

export default WhatWeDo;
