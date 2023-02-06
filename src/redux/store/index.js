import { configureStore } from '@reduxjs/toolkit';

import { api } from '../api/api';
import sMessageReducer from './sMessageSlice'
import authReducer from './authSlice'
import activeReagentReducer from './activeReagSlice'
import projectReducer from './projectSlice'
import addItemReducer from './addItemSlice'
import changeItemReducer from './changeItemSlice'
import orderReducer from './orderSlice'
import globalReducer from './globalSlice';
import addUserReducer from './addUserSlice'
const store = configureStore({
    reducer: {
        addItem: addItemReducer,
        project: projectReducer,
        global: globalReducer,
        auth: authReducer,
        sMessage: sMessageReducer,
        activeReagent: activeReagentReducer,
        changeItem: changeItemReducer,
        order: orderReducer, 
        addUser: addUserReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(api.middleware)
    },
    devTools: true,
});

export default store;