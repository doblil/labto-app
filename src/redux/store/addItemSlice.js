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
        fromDate: '',
        toDate: '',
        units: 'g',
        container: '',
        passport: '',
        SDS: '',
        TDS: '',
        warn: [],
        price: '',
        location: '',
        cahnged: false,
        initialDestination: '',
    

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
        addInitialDestinationCh: (state, action) => {state.initialDestination = action.payload}, 

        addCreateSame: (state, action) => {
            const {type, standartType, name, CAS, cat, manufacturer, units, container, SDS, TDS, warn, location} = action.payload;
            state.standartType = standartType
            state.CAS = CAS;
            state.SDS = SDS;
            state.TDS = TDS;
            state.cat = cat;
            state.type = type;
            state.standartType = standartType;
            state.name = name;
            state.manufacturer = manufacturer;
            state.units = units;
            state.container = container;
            state.warn = warn;
            state.location = location;
        },

        addItemReset: (state) => {
            state.type = ''; // 'rs', 'subst', 'reag';
            state.standartType = '';
            state.itemId = '';
            state.name = '';
            state.CAS = '';
            state.cat = '';
            state.lot = '';
            state.manufacturer = '';
            state.fromDate = '';
            state.toDate = '';
            state.units = '';
            state.container = '';
            state.passport = '';
            state.SDS = '';
            state.TDS = '';
            state.warn = [];
            state.price = '';
            state.initialDestination = ''

        }, 

        
    }
});

export const { addItemReset, addCASCh, addCatCh, addContainerCh, addFromDateCh, addItemIdCh, addLotCh,
addManufacturerCh, addPassportCh, addPriceCh, addSDSCh, addStandartTypeCh, addTDSCh, 
addToDateCh, addTypeCh, addUnitsCh, addWarnCh, addLocationCh, addNameCh, addCreateSame, addInitialDestinationCh } = addItemSlice.actions;
export default addItemSlice.reducer;

