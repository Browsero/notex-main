import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    notes: [],
    content: null,
    date: null,
    id: null,
  },
  reducers: {
    addNote(state, action) {
      state.notes = [...state.notes, action.payload];
    },
  },
});

export const { addNote } = appSlice.actions;

export const selectNotes = (state) => [...state.app.notes];

export default appSlice.reducer;
