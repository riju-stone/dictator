import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { setUserLogOutState } from "../slices/userSlice";

import {
  currentUserName,
  currentUserEmail,
  currentUserImage,
} from "../slices/userSlice";
import NoteList from "../components/NoteList";
import Sidebar from "../components/Sidebar";
import { currentTheme } from "../slices/themeSlice";

const Home = () => {
  const dispatch = useDispatch();

  const userName = useSelector(currentUserName);
  const userEmail = useSelector(currentUserEmail);
  const userImage = useSelector(currentUserImage);

  const themeState = useSelector(currentTheme);

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
    <div className="select-none flex flex-row justify-center">
      <Sidebar />
      <NoteList />
    </div>
  );
};

export default Home;
