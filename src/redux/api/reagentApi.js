import { api } from "./api";

export const reagentApi = api.injectEndpoints({
    endpoints: builder => ({
        getReagents: builder.query({
            query: ({type, isolate})=> ({
                url: `/api/reagent/getAll/${type}/${isolate}`,
            }),
            providesTags: ['Reagent'],
        }),

        getOneReagent: builder.query({
            query: (target)=> ({
                url: `/api/reagent/getOne/${target}`,
            }),
            providesTags: ['Reagent'],
            onQueryStarted: async () => {
                
            }
        }),
        takeReagent: builder.mutation({
            query: ({target, userId, body})=> ({
                url: `/api/reagent/take/${userId}/${target}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Reagent'],
        }),
        favoriteReagent: builder.mutation({
            query: ({target, userId})=> ({
                url: `/api/reagent/favorite/${userId}/${target}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Reagent'],
        }),
        unfavoriteReagent: builder.mutation({
            query: ({target, userId})=> ({
                url: `/api/reagent/unfavorite/${userId}/${target}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Reagent'],
        }),
        addReagent: builder.mutation({
            query: ({body, userId})=> ({
                url: `/api/reagent/createOne/${userId}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Reagent'],
        }),
    })
})

export const { useGetOneReagentQuery, useGetReagentsQuery, useTakeReagentMutation, useFavoriteReagentMutation, useUnfavoriteReagentMutation, useAddReagentMutation } = reagentApi