import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: [],

    },
    reducers: {
        projectsCh: (state, action) => {
            state.projects = action.payload
        } 
    }
});

export const { projectsCh } = projectSlice.actions;
export default projectSlice.reducer;

