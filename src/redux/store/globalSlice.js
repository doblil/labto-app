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
        service: false,
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
        serviceCh: (state, action) => {
            state.service = action.payload
        }
    }
});

export const { allManufacturersCh, allUsersCh, allRsTypesCh, allDepartmentsCh, allDirectionsCh, allPositionsCh, allRolesCh, serviceCh } = globalSlice.actions;
export default globalSlice.reducer;

