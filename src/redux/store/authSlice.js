import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: null,
        token: null,
        isAuth: false,
        userId: null,
        role: null,
        favorite: [],

        name: '',
        direction: '',
        position: '',
        department: '',
        phone: ''
    },
    reducers: {
        setCredentials: (state, action) => {
            const {email, accessToken, role, favorite, name, direction, department, position, phone} = action.payload;
        
            state.email = email;
            state.token = accessToken;
            state.role = role;
            state.favorite = favorite;
            state.name = name;
            state.direction = direction;
            state.department = department;
            state.position = position;
            state.phone = phone;
        },
        clearStore: (state) => {
            state.email = null;
            state.token = null;
            state.isAuth = false;
            state.userId = null;
            state.role = null

            state.favorite = [];
            state.name = '';
            state.direction = '';
            state.department = '';
            state.position = '';
            state.phone = ''
        },
        isAuthCh: (state, action) => {state.isAuth = action.payload},
        userIdCh: (state, action) => {
            const {userId} = action.payload;
            state.userId = userId;
        },

        favoriteCh: (state, action) => {
            if (state.favorite.includes(action.payload)){
                state.favorite =  state.favorite.filter(item => item !== action.payload)
            } else {
                state.favorite.push(action.payload)
            }
        },

        deleteFavorite: (state, action) => {
            state.favorite =  state.favorite.filter(item => item !== action.payload)
        }

        
    } ,
});

export const { setCredentials, clearStore, isAuthCh, userIdCh, favoriteCh, deleteFavorite } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentEmail = (state) => state.auth.email;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentIsAuth = (state) => state.auth.isAuth;
