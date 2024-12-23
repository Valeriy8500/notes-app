import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState, INote, INoteDataForPayloadAction } from "../../types/types";
import { getCurrDateTime } from "../../shared/shared-functions";

const initialState: IInitialState = {
  elements: [],
  confirmDeleteModalState: false,
  colorPaletteState: false,
  idSelectedNotes: [],
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
      const editElement = state.elements.find(item => item.id === action.payload.id);

      if (editElement) {
        const isContentChanged = JSON.stringify(editElement.content) !== JSON.stringify(action.payload.content);

        const updatedElement = {
          ...editElement,
          content: action.payload.content,
          noteName: newNoteName,
          currDateTime: editElement.currDateTime ? editElement.currDateTime : getCurrDateTime(),
          lastEditDateTime: isContentChanged && editElement.currDateTime ? getCurrDateTime() : null
        };

        if (updatedElement.isClip) {
          state.elements = state.elements.map(item =>
            item.id === action.payload.id ? updatedElement : item
          );
        } else {
          const pinnedNotes = state.elements.filter(item => item.isClip);
          const unpinnedNotes = state.elements.filter(
            item => !item.isClip && item.id !== action.payload.id
          );

          state.elements = [...pinnedNotes, updatedElement, ...unpinnedNotes];
        }
      }
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
          { ...selectedElement, isClip: true },
          ...state.elements.filter(item => item.id !== state.idSelectedNotes[0]),
        ];
      }
    },
    unClipNote(state, action: PayloadAction<string>) {
      const unClipElement = state.elements.find(item => item.id === action.payload);

      if (unClipElement) {
        const updatedElement = { ...unClipElement, isClip: false };
        const pinnedNotes = state.elements.filter(
          item => item.isClip && item.id !== action.payload
        );
        const unpinnedNotes = state.elements.filter(item => !item.isClip);

        state.elements = [...pinnedNotes, updatedElement, ...unpinnedNotes];
      }
    },
    toogleColorPalette(state) {
      state.colorPaletteState = !state.colorPaletteState;
    },
    addNoteColor(state, action: PayloadAction<string>) {
      const editElement = state.elements.find(item => item.id === state.idSelectedNotes[0]);

      if (editElement) {
        const updatedElement = { ...editElement, bg: action.payload };

        state.elements = state.elements.map(item =>
          item.id === updatedElement.id ? updatedElement : item
        );
      }
    },
    toogleHighPriority(state, action: PayloadAction<string>) {
      state.elements = state.elements.map(item =>
        item.id === action.payload ? { ...item, highPriority: !item.highPriority } : item
      );
    },
  },
});
