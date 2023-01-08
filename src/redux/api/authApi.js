import { clearStore } from "../store/authSlice";
import { sMessageCh } from "../store/sMessageSlice"
import { api } from "./api";

export const authApi = api.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/api/auth',
                method: 'POST',
                body: {...credentials}
            }),
            async onQueryStarted (args, {dispatch, getState}){
                try {
                } catch (error) {
                    dispatch(sMessageCh('Ошибка соединения с сервером'))
                }
            }
            
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/api/logout'
            }),
            async onQueryStarted (_, {dispatch, getState}){
                try {
                    dispatch(clearStore());
                } catch (error) {
                    console.error(error, ' error during clear store')
                }
            }
        })

    }),
});

export const  { useLoginMutation, useLogoutMutation } =  authApi;
