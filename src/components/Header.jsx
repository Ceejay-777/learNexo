import React from "react";
import logo from "../assets/learnexo logo.png";
import Nav from "./Nav";
import Talk from "./Talk";

const header = () => {
  return (
    <header className="w-full flex justify-between relative items-center md:mb-10">
      <img
        src={logo}
        alt="learnexo"
        className="top-0 left-0 w-[25px] h-[27px] sm:w-[40px] sm:h-[45px] md:w-[50px] md:h-[55px]"
      />
      <Nav />
      <Talk />
    </header>
  );
};

export default header;
