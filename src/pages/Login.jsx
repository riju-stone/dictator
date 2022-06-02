import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUserName, setActiveUser } from "../slices/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { currentTheme } from "../slices/themeSlice";
import { Player } from "@lottiefiles/react-lottie-player";

import GoogleLogo from "../assets/images/google.png";
import AppLogo from "../assets/images/logo.png";
import WireframeAnim from "../assets/animations/wireframe.json";
import EllipseAnim from "../assets/animations/ellipse.json";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector(currentUserName);
  const themeState = useSelector(currentTheme);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          setActiveUser({
            userName: result.user.displayName,
            userEmail: result.user.email,
            userImage: result.user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    if (userName) {
      navigate("/");
    }
  }, [userName, navigate]);

  return (
    <div
      className={`m-0 p-0 w-screen h-screen overflow-hidden flex flex-col justify-evenly items-center align-middle select-none ${
        themeState.theme === "dark" ? "bg-[#06131f]" : "bg-slate-100"
      }`}
    >
      <Player
        autoplay
        loop
        src={WireframeAnim}
        className="h-[200px] absolute right-8 top-20 z-0"
      ></Player>

      <Player
        autoplay
        loop
        src={EllipseAnim}
        className="h-[250px] absolute left-2 bottom-5 z-0"
      ></Player>

      <div
        className={`flex flex-col justify-center items-center align-middle absolute top-32 ${
          themeState.theme === "dark" ? "text-[#ececec]" : "text-[#06131f]"
        }`}
      >
        <img className="h-32 w-32" src={AppLogo} alt="" />
        <h1 className="text-8xl font-kobe font-semibold z-10">Dictator</h1>
        <h2 className="text-3xl font-kobe z-10">
          The Ultimate Productivity App
        </h2>
      </div>
      <button
        className={`w-2/4 p-4 rounded-md shadow-lg z-10 ${
          themeState.theme === "dark"
            ? "bg-[#ececec] bg-opacity-10"
            : "bg-[#06131f] bg-opacity-20"
        }`}
        type="buttom"
        onClick={handleSignIn}
      >
        <span
          className={`flex flex-row justify-center text-2xl font-semibold font-kobe z-10  ${
            themeState.theme === "dark" ? "text-[#ececec]" : "text-[#06131f]"
          }`}
        >
          <img src={GoogleLogo} className="h-7 w-7 mx-4" alt="" />
          Sign In with Google
        </span>
      </button>
    </div>
  );
};

export default Login;
