import { createSlice } from "@reduxjs/toolkit";


const addColumnSlice = createSlice({
    name: 'addColumn',
    initialState: {
        type: '', 
        itemId: '',
        name: '',
        cat: '',
        lot: '',
        sn: '',
        manufacturer: '',
        totalInj: 0,
        restSolvent: '',
        descr: '',
        passport: '',
        pressureLimit: '',
        mainSubstance: '',
        mainProject: {}, 
        initialDestination: {},
        price: 0,
        fromDate:  null,

    },
    reducers: {
        addColTypeCh: (state, action) => {state.type = action.payload},
        addColItemIdCh: (state, action) => {state.itemId = action.payload},
        addColNameCh: (state, action)=>{state.name = action.payload},
        addColCatCh: (state, action) => {state.cat = action.payload},
        addColLotCh: (state, action) => {state.lot = action.payload},
        addColSnCh: (state, action) => {state.sn = action.payload},
        addColManufacturerCh: (state, action) => {state.manufacturer = action.payload},
        addColTotalInjCh: (state, action) => {state.totalInj = action.payload},
        addColRestSolventCh: (state, action) => {state.restSolvent = action.payload},
        addColDescrCh: (state, action) => {state.descr = action.payload},
        addColPassportCh: (state, action) => {state.passport = action.payload},
        addColPressureLimitCh: (state, action) => {state.pressureLimit = action.payload},
        addColMainSubstanceCh: (state, action) => {state.mainSubstance = action.payload},
        addColMainProjectCh: (state, action) => {state.mainProject = action.payload},
        addColInitialDestinationCh: (state, action) => {state.initialDestination = action.payload},
        addColPriceCh: (state, action) => {state.price = action.payload},
        addColFromDateCh: (state,action) => {state.fromDate  = action.payload},
        
        addColCreateSame: (state, action) => {
            const {type, name, cat, manufacturer ,descr, pressureLimit, mainSubstance} = action.payload;
            state.cat = cat;
            state.type = type;
            state.name = name;
            state.manufacturer = manufacturer;
            state.descr = descr;
            state.pressureLimit = pressureLimit;
            state.mainSubstance = mainSubstance;
        },

        addColReset: (state) => {
            state.type = '';
            state.itemId = '';
            state.name = '';
            state.cat = '';
            state.lot = '';
            state.sn = '';
            state.manufacturer = '';
            state.totalInj = 0;
            state.restSolvent = '';
            state.descr = '';
            state.passport = '';
            state.pressureLimit = '';
            state.mainSubstance = '';
            state.mainProject = {};
            state.initialDestination = {};
            state.price = 0;
            state.fromDate = null;
        }, 
  
    }
});

export const { addColCatCh, addColCreateSame, addColDescrCh,
    addColInitialDestinationCh, addColItemIdCh, addColLotCh,
    addColMainProjectCh, addColMainSubstanceCh, addColManufacturerCh,
    addColNameCh, addColPassportCh, addColPressureLimitCh,
    addColPriceCh, addColReset, addColRestSolventCh,
    addColSnCh, addColTotalInjCh, addColTypeCh, addColFromDateCh,
} = addColumnSlice.actions;
export default addColumnSlice.reducer;

