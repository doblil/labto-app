import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'sMessage',
    initialState: {
        projects: []
    },
    reducers: {
        projectsCh: (state, action) => {
            state.projects = action.payload
        } 
    }
});

export const { projectsCh } = projectSlice.actions;
export default projectSlice.reducer;

export const selectCurrentMessage = (state) => state.sMessage.sMessage 