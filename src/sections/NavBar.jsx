import { useState } from "react";
import linksNavBar from "../utils/links";

const NavBar = () => {
  const [active, setActive] = useState("about");

  return (
    <nav className="text-[#c2e8f0] flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 sm:gap-6 py-6 px-4 sm:px-10">
      {linksNavBar.map((link) => (
        <div
          key={link.id}
          className="flex items-center cursor-pointer group"
          onClick={() => setActive(link.id)}
        >
          <div
            className={`w-6 sm:w-8 h-px mr-2 sm:mr-4 ${
              active === link.id
                ? "bg-white"
                : "bg-gray-600 group-hover:bg-gray-400"
            }`}
          ></div>
          <span
            className={`text-sm font-medium tracking-widest transition-colors duration-300 ${
              active === link.id
                ? "text-white"
                : "text-gray-400 group-hover:text-gray-200"
            }`}
          >
            {link.label}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
