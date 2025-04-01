import React from "react";
import logo from "../assets/learnexo logo.png";
import Nav from "./Nav";
import Talk from "./Talk";

const header = () => {
  return (
    <header className="w-full flex justify-between relative items-center mb-10">
      <img
        src={logo}
        alt="learnexo"
        className="top-0 left-0 w-[50px] h-[55px]"
      />
      <Nav />
      <Talk />
    </header>
  );
};

export default header;
