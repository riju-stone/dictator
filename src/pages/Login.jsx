import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  currentUserName,
  currentUserEmail,
  currentUserImage,
  setActiveUser,
} from "../slices/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector(currentUserName);
  const userEmail = useSelector(currentUserEmail);
  const userImage = useSelector(currentUserImage);

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
        alert(error.message);
      });
  };

  useEffect(() => {
    if (userName) {
      navigate("/");
    }
  }, [userName, navigate]);

  return (
    <div>
      <div className="form">
        <div className="social-login">
          <button className="" type="buttom" onClick={handleSignIn}>
            <span>Sign In with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
