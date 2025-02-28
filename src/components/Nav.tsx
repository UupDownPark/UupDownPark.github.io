import React from "react";

const Nav = () => {
  return (
    <header className="bg-gray-800 w-[100%] flex flex-row items-center sticky top-0 z-10 h-[7vh] shadow-2xl">
      <a
        href="#introduceContainer"
        className="font-semibold text-medium text-white ml-6"
      >
        Sangha's portfolio
      </a>
      <div className="flex flex-row space-x-24 h-12 items-center justify-center ml-60">
        <a
          href="#about"
          className="font-semibold text-medium text-white hover:text-cyan-400 active"
        >
          About
        </a>
        <a
          href="#skills"
          className="font-semibold text-medium text-white hover:text-cyan-400"
        >
          Skills
        </a>
        <a
          href="#archiving"
          className="font-semibold text-medium text-white hover:text-cyan-400"
        >
          Archiving
        </a>
        <a
          href="#project"
          className="font-semibold text-medium text-white hover:text-cyan-400"
        >
          Project
        </a>
        <a
          href="#education"
          className="font-semibold text-medium text-white hover:text-cyan-400"
        >
          Education
        </a>
        <a
          href="#career"
          className="font-semibold text-medium text-white hover:text-cyan-400"
        >
          Career
        </a>
      </div>
    </header>
  );
};

export default Nav;
