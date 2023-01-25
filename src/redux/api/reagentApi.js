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
                url: `/api/reagent/change/${userId}/${target}`,
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
    useGetOneReagentQuery, 
    useGetReagentsQuery, 
    useTakeReagentMutation, 
    useFavoriteReagentMutation, 
    useUnfavoriteReagentMutation, 
    useAddReagentMutation, 
    useDeleteReagentMutation,
    useIsolateReagentMutation, 
    useChangeReagentMutation,
    useGetPassportMutation
} = reagentApi