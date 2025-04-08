import React from "react";
import twitter from "../assets/brand-twitter.png";
import whatsapp from "../assets/brand-whatsapp.png";
import facebook from "../assets/brand-facebook.png";
import google from "../assets/brand-google.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import copy from "../assets/copyright.png";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-8 md:px-12 py-6 pb-6 sm:pb-12 md:pb-24 bg-[#01628F] text-white flex gap-12 justify-between items-center flex-col lg:flex-row">
      <div className="lg:w-1/2 flex flex-col gap-4 md:gap-12">
        <h4 className="font-semibold text-2xl md:text-base">LEARNEXO</h4>
        <div className="flex items-center gap-12 border p-4 w-fit rounded-xl">
          <img src={twitter} alt="twitter" className="hover:scale-110" />
          <img src={whatsapp} alt="whatsapp" className="hover:scale-110" />
          <img src={facebook} alt="facebook" className="hover:scale-110" />
          <img src={google} alt="google" className="hover:scale-110" />
        </div>

        <div className="gap-6 flex items-start flex-col sm:flex-row">
          <img src={appstore} alt="appstore" className="hover:scale-105" />
          <img src={playstore} alt="playstore" className="hover:scale-105" />
        </div>

        <div className="flex gap-4 items-center font-semibold">
          <img src={copy} />
          <p>2025 Copyright LEARNEXO</p>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col gap-6">
          <h5 className="font-semibold text-xl">Company</h5>
          <ul className="flex gap-4 flex-col">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>Contact Us</li>
            <li>Our Services</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h5 className="font-semibold text-xl">Join LEARNEXO</h5>
          <ul className="flex gap-4 flex-col">
            <li>Register</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
