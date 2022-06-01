import React from "react";
import { useSelector } from "react-redux";
import { currentTheme } from "../slices/themeSlice";

const NoteList = () => {
  const themeState = useSelector(currentTheme);
  return (
    <div
      className={`flex w-[94%] ${
        themeState.theme === "dark" ? "bg-[#0e3253]" : " bg-slate-100"
      }`}
    >
      NoteList
    </div>
  );
};

export default NoteList;
