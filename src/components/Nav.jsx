import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="flex sm:gap-6 gap-3 font-bold text-[#808080] text-xs items-center sm:text-base lg:text-xl">
        <li className="">
          <a href="#home" className="">
            Home
          </a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#howToUse">How to use</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
