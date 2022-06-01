import React, { useEffect } from "react";
import { appWindow } from "@tauri-apps/api/window";

const Titlebar = () => {
  useEffect(() => {
    document
      .querySelector(".titlebar-minimize")
      .addEventListener("click", () => appWindow.minimize());
    document
      .querySelector(".titlebar-close")
      .addEventListener("click", () => appWindow.close());
  }, []);

  return (
    <div
      data-tauri-drag-region
      className="w-full flex flex-row justify-between bg-slate-400 p-2"
    >
      <div className="">Dictator</div>
      <div className="flex flex-row justify-center">
        <button className="titlebar-minimize border-0 outline-none mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>
        <button className="titlebar-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Titlebar;
