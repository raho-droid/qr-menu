import React from "react";
import { FaBars } from "react-icons/fa";

export const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="w-full p-3 shadow-md flex items-center gap-4 px-4">
      <button onClick={toggleSidebar}>
        <FaBars size={20} />
      </button>
      <div className="w-full flex justify-center">
        <h3 className="text-xl font-bold tracking-wide">Rubba Cafe</h3>
      </div>
    </div>
  );
};
