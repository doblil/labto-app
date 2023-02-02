import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        allUsers: [],
        allManufacturers: [],
        allRsTypes:[]
    },
    reducers: {
        allUsersCh: (state, action) => {
            state.allUsers = action.payload;
        },
        allManufacturersCh: (state, action) => {
            state.allManufacturers = action.payload;
        } ,
        allRsTypesCh: (state, action) => {
            state.allRsTypes = action.payload
        }
    }
});

export const { allManufacturersCh, allUsersCh, allRsTypesCh } = globalSlice.actions;
export default globalSlice.reducer;

