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
        carantin: false,
        creator: '',
        carantinDate: null,
        location: '',
    
    
        customField1: '',
        customField2: '',
        customField3: '',
        customField4: '',
        customField5: '',

    },
    reducers: {
        activeReagentCh: (state, action) => {state._id = action.payload} ,
        reagentFill: (state, action) => {
            for(let key in action.payload){
                if (key !== '_id') {state[key] = action.payload.key}
            }
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
            state.fromDate = Date;
            state.toDate = Date;
            state.units = '';
            state.restUnits = null;
            state.container = null;
            state.passport = [];
            state.SDS = '';
            state.TDS = '';
            state.inUse = [];
            state.warn = [];
            state.price = null;
            state.carantin = false;
            state.creator = '';
            state.carantinDate = null;
            state.location = '';
    
            state.customField1 = '';
            state.customField2 = '';
            state.customField3 = '';
            state.customField4 = '';
            state.customField5 = '';
        } 
        
    }
});

export const { reagentFill, reagentReset, activeReagentCh, inUseCh } = activeReagentSlice.actions;
export default activeReagentSlice.reducer;

