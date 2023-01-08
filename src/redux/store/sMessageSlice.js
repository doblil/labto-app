import { createSlice } from "@reduxjs/toolkit";

const sMessageSlice = createSlice({
    name: 'sMessage',
    initialState: {
        sMessage: ''
    },
    reducers: {
        sMessageCh: (state, action) => {
            state.sMessage = action.payload
        } 
    }
});

export const { sMessageCh } = sMessageSlice.actions;
export default sMessageSlice.reducer;

export const selectCurrentMessage = (state) => state.sMessage.sMessage 