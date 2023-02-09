import { createSlice } from "@reduxjs/toolkit";


const addUserSlice = createSlice({
    name: 'addUser',
    initialState: {
        email: '',
        phone: '',
        password: '',
        name: '',
        role: '',
        position: '',
        department: '',
        direction: '',
    },
    reducers: {
        emailCh: (state, action) => {state.email = action.payload},
        passwordCh: (state, action) => {state.password = action.payload},
        nameCh: (state, action) => {state.name = action.payload},
        phoneCh: (state, action)=>{state.phone = action.payload},
        roleCh: (state, action) => {state.role = action.payload},
        positionCh: (state, action) => {state.position = action.payload},
        departmentCh: (state, action) => {state.department = action.payload},
        directionrCh: (state, action) => {state.direction = action.payload},

        addUserReset: (state) => {
            state.department = ''; // 'rs', 'subst', 'reag';
            state.direction = '';
            state.email = '';
            state.name = '';
            state.password = '';
            state.position = '';
            state.role = '';
            state.phone = '';
            

        }, 

        
    }
});

export const { addUserReset, departmentCh, directionrCh, emailCh, nameCh, passwordCh, phoneCh, positionCh, roleCh } = addUserSlice.actions;
export default addUserSlice.reducer;

