import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { notesSlice } from "./notes/notes.slice";
import { notesSliceReducer } from "./notes";

export const rootReducer = combineReducers({
    [notesSlice.name]: notesSliceReducer
  });

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;