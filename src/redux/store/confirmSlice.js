import { createSlice } from "@reduxjs/toolkit";

const confirmSlise = createSlice({
    name: 'confirm',
    initialState: {
        confirmText: '',
        showConfirm: false, 
        confirm: false,

    },
    reducers: {
        showConfirmCh: (state, action) => {
            state.showConfirm = action.payload.show
            state.confirmText = action.payload.text
        }, 
        confirmCh: () => (state, action) => {
            state.confirm = action.payload
        },
        resetConfirm: (state) => {
            state.confirmText = '';
            state.showConfirm = false;
            state.confirm = false
        }
    }
});

export const { resetConfirm, showConfirmCh, confirmCh } = confirmSlise.actions;
export default confirmSlise.reducer;

