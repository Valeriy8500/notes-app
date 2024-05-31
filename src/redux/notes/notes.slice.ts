import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState, INote } from "../../types/types";

const initialState: IInitialState = {
  elements: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<INote>) {
      state.elements.push(action.payload);
    },
    selectNote(state, action: PayloadAction<INote>) {
      state.elements = state.elements.map(item =>
        item.id === action.payload.id
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      );
    },
    saveNote(state, action: PayloadAction<any>) {
      state.elements = state.elements.map(item =>
        item.id === action.payload.id ? { ...item, content: action.payload.content } : item
      );
    },
    deleteNote(state) {
      state.elements = state.elements.filter(item =>
        item.isSelected ? false : item
      );
    },
  },
});
