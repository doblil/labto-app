import { api } from "./api";

export const historyApi = api.injectEndpoints({
    endpoints: builder => ({
        getHistory: builder.query({
            query: ()=> ({
                url: `/api/history/get/`,
            }),
            cache: "no-cache",
        }),

        getUserHistory: builder.mutation({
            query: ({body, target})=> ({
                url: `/api/history/getUser/${target}`,
                body,
                method: "PATCH"
            }),
        }),

    })
})

export const { useGetHistoryQuery, useGetUserHistoryMutation } = historyApi