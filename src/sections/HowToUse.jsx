import React from "react";
import StepsToUse from "../components/StepsToUse";
import stepOne from "../assets/stepone.png";
import stepTwo from "../assets/steptwo.png";
import stepThree from "../assets/stepthree.png";

const data = [
  {
    image: stepOne,
    index: 1,
    step: "download the Learnexo mobile application or log in to the website",
    info: "You can download the app on Google Playstore and Apple store. To access the web version, go to login",
  },
  {
    image: stepTwo,
    index: 2,
    step: "Proceed to Create an account with us",
    info: "You can create an account with us by basically filling out the questions that will be asked.",
  },
  {
    image: stepThree,
    index: 3,
    step: "Enjoy the seamless and interactive lectures/tutorials",
    info: "Here you go to your dashboard and pick out the course or subject you want to study, we also have an AI chat bot to assist you academically.",
  },
];

const HowToUse = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 md:px-8 py-6"
      id="howToUse"
    >
      <h2 className="md:font-extrabold text-2xl md:text-4xl lg:text-[50px] font-bold text-center mb-4 max-w-[555px]">
        HOW TO USE LEARNEXO
      </h2>
 
      <div className="flex flex-col gap-4">
        {data.map((oneStep) => {
          const { image, index, step, info } = oneStep;
          return (
            <StepsToUse
              image={image}
              index={index}
              step={step}
              info={info}
              // reverse={index % 2 === 0}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowToUse;
