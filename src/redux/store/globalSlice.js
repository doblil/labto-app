import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        allUsers: [],
        allManufacturers: [],
    },
    reducers: {
        allUsersCh: (state, action) => {
            state.allUsers = action.payload;
        },
        allManufacturersCh: (state, action) => {
            state.allManufacturers = action.payload;
        } 
    }
});

export const { allManufacturersCh, allUsersCh } = globalSlice.actions;
export default globalSlice.reducer;
