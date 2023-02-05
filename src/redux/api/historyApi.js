import { api } from "./api";

export const historyApi = api.injectEndpoints({
    endpoints: builder => ({
        getHistory: builder.query({
            query: ()=> ({
                url: `/api/history/get/`,
            }),
            cache: "no-cache",
        }),

        getUserHistory: builder.query({
            query: ()=> ({
                url: `/api/history/getUser/:target`,
            }),
        }),

    })
})

export const { useGetHistoryQuery, useGetUserHistoryQuery } = historyApi