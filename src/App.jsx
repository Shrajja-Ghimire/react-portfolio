import React from "react";
import "./index.css";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="bg-[#171d32] text-white h-auto w-full overflow-hidden">
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
