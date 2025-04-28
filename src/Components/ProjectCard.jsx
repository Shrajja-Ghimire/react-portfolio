import React from "react";

const ProjectCard = ({ title, main, profile }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col w-80 bg-gradient-to-br from-[#0c0e19] to-[#1a1d2e] shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300 rounded-2xl text-white">
      <img
        className="rounded-xl shadow-md h-60 object-cover mb-4"
        src={profile}
        alt="project profile"
      />
      <h3 className="px-2 text-xl md:text-2xl font-bold">{title}</h3>
      <p className="px-2 text-sm md:text-base text-gray-300 py-2 ">{main}</p>
      <div className="mt-auto flex gap-3 px-2 pt-4">
        <button className="flex-1 bg-[#465697] hover:bg-blue-700 transition-all duration-300 py-2 px-4 rounded-full font-semibold text-sm md:text-base">
          Demo
        </button>
        <button className="flex-1 bg-gray-700 hover:bg-gray-800 transition-all duration-300 py-2 px-4 rounded-full font-semibold text-sm md:text-base">
          Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
