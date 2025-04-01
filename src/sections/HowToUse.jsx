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
    <section className="flex flex-col items-center justify-center mb-16 px-16 py-12">
      <h2 className="font-extrabold text-[50px] text-center mb-12 max-w-[555px]">
        HOW TO USE LEARNEXO
      </h2>

      <div>
        {data.map((oneStep) => {
          const { image, index, step, info } = oneStep;
          return (
            <StepsToUse
              image={image}
              index={index}
              step={step}
              info={info}
              reverse={index % 2 === 0}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowToUse;
