import React from "react";
import photo from "../assets/black.jpg";
const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-br from-[#1a2238] to-[#0f172a] text-white w-full p-8 md:p-16"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Hello! I’m{" "}
            <span className="text-indigo-400 animate-pulse">Shrajja</span>
          </h1>
          <p className="text-lg text-gray-300">
            Motivated and passionate IT student pursuing a Bachelor in
            Information Communication Technology Education (BICTE), with a keen
            interest in front-end web development using React JS.
          </p>
          <a href="#contact">
            <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Contact me
            </button>
          </a>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 text-sm text-gray-400 leading-relaxed flex justify-center">
          <div className="rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-lg">
            <img
              src={photo}
              alt="Profile"
              size={60}
              className="w-48 h-50 object-cover rounded-full border-4 border-[#1e293b]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
