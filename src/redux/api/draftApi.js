import { api } from "./api";

export const draftApi = api.injectEndpoints({
    endpoints: builder => ({
        getDrafts: builder.query({
            query: ()=> ({
                url: `/api/draft/getAll/`,
            }),
            providesTags: ['Draft'],
        }),

        addReagent: builder.mutation({
            query: ({body, userId})=> ({
                url: `/api/reagent/createOne/`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Reagent'],
        }),

        deleteReagent: builder.mutation({
            query: ({target, userId}) => ({
                url: `/api/reagent/delete/${target}`,
                method: 'DELETE'
            }) ,
            invalidatesTags: ['Reagent'],
        }),

        isolateReagent: builder.mutation({
            query: ({target, userId}) => ({
                url: `/api/reagent/isolate/${target}`,
                method: 'PATCH'
            }) ,
            invalidatesTags: ['Reagent'],
        }),
        changeReagent: builder.mutation({
            query: ({target, userId, body}) => ({
                url: `/api/reagent/delete/${target}`,
                method: 'PATCH',
                body,
            }) ,
            invalidatesTags: ['Reagent'],
        }),
        getPassport: builder.mutation({
            query: (target)=> ({
                url: `/api/reagent/getPassport/${target}`,
                method: "GET",
                responseHandler: async (response) => window.open(window.URL.createObjectURL(await response.blob()), '_blank'),
                cache: "no-cache",
            }),
        }),


    })
})

