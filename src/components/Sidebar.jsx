import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentTheme } from "../slices/themeSlice";
import { currentUserImage } from "../slices/userSlice";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { setUserLogOutState } from "../slices/userSlice";
import {
  LogoutIcon,
  ClipboardCheckIcon,
  PencilAltIcon,
  CalendarIcon,
  CogIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import UserLogo from "../assets/images/user.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const dispatch = useDispatch();
  const themeState = useSelector(currentTheme);
  const userImage = useSelector(currentUserImage);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((error) => {
        dispatch(console.log(error.message));
      });
  };

  return (
    <div
      className={`h-screen w-[6%] shadow-lg flex flex-col ${
        themeState.theme === "dark" ? "bg-[#06131f]" : " bg-slate-200"
      }`}
    >
      <div className=" h-full mt-10 flex flex-col justify-between items-center align-top">
        <div className="flex flex-col">
          <Link to="/">
            <button
              className={`h-7 w-7 text-white my-3 ${
                themeState.theme === "dark"
                  ? "text-[#ececec]"
                  : "text-[#444444]"
              }`}
            >
              <PencilAltIcon className="hover:scale-[1.2] transition ease-in" />
            </button>
          </Link>
          <Link to="/kanban">
            <button
              className={`h-7 w-7 text-white my-3 ${
                themeState.theme === "dark"
                  ? "text-[#ececec]"
                  : "text-[#444444]"
              }`}
            >
              <ClipboardCheckIcon className="hover:scale-[1.2] transition ease-in" />
            </button>
          </Link>
          <Link to="/journal">
            <button
              className={`h-7 w-7 text-white my-3 ${
                themeState.theme === "dark"
                  ? "text-[#ececec]"
                  : "text-[#444444]"
              }`}
            >
              <BookOpenIcon className="hover:scale-[1.2] transition ease-in" />
            </button>
          </Link>
          <Link to="/calendar">
            <button
              className={`h-7 w-7 text-white my-3 ${
                themeState.theme === "dark"
                  ? "text-[#ececec]"
                  : "text-[#444444]"
              }`}
            >
              <CalendarIcon className="hover:scale-[1.2] transition ease-in" />
            </button>
          </Link>
        </div>

        <div className="flex flex-col">
          <Link to="/settings">
            <button
              className={`h-7 w-7 text-white my-3 ${
                themeState.theme === "dark"
                  ? "text-[#ececec]"
                  : "text-[#444444]"
              }`}
            >
              <CogIcon className="hover:scale-[1.2] transition ease-in" />
            </button>
          </Link>
          <button
            className={`h-7 w-7 text-white my-3 ${
              themeState.theme === "dark" ? "text-[#ececec]" : "text-[#444444]"
            }`}
            onClick={handleLogout}
          >
            <LogoutIcon className="hover:scale-[1.2] transition ease-in" />
          </button>
          <Link to="/account">
            <img
              className="h-8 w-8 rounded-full shadow-xl my-3 hover:scale-[1.2] transition ease-in"
              src={userImage || UserLogo}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
