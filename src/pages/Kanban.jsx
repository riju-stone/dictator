import React from "react";
import { useSelector } from "react-redux";
import { currentTheme } from "../slices/themeSlice";

const Kanban = () => {
  const themeState = useSelector(currentTheme);
  return (
    <div
      className={`flex w-[94%] mt-9 ${
        themeState.theme === "dark" ? "bg-[#08243d]" : " bg-slate-100"
      }`}
    >
      Kanban Board
    </div>
  );
};

export default Kanban;
