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
        takeReagent: builder.mutation({ //////////done
            query: ({target, body})=> ({
                url: `/api/reagent/take/${target}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Reagent'],
        }),
        favoriteReagent: builder.mutation({  //////////done
            query: (target)=> ({
                url: `/api/reagent/favorite/${target}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Reagent'],
        }),
        unfavoriteReagent: builder.mutation({  //////////done
            query: (target)=> ({
                url: `/api/reagent/unfavorite/${target}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Reagent'],
        }),
        addReagent: builder.mutation({
            query: (body)=> ({
                url: `/api/reagent/createOne`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Reagent'],
        }),

        deleteReagent: builder.mutation({ //////////done
            query: (target) => ({
                url: `/api/reagent/delete/${target}`,
                method: 'DELETE'
            }) ,
            invalidatesTags: ['Reagent'],
        }),

        isolateReagent: builder.mutation({ //////////done
            query: (target) => ({
                url: `/api/reagent/isolate/${target}`,
                method: 'PATCH'
            }) ,
            invalidatesTags: ['Reagent'],
        }),
        changeReagent: builder.mutation({
            query: ({target, body}) => ({ //////////done
                url: `/api/reagent/change/${target}`,
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