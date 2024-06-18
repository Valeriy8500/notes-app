import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState, INote, INoteDataForPayloadAction } from "../../types/types";

const initialState: IInitialState = {
  elements: [],
  confirmDeleteModalState: false,
  idSelectedNotes: []
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

      state.idSelectedNotes = [action.payload.id];
    },
    saveNote(state, action: PayloadAction<INoteDataForPayloadAction>) {
      const newNoteName = action.payload.content[0].children[0].text;

      state.elements = state.elements.map(item =>
        item.id === action.payload.id
          ? { ...item, content: action.payload.content, noteName: newNoteName }
          : item
      );
    },
    deleteNote(state) {
      state.elements = state.elements.filter(item => item.id !== state.idSelectedNotes[0]);
    },
    toogleConfirmDeleteModal(state) {
      state.confirmDeleteModalState = !state.confirmDeleteModalState;
    },
    clipNote(state) {
      const selectedElement = state.elements.find(item => item.id === state.idSelectedNotes[0]);
      
      if (selectedElement) {
        state.elements = [
          {...selectedElement, isClip: true},
          ...state.elements.filter(item => item.id !== state.idSelectedNotes[0])
        ];
      }
    },
  },
});
