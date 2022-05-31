import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { setUserLogOutState } from "../slices/userSlice";

import {
  currentUserName,
  currentUserEmail,
  currentUserImage,
  setActiveUser,
} from "../slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  const userName = useSelector(currentUserName);
  const userEmail = useSelector(currentUserEmail);
  const userImage = useSelector(currentUserImage);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((error) => {
        dispatch(alert(error.message));
      });
  };

  return (
    <div>
      <h1 className="">Home</h1>
      <h2>Welcome {userName}</h2>
      <h2>Welcome {userEmail}</h2>
      <img src={userImage} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
