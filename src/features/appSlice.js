import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    notes: [],
    content: null,
    date: null,
    id: null,
    query: '',
  },
  reducers: {
    addNote(state, action) {
      state.notes = [...state.notes, action.payload];
    },
    removeNote(state, action) {
      const notes = [...state.notes];
      for (const note in notes) {
        if (notes[note].id === action.payload.id) {
          notes.splice(note, 1);
        }
      }
      state.notes = notes;
    },
    updateGlobalQuery(state, action) {
      state.query = action.payload.query;
    },
  },
});

export const { addNote, removeNote, updateGlobalQuery } = appSlice.actions;

export const selectNotes = (state) => [...state.app.notes];
export const selectQuery = (state) => state.app.query;

export default appSlice.reducer;
