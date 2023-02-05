import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        allUsers: [],
        allManufacturers: [],
        allRsTypes:[],
        allDepartments:[],
        allDirections: [],
        allRoles:[],
        allPositions:[],
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
        },
        allDepartmentsCh: (state, action) => {
            state.allDepartments = action.payload
        },
        allDirectionsCh: (state, action) => {
            state.allDirections = action.payload
        },
        allPositionsCh: (state, action) => {
            state.allPositions = action.payload
        },
        allRolesCh: (state, action) => {
            state.allRoles = action.payload
        },
    }
});

export const { allManufacturersCh, allUsersCh, allRsTypesCh, allDepartmentsCh, allDirectionsCh, allPositionsCh, allRolesCh } = globalSlice.actions;
export default globalSlice.reducer;

