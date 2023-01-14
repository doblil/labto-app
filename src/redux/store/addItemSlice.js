import { createSlice } from "@reduxjs/toolkit";


const addItemSlice = createSlice({
    name: 'addItem',
    initialState: {
        type: '', 
        standartType: '',
        itemId: '',
        name: '',
        CAS: '',
        cat: '',
        lot: '',
        manufacturer: '',
        fromDate: null,
        toDate: null,
        units: '',
        container: null,
        passport: [],
        SDS: '',
        TDS: '',
        warn: [],
        price: null,
        location: '',

    

    },
    reducers: {
        addTypeCh: (state, action) => {state.type = action.payload},
        addStandartTypeCh: (state, action) => {state.standartType = action.payload},
        addItemIdCh: (state, action) => {state.itemId = action.payload},
        addCatCh: (state, action) => {state.cat = action.payload},
        addCASCh: (state, action) => {state.CAS = action.payload},
        addLotCh: (state, action) => {state.lot = action.payload},
        addManufacturerCh: (state, action) => {state.manufacturer = action.payload},
        addFromDateCh: (state, action) => {state.fromDate = action.payload},
        addToDateCh: (state, action) => {state.toDate = action.payload},
        addUnitsCh: (state, action) => {state.units = action.payload},
        addContainerCh: (state, action) => {state.container = action.payload},
        addPassportCh: (state, action) => {state.passport = action.payload},
        addSDSCh: (state, action) => {state.SDS = action.payload},
        addTDSCh: (state, action) => {state.TDS = action.payload},
        addWarnCh: (state, action) => {state.warn = action.payload},
        addPriceCh: (state, action) => {state.price = action.payload},
        addLocationCh: (state, action) => {state.location = action.payload},
        
        addItemReset: (state) => {
            state.type = ''; // 'rs', 'subst', 'reag;
            state.standartType = '';
            state.itemId = '';
            state.name = '';
            state.CAS = '';
            state.cat = '';
            state.lot = '';
            state.manufacturer = '';
            state.fromDate = Date;
            state.toDate = Date;
            state.units = '';
            state.container = null;
            state.passport = [];
            state.SDS = '';
            state.TDS = '';
            state.warn = [];
            state.price = null;


        } 
        
    }
});

export const { addItemReset, addCASCh, addCatCh, addContainerCh, addFromDateCh, addItemIdCh, addLotCh,
addManufacturerCh, addPassportCh, addPriceCh, addSDSCh, addStandartTypeCh, addTDSCh, 
addToDateCh, addTypeCh, addUnitsCh, addWarnCh, addLocationCh } = addItemSlice.actions;
export default addItemSlice.reducer;

