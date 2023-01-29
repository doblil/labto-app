import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        name: '',
        manufacturer: '',
        cat: '',
        type: '',
        text: '',
        addresseeName: '',
        messageText: '',
        initialDestination: '',
    },
    reducers: {
        orderNameCh: (state, action) => {state.name = action.payload},
        orderTypeCh: (state, action) => {state.type = action.payload},
        orderTextCh: (state, action) => {state.text = action.payload},
        orderAddresseeNameCh: (state, action) => {state.addresseeName = action.payload},
        orderMessageTextCh: (state, action) => {state.messageText = action.payload},
        orderDestinationCh: (state, action) => {state.initialDestination = action.payload},
        orderManufacturerCh: (state, action) => {state.manufacturer = action.payload},
        orderCatCh: (state, action) => {state.cat = action.payload},
        orderReset: (state) => {
            state.name = ''
            state.type = '';
            state.text = '';
            state.addresseeName = '';
            state.messageText = '';  
            state.manufacturer = '';
            state.cat = '';      
        } 
    }
});

export const { orderAddresseeNameCh, orderMessageTextCh, orderNameCh, orderReset, orderTextCh, orderTypeCh,orderCatCh,orderDestinationCh,orderManufacturerCh  } = orderSlice.actions;
export default orderSlice.reducer;


