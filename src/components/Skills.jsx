import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconSkills from "../utils/iconsSkills";
import React from "react";

const Skills = () => {
  return (
    <div className="w-65 max-w-md">
      <h1 className="text-2xl text-[#64ffda] mb-4">Skills</h1>
      <ul className="grid grid-cols-6 gap-5">
        {iconSkills.map(({ icon, color, name, type }) => (
          <li key={name} title={name} className="flex justify-center">
            {type === "fontawesome" ? (
              <FontAwesomeIcon icon={icon} size="2x" color={color} />
            ) : (
              React.createElement(icon, { size: "2em", color })
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
