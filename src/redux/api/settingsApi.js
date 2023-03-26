import { api } from "./api";

export const settingsApi = api.injectEndpoints({
    endpoints: builder => ({
        getIsService: builder.query({
            query: ()=> ({
                url: `/api/settings/isService/`,
            }),
            providesTags: ['Settings',],
            
        }),
        startGetIsService: builder.query({
            query: ()=> ({
                url: `/api/settings/isService`,
            }),
            
        }),
        startService: builder.mutation({
            query: ()=> ({
                url: `/api/settings/startService/`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Settings',]
        }),
        stopService: builder.mutation({
            query: ()=> ({
                url: `/api/settings/stopService/`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Settings',]
        }),
        
    })
})

export const { useGetIsServiceQuery, useStartServiceMutation, useStopServiceMutation, useStartGetIsServiceQuery } = settingsApi