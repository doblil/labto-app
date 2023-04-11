import { createSlice } from "@reduxjs/toolkit";


const activeEquipmentSlice = createSlice({
    name: 'activeEquipment',
    initialState: {
        _id: '',
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
        status: '', // 'ready' | 'broken' | 'repair' | 'storage' | 'verification' | 'verificationExpired'
        lastVerification: null,
        nextVerification : null,
        verificationList: [],
        passport: '',
        cert: '',
        manual: '',
        
        troubleshooting: [],
        currentSop: {},
        sopVersions: [],
        trainigList:[],
        location: '',
    },
    reducers: {
        activeEquipmentCh: (state, action) => {state._id = action.payload} ,
        equipmentFill: (state, action) => {
            state.itemId = action.payload.itemId
            state.type = action.payload.type
            state.eqName = action.payload.eqName
            state.model = action.payload.model
            state.manufacturer = action.payload.manufacturer
            state.sn = action.payload.sn
            state.invn = action.payload.invn
            state.respUser = action.payload.respUser
            state.deputyRespUser = action.payload.deputyRespUser
            state.status = action.payload.status
            state.lastVerification = action.payload.lastVerification
            state.nextVerification = action.payload.nextVerification
            state.verificationList = action.payload.verificationList
            state.passport = action.payload.passport
            state.cert = action.payload.cert
            state.manual = action.payload.manual
            state.troubleshooting = action.payload.troubleshooting
            state.currentSop = action.payload.currentSop
            state.sopVersions = action.payload.sopVersions
            state.trainigList = action.payload.trainigList
            state.location = action.payload.location
        },
        
        equipmentReset: (state) => {
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

export const { activeEquipmentCh, equipmentFill, equipmentReset } = activeEquipmentSlice.actions;
export default activeEquipmentSlice.reducer;

