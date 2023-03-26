import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        allUsers: [],
        allManufacturers: [],
        allManufacturersCol: [],
        allManufacturersSubst: [],
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
            if(action.payload)state.allManufacturers = action.payload;
        } ,
        allManufacturersColCh: (state, action) => {
            if(action.payload)state.allManufacturersCol = action.payload;
        } ,
        allManufacturersSubstCh: (state, action) => {
            if(action.payload)state.allManufacturersSubst = action.payload;
        } ,
        allRsTypesCh: (state, action) => {
            if(action.payload)state.allRsTypes = action.payload
        },
        allDepartmentsCh: (state, action) => {
            if(action.payload)state.allDepartments = action.payload
        },
        allDirectionsCh: (state, action) => {
            if(action.payload)state.allDirections = action.payload
        },
        allPositionsCh: (state, action) => {
            if(action.payload)state.allPositions = action.payload
        },
        allRolesCh: (state, action) => {
            if(action.payload)state.allRoles = action.payload
        },
        serviceCh: (state, action) => {
            state.service = action.payload
        }
    }
});

export const { allManufacturersCh, allUsersCh, allRsTypesCh, allDepartmentsCh, allDirectionsCh, allPositionsCh, allRolesCh, serviceCh, allManufacturersColCh, allManufacturersSubstCh } = globalSlice.actions;
export default globalSlice.reducer;

