import * as types from "./actionTypes";
import { auth, googleAuthProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const googleSignInInitate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => {
        dispatch(googleSignInFail(error.message));
      });
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    signOut(auth)
      .then((res) => {
        dispatch(logoutSuccess());
      })
      .catch((error) => {
        dispatch(logoutFail(error.message));
      });
  };
};
