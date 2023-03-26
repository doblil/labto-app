import { api } from "./api";

export const helpApi = api.injectEndpoints({
    endpoints: builder => ({
        getHelp: builder.query({
            query: ()=> ({
                url: `/api/help/`,
                responseHandler: async (response) => window.open(window.URL.createObjectURL(await response.blob()), '_blank'),
            }),
        }),

    })
})

export const { useLazyGetHelpQuery } = helpApi