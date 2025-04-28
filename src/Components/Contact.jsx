import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#171d32] text-white px-6 py-12 md:py-16 md:px-24 text-center md:flex justify-evenly"
    >
      <div className="mb-10">
        <h1 className=" text-indigo-900 text-3xl md:text-6xl font-bold mb-4">
          Contact
        </h1>
        <h3 className="text-md md:text-2xl font-light text-gray-400">
          Feel free to reach out
        </h3>
      </div>
      <ul className="flex flex-col gap-6 md:gap-8 items-start">
        <li className="flex items-center gap-4 hover:text-red-500 transition-all duration-300 shadow-2xl">
          <MdEmail size={28} />
          <a
            href="mailto:shrajjaghimire@gmail.com"
            className="text-lg md:text-xl"
          >
            shr@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-4 hover:text-fuchsia-700 transition-all duration-300">
          <IoLogoGithub size={28} />
          <a
            href="https://github.com/Shrajja-Ghimire"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl"
          >
            github.com/Shrajja-Ghimire
          </a>
        </li>
        <li className="flex items-center gap-4 hover:text-blue-500 transition-all duration-300">
          <IoLogoLinkedin size={28} />
          <a
            href="https://www.linkedin.com/in/shrajja-ghimire-a32a09345/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl"
          >
            linkedin.com/in/shrajja-ghimire
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
