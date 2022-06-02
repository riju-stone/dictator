import React from "react";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <div className="select-none flex flex-row justify-center">
      <Sidebar />
      <NoteList />
    </div>
  );
};

export default Home;
