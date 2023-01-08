import { configureStore } from '@reduxjs/toolkit';

import { api } from '../api/api';
import sMessageReducer from './sMessageSlice'
import authReducer from './authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        sMessage: sMessageReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(api.middleware)
    },
    devTools: true,
});

export default store;