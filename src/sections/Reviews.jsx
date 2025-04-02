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
    <section className="px-4 sm:px-8 md:px-16 py-6 md:py-12 pb-6 md:pb-12 lg:pb-24">
      <h2 className="md:font-extrabold text-2xl md:text-4xl lg:text-[50px] font-bold w-full leading-tight mt-12 text-center mb-6 sm:mb-2">
        CUSTOMERS&apos; REVIEW
      </h2>

      <div className="relative p-6 sm:p-12 flex gap-6 mb-8  md:mb-16 flex-col sm:flex-row">
        <img src={dots} alt="dots" className="absolute bottom-0 left-0 -z-10" />
        <img src={dots} alt="dots" className="absolute top-0 right-0 -z-10" />

        {data.map((review) => (
          <Review info={review.info} name={review.name} />
        ))}
      </div>

      <div className="flex flex-col justify-between py-8 pb-12 md:flex-row">
        <h3 className="md:font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-[50px] font-bold leading-tight max-w-[540px] mb-6">
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </h3>

        <div className="flex flex-col gap-6 md:mr-12 lg:mr-24">
          <Accordion
            question="What is my name whatbjbd"
            answer="Ceejay hwpofuwefvf ubwufbqub ubwuib ibwbqbueb- webuu uibweb ubwech ibibwqbc ibwibcobcib ibibwc ibiwbdcibiw ibwibcq ibiwbobqjo ibwo ibeicw ibwcic ciewbjdici ibeiie ibibdib"
          />
          <Accordion question="What is my name" answer="Ceejay" />
          <Accordion question="What is my name" answer="Ceejay" />
          <Accordion question="What is my name" answer="Ceejay" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
