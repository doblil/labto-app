import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        name: '',
        type: '',
        text: '',
        addresseeName: '',
        messageText: '',
    },
    reducers: {
        orderNameCh: (state, action) => {state.CAS = action.payload},
        orderTypeCh: (state, action) => {state.SDS = action.payload},
        orderTextCh: (state, action) => {state.TDS = action.payload},
        ordderAddresseeNameCh: (state, action) => {state.passport = action.payload},
        orderMessageTextCh: (state, action) => {state.location = action.payload},
        
        orderReset: (state) => {
            state.name = ''
            state.type = '';
            state.text = '';
            state.addresseeName = '';
            state.messageText = '';        
        } 
    }
});

export const { ordderAddresseeNameCh, orderMessageTextCh, orderNameCh, orderReset, orderTextCh, orderTypeCh  } = orderSlice.actions;
export default orderSlice.reducer;


