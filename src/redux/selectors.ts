import { RootState } from "./store";

export const selectorNotes = (state: RootState): any => (
    state.notes.elements
);