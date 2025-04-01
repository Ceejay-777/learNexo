import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-6 font-bold text-[#808080]">
        <li className="">
          <a href="#hero">
            Home
          </a>
        </li>
        <li>
          <a href="#hero">Our Work</a>
        </li>
        <li>
          <a href="#hero">About Us</a>
        </li>
        <li>
          <a href="#hero">Projects</a>
        </li>
        <li>
          <a href="#hero">Services</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
