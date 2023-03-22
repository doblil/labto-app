import { api } from "./api";

export const helpApi = api.injectEndpoints({
    endpoints: builder => ({
        getHelp: builder.query({
            query: ()=> ({
                url: `/api/help/`,
            }),
        }),

    })
})

export const { useLazyGetHelpQuery } = helpApi