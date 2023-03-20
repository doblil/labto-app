import { createSlice } from "@reduxjs/toolkit";

const sMessageSlice = createSlice({
    name: 'sMessage',
    initialState: {
        sMessage: '',
        arrM: [],
    },
    reducers: {
        // sMessageCh: (state, action) => {
        //     state.sMessage = action.payload
        // },
        sMessageCh: (state, action) => {
            if (!state.arrM.includes(action.payload)){
               state.arrM = [action.payload, ...state.arrM] 
            }
        },
        filterArrM: (state, action) => {
            state.arrM = state.arrM.filter(item=> item !== action.payload)
        } 
    }
});

export const { sMessageCh, filterArrM } = sMessageSlice.actions;
export default sMessageSlice.reducer;

export const selectCurrentMessage = (state) => state.sMessage.sMessage 