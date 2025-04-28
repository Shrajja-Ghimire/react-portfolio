import React, { useState } from "react";
import { LuSquareMenu } from "react-icons/lu";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu on mobile after click
  };

  return (
    <nav className="p-4 bg-[#171d32] h-auto w-full overflow-hidden text-white flex flex-wrap justify-between items-center md:px-10">
      <a href="#home">
        <span className="text-xl font-bold tracking-widest cursor-pointer">
          Myportfolio
        </span>
      </a>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex gap-6 mx-24 py-2 mt-4 font-semibold md:mt-4 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0`}
      >
        <a href="#about" onClick={handleLinkClick}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#skill" onClick={handleLinkClick}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#project" onClick={handleLinkClick}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>

      {menuOpen ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      ) : (
        <LuSquareMenu
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
