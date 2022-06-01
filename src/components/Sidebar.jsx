import React from "react";
import { useSelector } from "react-redux";
import { currentTheme } from "../slices/themeSlice";

const Sidebar = () => {
  const themeState = useSelector(currentTheme);
  return (
    <div
      className={`h-screen w-[6%] ${
        themeState.theme === "dark" ? "bg-[#06131f]" : " bg-slate-200"
      }`}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
