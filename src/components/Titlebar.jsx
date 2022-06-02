import React, { useEffect } from "react";
import { appWindow } from "@tauri-apps/api/window";
import Logo from "../assets/images/logo.png";
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
      className={`w-full h-9 flex fixed flex-row justify-between items-center align-middle select-none z-20 p-0 ${
        themeState.theme === "dark" ? "bg-[#06131f]" : " bg-slate-200"
      }`}
    >
      <div className="flex flex-row">
        <img src={Logo} alt="" className="h-6 w-6 mx-2" />
        <span
          className={`font-bold font-kobe text-lg ${
            themeState.theme === "dark" ? "text-[#ececec]" : "text-[#06131f]"
          } uppercase`}
        >
          Dictator
        </span>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="titlebar-theme border-0 outline-none py-2 px-3 m-0"
          onClick={handleThemeChange}
        >
          {themeState.theme === "dark" ? (
            <MoonIcon className="text-white h-5 w-5 hover:scale-[1.2] transition ease-in" />
          ) : (
            <SunIcon className="text-[#06131f] h-5 w-5 hover:scale-[1.2] transition ease-in" />
          )}
        </button>
        <button className="titlebar-minimize border-0 outline-none py-2 px-3 hover:bg-slate-500">
          <MinusIcon
            className={`h-5 w-5 ${
              themeState.theme === "dark" ? "text-[#ececec]" : "text-[#06131f]"
            }`}
          />
        </button>

        <button className="titlebar-close border-0 outline-none py-2 px-3 hover:bg-red-500">
          <XIcon
            className={` h-5 w-5 ${
              themeState.theme === "dark" ? "text-[#ececec]" : "text-[#06131f]"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Titlebar;
