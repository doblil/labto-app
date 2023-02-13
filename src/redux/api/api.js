import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, clearStore } from '../store/authSlice';
import c from '../../config.json'
import { sMessageCh } from '../store/sMessageSlice';
let baseUrl = (c.mode === 'dev' ? c.baseLocalApiUrl :  c.baseApiUrl)


const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {

        const token = getState().auth.token;
        if (token){
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
    rejectUnauthorized: false,
})

const baseQueryWithReauth = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions);
    if(result?.error?.status){
        result?.error?.status === "FETCH_ERROR" && api.dispatch(sMessageCh('Ошибка соединения с сервером'));
    }
    
    
    if(result?.data?.clientMessage){
        api.dispatch(sMessageCh(result.data.clientMessage))
    };
    if(result?.error?.data.clientMessage){
        api.dispatch(sMessageCh(result.error.data.clientMessage))
    };
    if(result?.error?.originalStatus === 401 || result?.error?.originalStatus === 403 ) {
        console.log('sending refresh token');
        const refreshResult = await baseQuery('/api/refresh', api, extraOptions);
        if(refreshResult?.data) {
            console.log(refreshResult.data);
            const email = api.getState().auth.email;
            api.dispatch(setCredentials({...refreshResult.data, email}))
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(clearStore)
        }
    };
    
    return result;
        
}

export const api = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Reagent', 'Draft', 'Order', 'User', 'Option', 'Project', ],
    endpoints: builder => ({})
})