import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = () => {
    if (currentUser) dispatch(logoutInitiate);
  };

  return (
    <div>
      <h1 className="">Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
