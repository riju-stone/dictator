import { createSlice } from "react-redux";

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
    addNote: (state, action) => {},
    deleteNote: (state, action) => {},
  },
});
