import React from "react";
import down from "../assets/arrowDown.png";
import { useRef } from "react";
import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const answerRef = useRef(null);

  return (
    <div onClick={() => setOpen(!open)} className="max-w-[560px] w-full">
      <div className="flex justify-between items-center gap-12">
        <p className="text-2xl font-bold">{question}</p>
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
        <div className="p-4 text-2xl">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
