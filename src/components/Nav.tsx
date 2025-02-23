import React from "react";

const Nav = () => {
  return (
    <div className="bg-gray-800 w-[100%] flex flex-row items-center">
      <div className="font-semibold text-medium text-white ml-6">
        Sangha's portfolio
      </div>
      <div className="flex flex-row space-x-24 h-12 items-center justify-center ml-60">
        <a className="font-semibold text-medium text-white hover:text-cyan-400">
          About
        </a>
        <a className="font-semibold text-medium text-white hover:text-cyan-400">
          Skills
        </a>
        <a className="font-semibold text-medium text-white hover:text-cyan-400">
          Archiving
        </a>
        <a className="font-semibold text-medium text-white hover:text-cyan-400">
          Project
        </a>
        <a className="font-semibold text-medium text-white hover:text-cyan-400">
          Education
        </a>
        <a className="font-semibold text-medium text-white hover:text-cyan-400">
          Career
        </a>
      </div>
    </div>
  );
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };

export default Nav;
