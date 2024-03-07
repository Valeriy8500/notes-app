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
      state.elements = state.elements.map(item =>
        item.id !== action.payload.id ? {...item, isSelected: false} : item
      );
    },
    selectNote(state, action: PayloadAction<string>) {
      state.elements = state.elements.map(item =>
        item.id === action.payload ? {...item, isSelected: true} : item
      );
    },
  },
});
