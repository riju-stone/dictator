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
  DocumentAddIcon,
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
          <button
            className={`h-8 w-8 text-white my-5 ${
              themeState.theme === "dark" ? "text-[#ececec]" : "text-[#444444]"
            }`}
            onClick={handleLogout}
          >
            <DocumentAddIcon />
          </button>
          <button
            className={`h-8 w-8 text-white my-5 ${
              themeState.theme === "dark" ? "text-[#ececec]" : "text-[#444444]"
            }`}
            onClick={handleLogout}
          >
            <ClipboardCheckIcon />
          </button>
        </div>

        <div>
          <button
            className={`h-8 w-8 text-white my-5 ${
              themeState.theme === "dark" ? "text-[#ececec]" : "text-[#444444]"
            }`}
            onClick={handleLogout}
          >
            <LogoutIcon />
          </button>
          <Link to="/account">
            <img
              className="h-9 w-9 rounded-full shadow-xl my-5"
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
