import { createSlice } from "@reduxjs/toolkit";


const changeItemSlice = createSlice({
    name: 'changeItem',
    initialState: {
        itemId: '',
        name: '',
        CAS: '',
        passport: '',
        TDS: '',
        warn: [],
        price: '',
        location: '',
        SDS: '',
    },
    reducers: {
        chCASCh: (state, action) => {state.CAS = action.payload},
        chSDSCh: (state, action) => {state.SDS = action.payload},
        chTDSCh: (state, action) => {state.TDS = action.payload},
        chPassportCh: (state, action) => {state.passport = action.payload},
        chLocationCh: (state, action) => {state.location = action.payload},
        chPriceCh: (state, action) => {state.price = action.payload},
        chWarnCh: (state, action) => {state.warn = action.payload},
        
        changeFill: (state, action) => {
            const { passport, SDS, TDS, warn, location, price, CAS, itemId, name} = action.payload;
            state.itemId = itemId
            state.CAS = CAS;
            state.SDS = SDS;
            state.TDS = TDS;
            state.name = name;
            state.warn = warn;
            state.location = location;
            state.passport = passport;
            state.price = price;
        },

        changeReset: (state) => {
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

export const { changeFill, chCASCh, chLocationCh, chPassportCh, chPriceCh, chSDSCh, chTDSCh, chWarnCh, changeReset} = changeItemSlice.actions;
export default changeItemSlice.reducer;


