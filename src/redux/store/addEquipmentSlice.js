import { createSlice } from "@reduxjs/toolkit";


const addEquipmentSlice = createSlice({
    name: 'addEquipment',
    initialState: {
        itemId: '',
        type: '',
        eqName: '',
        model: '',
        manufacturer: '',
        sn: '',
        invn: '',
        respUser: {
            userId: '',
            userName: '',
        },
        deputyRespUser: {
            userId: '',
            userName: '',
        },
        status: '', // 'ready' | 'broken' | 'repair' | 'storage' | 'verification' | 'verificationExpired' | 'verificationFail'
        lastVerification: null,
        nextVerification : null,
        passport: '',
        cert: '',
        manual: '',
        currentSop: {
            version: '',
            sopName: '',
        },
        location: '',
    },
    reducers: {
        addEqStatusCh: (state, action) => {state.status = action.payload},
        addEqItemIdCh: (state, action) => {state.itemId = action.payload},
        addEqTypeCh: (state, action) => {state.type = action.payload},
        addEqNameCh: (state, action) => {state.eqName = action.payload},
        addEqModelCh: (state, action) => {state.model = action.payload},
        addEqManufacturerCh: (state, action) => {state.manufacturer = action.payload},
        addEqSnCh: (state, action) => {state.sn = action.payload},
        addEqInvnCh: (state, action) => {state.invn = action.payload},
        addEqRespUserCh: (state, action) => {state.respUser = action.payload},
        addEqDeputyRespUserCh: (state, action) => {state.deputyRespUser = action.payload},
        addEqLastVerificationCh: (state, action) => {state.lastVerification = action.payload},
        addEqNextVerificationCh: (state, action) => {state.nextVerification = action.payload},
        addEqPassportCh: (state, action) => {state.passport = action.payload},
        addEqCertCh: (state, action) => {state.cert = action.payload},
        addEqManualCh: (state, action) => {state.manual = action.payload},
        addEqCurrentSopVersionCh: (state, action) => {state.currentSop.version = action.payload},
        addEqCurrentSopNameCh: (state, action) => {state.currentSop.sopName = action.payload},
        addEqLocationCh: (state, action) => {state.location = action.payload},
        addEquipmentReset: (state) => {
            state._id = '';
            state.itemId = '';
            state.type = '';
            state.eqName = '';
            state.model = '';
            state.manufacturer = '';
            state.sn = '';
            state.invn = '';
            state.respUser = {
                userID: '',
                userName: '',
            };
            state.deputyRespUser = {
                userID: '',
                userName: '',
            };
            state.status = '';
            state.lastVerification = null;
            state.nextVerification  = null;
            state.verificationList = [];
            state.passport = '';
            state.cert = '';
            state.manual = '';
            state.troubleshooting = [];
            state.currentSop = {};
            state.sopVersions = [];
            state.trainigList =[];
            state.location = '';
    
        } 
        
    }
});

export const { addEqCertCh, addEqCurrentSopNameCh, addEqCurrentSopVersionCh, addEqDeputyRespUserCh, addEqInvnCh, addEqItemIdCh, addEqLastVerificationCh, addEqLocationCh, addEqManualCh,addEqManufacturerCh,addEqModelCh,addEqNameCh,addEqNextVerificationCh,addEqPassportCh,addEqRespUserCh,addEqSnCh,addEqStatusCh,addEqTypeCh,addEquipmentReset, } = addEquipmentSlice.actions;
export default addEquipmentSlice.reducer;

