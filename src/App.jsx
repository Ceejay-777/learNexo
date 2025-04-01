import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import WhatWeDo from "./sections/WhatWeDo";
import HowToUse from "./sections/HowToUse";
import About from "./sections/About";

function App() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowToUse />
      <About />
    </>
  );
}

export default App;
