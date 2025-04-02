import React from "react";
import dots from "../assets/dots.png";
import Review from "../components/Review";
import Accordion from "../components/Accordion";

const data = [
  {
    info: "“I recently had surgery and needed transportation to physical therapy, Learnexo made the whole process so much easier. The drivers were very patient and understanding, and the vehicles were well taken care of and comfortable.I would definitely use their services again“.",
    name: "Tyler Adams",
  },
  {
    info: "“I've been using EMSAM for my dialysis appointments for several months now, and I couldn't be happier. The drivers are always friendly and make sure I get to my appointments on time and in comfort. The vehicles are clean and well-maintained, which is important to me”.",
    name: "Tiffany Jones",
  },
  {
    info: "“I was so relieved to find EMSAM. My mother has difficulty getting around, and I was worried about her traveling to her doctor's appointments alone. The drivers are always on time, courteous, and helpful. I highly recommend them”.",
    name: "Spencer Oliver",
  },
];

const Reviews = () => {
  return (
    <section className="px-16 py-12 pb-24">
      <h2 className="text-[50px] font-extrabold w-full leading-tight mt-12 text-center mb-2">
        CUSTOMERS&apos; REVIEW
      </h2>

      <div className="relative p-12 flex gap-6  mb-16">
        <img src={dots} alt="dots" className="absolute bottom-0 left-0 -z-10" />
        <img src={dots} alt="dots" className="absolute top-0 right-0 -z-10" />

        {data.map((review) => (
          <Review info={review.info} name={review.name} />
        ))}
      </div>

      <div className="flex justify-between py-8 pb-12">
        <h3 className="text-[50px] font-extrabold leading-tight max-w-[540px]">
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </h3>

        <div className="flex flex-col gap-6 mr-24">
          <Accordion question="What is my name whatbjbd" answer="Ceejay" />
          <Accordion question="What is my name" answer="Ceejay" />
          <Accordion question="What is my name" answer="Ceejay" />
          <Accordion question="What is my name" answer="Ceejay" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
