import { INote } from "../types/types";
import { RootState } from "./store";

export const selectorNotes = (state: RootState): INote[] => state.notes.elements;
