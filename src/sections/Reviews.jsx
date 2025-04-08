import React from "react";
import dots from "../assets/dots.png";
import Review from "../components/Review";
import Accordion from "../components/Accordion";

const data = [
  {
    info: "“I recently had surgery and needed transportation to physical therapy, Learnexo made the whole process so much easier. The drivers were very patient and understanding, and the vehicles were well taken care of and comfortable.I would definitely use their services again“.",
    name: "Tobi Abidemi",
  },
  {
    info: "“I've been using EMSAM for my dialysis appointments for several months now, and I couldn't be happier. The drivers are always friendly and make sure I get to my appointments on time and in comfort. The vehicles are clean and well-maintained, which is important to me”.",
    name: "Cynthia Okeke",
  },
  {
    info: "“I was so relieved to find EMSAM. My mother has difficulty getting around, and I was worried about her traveling to her doctor's appointments alone. The drivers are always on time, courteous, and helpful. I highly recommend them”.",
    name: "Jordan Okafor",
  },
];

const Reviews = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-6 md:py-12 pb-6 md:pb-8 lg:pb-12">
      <h2 className="md:font-extrabold text-xl md:text-3xl lg:text-[42px] font-bold w-full leading-tight text-center mb-6 sm:mb-2">
        CUSTOMERS&apos; REVIEW
      </h2>

      <div className="relative p-4 sm:p-8 flex gap-6 mb-8 md:mb-16 flex-col sm:flex-row">
        <img src={dots} alt="dots" className="absolute bottom-0 left-0 -z-10" />
        <img src={dots} alt="dots" className="absolute top-0 right-0 -z-10" />

        {data.map((review) => (
          <Review info={review.info} name={review.name} />
        ))}
      </div>

      <div className="flex flex-col justify-between py-8 md:flex-row">
        <h3 className="md:font-extrabold text-center md:text-left text-base sm:text-xl md:text-2xl lg:text-[42px] font-bold leading-tight max-w-[540px] mb-6">
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </h3>

        <div className="flex flex-col gap-2 md:mr-12 lg:mr-24">
          <Accordion
            question="What is Learnexo?"
            answer="Learnexo is an AI-powered personalized learning platform designed to assess students' learning proficiency and provide tailored educational support. It helps students improve their understanding through adaptive assessments, personalized feedback, and targeted learning resources."
          />
          <Accordion
            question="Who can use Learnexo?"
            answer="Learnexo is designed for secondary school students, educators, and parents. It provides personalized tests and recommendations to help students strengthen their conceptual understanding in subjects like Mathematics, English, and Problem Solving, e.t.c."
          />
          <Accordion
            question="How does Learnexo personalize learning"
            answer="Learnexo uses AI to analyze students’ test performance, identifying their strengths and weaknesses. Based on this analysis, it recommends tailored learning resources and practice questions to help them improve."
          />
          <Accordion
            question=" What subjects does Learnexo cover"
            answer="Currently, Learnexo focuses on Mathematics, English, and Problem Solving. More subjects may be added in the future."
          />
          <Accordion
            question=" How are the assessments structured"
            answer="Learnexo assessments are multiple-choice tests designed to evaluate three key aspects: Conceptual Understanding: Testing knowledge of core concepts, Practical Application: Assessing how well students apply knowledge, Speed of Comprehension: Measuring how quickly students grasp new ideas."
          />
          <Accordion
            question="How can I access Learnexo"
            answer="Learnexo is accessible via a web platform or mobile app. Users can sign up, take assessments, and receive personalized recommendations."
          />
          <Accordion
            question="Is Learnexo free to use"
            answer="Learnexo offer both free and premium features. Basic assessments might be free, while advanced analytics, personalized tutoring, or premium content require a subscription."
          />
          <Accordion
            question=" How does Learnexo help educators"
            answer="Educators can use Learnexo to track students' progress, identify learning gaps, and customize their teaching methods based on AI-driven insights."
          />
          <Accordion
            question="How can parents benefit from Learnexo"
            answer="Parents can monitor their child’s academic performance, receive insights on strengths and weaknesses, and access personalized learning recommendations to support their child's education."
          />
          <Accordion
            question="How secure is my data on Learnexo"
            answer="Learnexo follows strict data security protocols to ensure users’ personal information and academic progress remain private and secure."
          />
          <Accordion
            question="How can I get support if I have issues using Learnexo"
            answer="If you encounter any issues, you can contact Learnexo’s support team via email or through the Help Center on the platform."
          />
          <Accordion
            question=" Can I use Learnexo without an internet connection"
            answer="Some features, like taking personalized tests, require an internet connection, but Learnexo offer offline access for downloaded learning materials."
          />
          <Accordion
            question="What subscription plans does Learnexo offer"
            answer="Learnexo offers three subscription plans to cater to different learning needs: Solo Plan – Designed for individual students who want personalized learning support. Family Plan – Ideal for families with multiple learners, allowing access for parents and children. School Plan – A comprehensive package for schools, enabling teachers to track student progress and manage learning resources for multiple students."
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
