import React from "react";

const Review = ({ info, name }) => {
  return (
    <div className="w-1/3 bg-white p-4 flex flex-col justify-between border">
      <p>{info}</p>
      <p className="font-bold leading-6">{name}</p>
    </div>
  );
};

export default Review;
