import { createSlice } from "@reduxjs/toolkit";


const activeColumnSlice = createSlice({
    name: 'activeColumn',
    initialState: {
        _id: '',
        type: '', // 'gc', 'hplc'
        itemId: '',
        name: '',
        cat: '',
        lot: '',
        sn: '',
        manufacturer: '',
        totalInj: null,
        restSolvent: '',
        descr: '',
        status: '',
        passport: '',
        pressureLimit: '',
        isolate: false,
        isolateDate: null,
        mainSubstance: '',
        mainProject: {},
        current: {},
        inUse: [],
        price: null,
        fromDate: null,
        
    },
    reducers: {
        activeColumnCh: (state, action) => {state._id = action.payload} ,
        columnFill: (state, action) => {
            state.type = action.payload.CAS
            state.itemId = action.payload.itemId
            state.name = action.payload.name
            state.cat = action.payload.cat
            state.lot = action.payload.lot
            state.sn = action.payload.sn
            state.totalInj = action.payload.totalInj
            state.restSolvent = action.payload.restSolvent
            state.descr = action.payload.descr
            state.status = action.payload.status
            state.passport = action.payload.passport
            state.pressureLimit = action.payload.pressureLimit
            state.isolate = action.payload.isolate
            state.manufacturer = action.payload.manufacturer
            state.isolateDate = action.payload.isolateDate
            state.price = action.payload.price
            state.restUnits = action.payload.restUnits
            state.standartType = action.payload.standartType
            state.mainSubstance = action.payload.mainSubstance
            state.mainProject = action.payload.mainProject
            state.current = action.payload.current
            state.inUse = action.payload.inUse
            state.fromDate = action.payload.fromDate
        },
        inUseCh: (state, action) => {
            state.inUse = action.payload
        },
        columnReset: (state) => {
            state._id = ''
            state.type = ''
            state.itemId = ''
            state.name = ''
            state.cat = ''
            state.lot = ''
            state.sn = ''
            state.totalInj = null
            state.restSolvent = ''
            state.descr = ''
            state.status = ''
            state.passport = ''
            state.pressureLimit = ''
            state.isolate = false
            state.manufacturer = ''
            state.isolateDate = null
            state.price = null
            state.restUnits = ''
            state.standartType = ''
            state.mainSubstance = ''
            state.mainProject = {}
            state.current = {}
            state.inUse = []
            state.fromDate = null
    
        } ,
        
    }
});

export const { activeColumnCh, columnFill, columnReset, inUseCh } = activeColumnSlice.actions;
export default activeColumnSlice.reducer;

