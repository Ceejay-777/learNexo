import React from "react";

const Review = ({ info, name }) => {
  return (
    <div className="sm:w-1/3 bg-white p-4 flex flex-col justify-between text-xs sm:text-sm ">
      <p className="mb-2">{info}</p>
      <p className="font-bold leading-6">- {name}</p>
    </div>
  );
};

export default Review;
