import React, { useEffect } from "react";
import { googleSignInInitate } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { currentUser } = useSelector((state) => ({ ...state.user }));

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitate());
  };

  useEffect(() => {
    if (currentUser) {
      history("/");
    }
  }, [currentUser, history]);

  return (
    <div>
      <div className="form">
        <div className="social-login">
          <button className="" type="buttom" onClick={handleGoogleSignIn}>
            <span>Sign In with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
