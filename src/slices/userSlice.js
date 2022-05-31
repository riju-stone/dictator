import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
  userImage: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userImage = action.payload.userImage;
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userImage = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export const currentUserName = (state) => state.user.userName;
export const currentUserEmail = (state) => state.user.userEmail;
export const currentUserImage = (state) => state.user.userImage;
export default userSlice.reducer;
