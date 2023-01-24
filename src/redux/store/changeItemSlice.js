import { createSlice } from "@reduxjs/toolkit";


const changeItemSlice = createSlice({
    name: 'changeItem',
    initialState: {
        itemId: '',
        name: '',
        CAS: '',
        cat: '',
        lot: '',
        manufacturer: '',
        passport: [],
        TDS: '',
        warn: [],
        price: '',
        location: '',
        cahnged: false
    

    },
    reducers: {
        addTypeCh: (state, action) => {state.type = action.payload},
        addStandartTypeCh: (state, action) => {state.standartType = action.payload},
        addItemIdCh: (state, action) => {state.itemId = action.payload},
        addNameCh: (state, action)=>{state.name = action.payload},
        addCatCh: (state, action) => {state.cat = action.payload},
        addCASCh: (state, action) => {state.CAS = action.payload},
        addLotCh: (state, action) => {state.lot = action.payload},
        addManufacturerCh: (state, action) => {state.manufacturer = action.payload},
        addFromDateCh: (state, action) => {state.fromDate = action.payload.toString()},
        addToDateCh: (state, action) => {state.toDate = action.payload.toString()},
        addUnitsCh: (state, action) => {state.units = action.payload},
        addContainerCh: (state, action) => {state.container = action.payload},
        addPassportCh: (state, action) => {state.passport = action.payload},
        addSDSCh: (state, action) => {state.SDS = action.payload},
        addTDSCh: (state, action) => {state.TDS = action.payload},
        addWarnCh: (state, action) => {state.warn = action.payload},
        addPriceCh: (state, action) => {state.price = action.payload},
        addLocationCh: (state, action) => {state.location = action.payload},
        
        
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


        
    }
});

export const { } = changeItemSlice.actions;
export default changeItemSlice.reducer;

