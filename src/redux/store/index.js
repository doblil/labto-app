import { configureStore } from '@reduxjs/toolkit';

import { api } from '../api/api';
import sMessageReducer from './sMessageSlice'
import authReducer from './authSlice'
import activeReagentReducer from './activeReagSlice'
import activeColumnReducer from './activeColumnSlice';
import activeEquipmentReducer from './activeEquipmentSlice';
import projectReducer from './projectSlice'
import addItemReducer from './addItemSlice'
import addColumnReducer from './addColumnSlise'
import addEquipmentReducer from './addEquipmentSlice'
import changeItemReducer from './changeItemSlice'
import changeColumnReducer from './changeColumnSlice';
import orderReducer from './orderSlice'
import globalReducer from './globalSlice';
import addUserReducer from './addUserSlice'
const store = configureStore({
    reducer: {
        addItem: addItemReducer,
        addColumn: addColumnReducer,
        addEquipment: addEquipmentReducer,
        project: projectReducer,
        global: globalReducer,
        auth: authReducer,
        sMessage: sMessageReducer,
        activeReagent: activeReagentReducer,
        changeItem: changeItemReducer,
        changeColumn: changeColumnReducer,
        order: orderReducer, 
        addUser: addUserReducer,
        activeColumn: activeColumnReducer,
        activeEquipment: activeEquipmentReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(api.middleware)
    },
    devTools: true,
});

export default store;