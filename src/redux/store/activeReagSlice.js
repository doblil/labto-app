import { createSlice } from "@reduxjs/toolkit";


const activeReagentSlice = createSlice({
    name: 'activeReagent',
    initialState: {
        _id: '',
        type: '', // 'rs', 'subst', 'reag'
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
        restUnits: null,
        container: null,
        passport: [],
        SDS: '',
        TDS: '',
        inUse: [],
        warn: [],
        price: null,
        isolate: false,
        creator: '',
        isolateDate: null,
        location: '',
    },
    reducers: {
        activeReagentCh: (state, action) => {state._id = action.payload} ,
        reagentFill: (state, action) => {
            state.CAS = action.payload.CAS
            state.SDS = action.payload.SDS
            state.TDS = action.payload.TDS
            state.isolate = action.payload.isolate
            state.carantinDate = action.payload.carantinDate
            state.cat = action.payload.cat
            state.container = action.payload.container
            state.creator = action.payload.creator
            state.fromDate = action.payload.fromDate
            state.inUse = action.payload.inUse
            state.itemId = action.payload.itemId
            state.location = action.payload.location
            state.lot = action.payload.lot
            state.manufacturer = action.payload.manufacturer
            state.name = action.payload.name
            state.passport = action.payload.passport
            state.price = action.payload.price
            state.restUnits = action.payload.restUnits
            state.standartType = action.payload.standartType
            state.toDate = action.payload.toDate
            state.type = action.payload.type
            state.units = action.payload.units
            state.warn = action.payload.warn
        },
        inUseCh: (state, action) => {
            state.inUse = action.payload
        },
        reagentReset: (state) => {
            state._id =  '';
            state.type = ''; // 'rs', 'subst', 'reag;
            state.standartType = '';
            state.itemId = '';
            state.name = '';
            state.CAS = '';
            state.cat = '';
            state.lot = '';
            state.manufacturer = '';
            state.fromDate = null;
            state.toDate = null;
            state.units = '';
            state.restUnits = null;
            state.container = null;
            state.passport = [];
            state.SDS = '';
            state.TDS = '';
            state.inUse = [];
            state.warn = [];
            state.price = null;
            state.isolate = false;
            state.creator = '';
            state.carantinDate = null;
            state.location = '';
    
        } 
        
    }
});

export const { reagentFill, reagentReset, activeReagentCh, inUseCh } = activeReagentSlice.actions;
export default activeReagentSlice.reducer;

