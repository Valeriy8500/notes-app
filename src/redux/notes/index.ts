import { notesSlice } from "./notes.slice";

export const notesSliceReducer = notesSlice.reducer;

export const { addNote, selectNote } = notesSlice.actions;
