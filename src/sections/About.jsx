import React from "react";

const About = () => {
  return (
    <section className="w-screen px-16 py-12 bg-white">
      <div className="border flex gap-24">
        <h2 className="text-[64px] font-semibold w-full leading-tight mt-12">About us</h2>
        <div className="max-w-[655px]">
          <p className="text-[18px] font-semibold mb-4">
            At Learnexo, we are passionate about empowering individuals through
            education. Founded in 2025, we have grown from a small startup to a
            trusted global leader in the educational technology space. Our
            mission is simple yet powerful: to make high-quality education
            accessible, engaging, and transformative for everyone, everywhere.
          </p>
          <p className="text-[18px] font-semibold text-[#808080]">
            We are a team of educators, innovators, and lifelong learners who
            believe in the power of knowledge to change lives. Our diverse team
            brings together expertise in technology, pedagogy, and design to
            create a learning experience that is both effective and enjoyable.
            We are driven by a shared vision: to break down barriers to
            education and inspire learners to reach their full potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
