import { createSlice } from "@reduxjs/toolkit";


const changeColumnSlice = createSlice({
    name: 'changeColumn',
    initialState: {
        itemId: '',
        name: '',
        descr: '',
        mainProject: {
            code: '',
            name: '',
        },
        restSolvent: '',
        pressureLimit: '',
        price: '',

    },
    reducers: {

        chColDescrCh: (state, action) => {state.descr = action.payload},
        chColMainProjectCh: (state, action) => {state.mainProject = action.payload},
        chColRestSolventCh: (state, action) => {state.restSolvent = action.payload},
        chColPressureLimitCh: (state, action) => {state.pressureLimit = action.payload},
        chColPriceCh: (state, action) => {state.price = action.payload},
        changeColFill: (state, action) => {
            const { passport, descr, mainProject, itemId, restSolvent, pressureLimit, price } = action.payload;
            state.itemId = itemId;
            state.descr = descr;
            state.mainProject = mainProject;
            state.restSolvent = restSolvent;
            state.pressureLimit = pressureLimit;
            state.passport = passport;
            state.price = price;
        },

        changeColReset: (state) => {
            state.itemId = ''
            state.CAS = '';
            state.SDS = '';
            state.TDS = '';
            state.name = '';
            state.warn = [];
            state.location = '';
            state.passport = '';
            state.price = '';
        }


        
    }
});

export const { chColDescrCh, chColMainProjectCh, chColPressureLimitCh, chColPriceCh, chColRestSolventCh, changeColFill, changeColReset } = changeColumnSlice.actions;
export default changeColumnSlice.reducer;


