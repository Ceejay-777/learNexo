import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import WhatWeDo from "./sections/WhatWeDo";
import HowToUse from "./sections/HowToUse";
import About from "./sections/About";
import Reviews from "./sections/Reviews";
import GetNotified from "./sections/GetNotified";

function App() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowToUse />
      <About />
      <Reviews />
      <GetNotified />
    </>
  );
}

export default App;
