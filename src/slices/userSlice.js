import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null || localStorage.getItem("userName"),
  userEmail: null || localStorage.getItem("userEmail"),
  userImage: null || localStorage.getItem("userImage"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userImage = action.payload.userImage;

      localStorage.setItem("userName", state.userName);
      localStorage.setItem("userEmail", state.userEmail);
      localStorage.setItem("userImage", state.userImage);
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userImage = null;

      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userImage");
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export const currentUserName = (state) => state.user.userName;
export const currentUserEmail = (state) => state.user.userEmail;
export const currentUserImage = (state) => state.user.userImage;
export default userSlice.reducer;
