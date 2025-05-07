import { useState } from "react";
import linksNavBar from "../utils/links";

const NavBar = () => {
  const [active, setActive] = useState("about");

  return (
    <div className=" text-[#c2e8f0] flex justify-end pr-8 py-10 gap-6">
      {linksNavBar.map((link) => (
        <nav
          key={link.id}
          className={`flex items-center cursor-pointer group`}
          onClick={() => setActive(link.id)}
        >
          <a
            className={`w-8 h-px mr-4  ${
              active === link.id
                ? "bg-white"
                : "bg-gray-600 group-hover:bg-gray-400"
            }`}
          ></a>
          <a
            className={`text-sm font-medium tracking-widest transition-colors duration-400 ${
              active === link.id
                ? "text-white"
                : "text-gray-400 group-hover:text-gray-200"
            }`}
          >
            {link.label}
          </a>
        </nav>
      ))}
    </div>
  );
};

export default NavBar;
