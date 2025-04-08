import React from "react";
import down from "../assets/arrowDown.png";
import { useRef } from "react";

const Accordion = ({ question, answer, open, setOpen }) => {
  const answerRef = useRef(null);
  
  return (
    <div
      onClick={() => setOpen(!open)}
      className="max-w-[560px] w-full mx-auto"
    >
      <div
        className={`flex justify-between items-center hover:bg-white p-4 rounded-xl ${
          open && "bg-white"
        }`}
      >
        <p className="text-xs sm:text-sm md:text-base lg:text-xl font-bold">
          {question}
        </p>
        <img
          src={down}
          alt="open"
          className={`${
            open && "rotate-180"
          } duration-500 ease-in-out transition-all origin-center`}
        />
      </div>
      <div
        style={{
          maxHeight: open ? `${answerRef.current.scrollHeight}px` : "0px",
        }}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open && "border-b-[0.5px]"
        }`}
        ref={answerRef}
      >
        <div className="p-4 text-xs sm:text-sm md:text-base lg:text-xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
