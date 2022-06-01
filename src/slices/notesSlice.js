import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  title: "",
  content: "",
  date: new Date(),
  isEditing: false,
  isSaving: false,
  isDeleting: false,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.date = action.payload.date;
    },
    deleteNote: (state, action) => {
      state.id = null;
      state.title = "";
      state.content = "";
      state.date = new Date();
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
