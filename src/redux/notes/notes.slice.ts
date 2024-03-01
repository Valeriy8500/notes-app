import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const notesSlice = createSlice({
    name: "companies",
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<any>) {
            console.log('addNote');
        },
    }
});