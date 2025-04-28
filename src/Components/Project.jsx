import React from "react";
import ProjectCard from "./ProjectCard";
import ecommerce from "../assets/ec.jpg";
import weather from "../assets/weather.jpg";
const Project = () => {
  return (
    <div id="project" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          profile={weather}
          title="WeatherApp"
          main="This is my first real-world  development project fully responsive app that fetches live data from an external API. It adapts seamlessly across all devices, from mobile to desktop. I used Tailwind CSS for styling and added a feature to dynamically change the background based on the current weather conditions. "
        />
        <ProjectCard
          profile={ecommerce}
          title="Fast-Store"
          main="I built an e-commerce site using TailwindCSS for a clean and responsive design. Redux manages the app's state, and there's a search feature to filter products by category. I implemented login using an external API with default values pre-filled in the fields. "
        />
      </div>
    </div>
  );
};

export default Project;
