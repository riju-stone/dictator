import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUserName, setActiveUser } from "../slices/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { currentTheme } from "../slices/themeSlice";

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

        localStorage.setItem("userName", result.user.displayName);
        localStorage.setItem("userEmail", result.user.email);
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
      className={`m-0 p-0 w-screen h-screen flex flex-col justify-center items-center align-middle select-none ${
        themeState.theme === "dark" ? "bg-[#06131f]" : "bg-[#ececec]"
      }`}
    >
      <button
        className={`w-2/4 p-4 rounded-md shadow-lg ${
          themeState.theme === "dark"
            ? "bg-[#ececec] bg-opacity-10"
            : "bg-[#06131f] bg-opacity-20"
        }`}
        type="buttom"
        onClick={handleSignIn}
      >
        <span
          className={`text-xl font-semibold  ${
            themeState.theme === "dark" ? "text-[#ececec]" : "text-[#06131f]"
          }`}
        >
          Sign In with Google
        </span>
      </button>
    </div>
  );
};

export default Login;
