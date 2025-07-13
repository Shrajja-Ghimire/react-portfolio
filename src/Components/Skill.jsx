import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const Skill = () => {
  return (
    <div id="skill" className="bg-[#171d32] py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-400 mb-6">Skills</h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        Below are some of the technologies and tools I work with regularly:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 justify-items-center text-5xl text-gray-600">
        <div className="hover:text-orange-600 transition duration-300">
          <FaHtml5 />
          <p className="text-sm mt-2">HTML5</p>
        </div>
        <div className="hover:text-blue-600 transition duration-300">
          <FaCss3Alt />
          <p className="text-sm mt-2">CSS3</p>
        </div>
        <div className="hover:text-yellow-500 transition duration-300">
          <IoLogoJavascript />
          <p className="text-sm mt-2">JavaScript</p>
        </div>
        <div className="hover:text-purple-600 transition duration-300">
          <FaBootstrap />
          <p className="text-sm mt-2">Bootstrap</p>
        </div>
        <div className="hover:text-sky-500 transition duration-300">
          <RiTailwindCssFill />
          <p className="text-sm mt-2">Tailwind</p>
        </div>
        <div className="hover:text-cyan-500 transition duration-300">
          <FaReact />
          <p className="text-sm mt-2">React</p>
        </div>
        <div className="hover:text-cyan-500 transition duration-300">
          <FaReact />
          <p className="text-sm mt-2">Typescript</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
