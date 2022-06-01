import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      if (state.theme === "light") state.theme = "dark";
      else state.theme = "light";
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const currentTheme = (state) => state.theme;
export default themeSlice.reducer;
