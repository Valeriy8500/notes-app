import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    elements: [],
};

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<any>) {
            state.elements.push(action.payload);
        },
    }
});