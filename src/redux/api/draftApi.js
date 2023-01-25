import { api } from "./api";

export const draftApi = api.injectEndpoints({
    endpoints: builder => ({
        getDrafts: builder.query({
            query: (userId)=> ({
                url: `/api/draft/getAll/${userId}`,
            }),
            providesTags: ['Draft'],
        }),

        addReagent: builder.mutation({
            query: ({body, userId})=> ({
                url: `/api/reagent/createOne/${userId}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Reagent'],
        }),

        deleteReagent: builder.mutation({
            query: ({target, userId}) => ({
                url: `/api/reagent/delete/${userId}/${target}`,
                method: 'DELETE'
            }) ,
            invalidatesTags: ['Reagent'],
        }),

        isolateReagent: builder.mutation({
            query: ({target, userId}) => ({
                url: `/api/reagent/isolate/${userId}/${target}`,
                method: 'PATCH'
            }) ,
            invalidatesTags: ['Reagent'],
        }),
        changeReagent: builder.mutation({
            query: ({target, userId, body}) => ({
                url: `/api/reagent/delete/${userId}/${target}`,
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

export const { 
    
} = draftApi