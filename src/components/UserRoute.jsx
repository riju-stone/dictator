import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const UserRoute = ({ children, ...rest }) => {
  const { currentUser } = useSelector((state) => ({ ...state.user }));

  return currentUser ? <Route {...rest} /> : <Loader />;
};

export default UserRoute;
