import React, { useEffect } from "react";
import { appWindow } from "@tauri-apps/api/window";
import Logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { currentTheme, setTheme } from "../slices/themeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { MinusIcon, XIcon, ArrowsExpandIcon } from "@heroicons/react/outline";

const Titlebar = () => {
  const dispatch = useDispatch();
  let themeState = useSelector(currentTheme);

  useEffect(() => {
    document
      .querySelector(".titlebar-minimize")
      .addEventListener("click", () => appWindow.minimize());
    document
      .querySelector(".titlebar-maximize")
      .addEventListener("click", () => appWindow.maximize());
    document
      .querySelector(".titlebar-close")
      .addEventListener("click", () => appWindow.close());

    console.log(themeState);
  }, [themeState]);

  const handleThemeChange = () => {
    dispatch(setTheme());
  };

  return (
    <div
      data-tauri-drag-region
      className={`w-full flex fixed flex-row justify-between p-2 select-none z-20 ${
        themeState.theme === "dark" ? "bg-[#06131f]" : " bg-slate-200"
      }`}
    >
      <div className="flex flex-row">
        <img src={Logo} alt="" className="h-6 w-6 mx-2" />
        <span
          className={`font-bold mt-0 ${
            themeState.theme === "dark" ? "text-[#ececec]" : "text-[#06131f]"
          } uppercase`}
        >
          Dictator
        </span>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="titlebar-theme border-0 outline-none mx-2 h-5 w-5"
          onClick={handleThemeChange}
        >
          {themeState.theme === "dark" ? (
            <MoonIcon className="text-white" />
          ) : (
            <SunIcon className="text-[#06131f]" />
          )}
        </button>
        <button className="titlebar-minimize border-0 outline-none mx-2 h-5 w-5">
          <MinusIcon
            className={`${
              themeState.theme === "dark" ? "text-[#ececec]" : "text-[#06131f]"
            }`}
          />
        </button>
        <button className="titlebar-maximize border-0 outline-none mx-2 h-5 w-5">
          <ArrowsExpandIcon
            className={`${
              themeState.theme === "dark" ? "text-[#ececec]" : "text-[#06131f]"
            }`}
          />
        </button>
        <button className="titlebar-close border-0 outline-none mx-2 h-5 w-5">
          <XIcon
            className={`${
              themeState.theme === "dark" ? "text-[#ececec]" : "text-[#06131f]"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Titlebar;
