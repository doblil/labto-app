import { api } from "./api";

export const startApi = api.injectEndpoints({
    endpoints: builder => ({
        getIsStart: builder.query({
            query: ()=> ({
                url: `/api/start/isStart/`,
            }),
            providesTags: ['Start',]
        }),
        startApp: builder.mutation({
            query: (body)=> ({
                url: `/api/start/startApp/`,
                body,
                method: "POST"
            }), 
            invalidatesTags: ['Start',]
        }),
    })
})

export const { useGetIsStartQuery, useStartAppMutation } = startApi