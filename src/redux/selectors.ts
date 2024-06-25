import { INote } from "../types/types";
import { RootState } from "./store";

export const selectorNotes = (state: RootState): INote[] => state.notes.elements;
export const selectorDeleteConfirmModal = (state: RootState): boolean =>
  state.notes.confirmDeleteModalState;
export const selectorColorPalette = (state: RootState): boolean =>
  state.notes.colorPaletteState;
