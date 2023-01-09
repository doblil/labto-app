import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: null,
        token: null,
        isAuth: false,
        userId: null,
        role: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const {email, accessToken, role} = action.payload;
            state.email = email;
            state.token = accessToken;
            state.role = role;
        },
        clearStore: (state) => {
            state.email = null;
            state.token = null;
            state.isAuth = false;
            state.userId = null;
            state.role = null
        },
        isAuthCh: (state, action) => {state.isAuth = action.payload},
        userIdCh: (state, action) => {
            const {userId} = action.payload;
            state.userId = userId;
        }
    } ,
});

export const { setCredentials, clearStore, isAuthCh, userIdCh } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentEmail = (state) => state.auth.email;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentIsAuth = (state) => state.auth.isAuth;
