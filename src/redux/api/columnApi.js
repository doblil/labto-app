import { api } from "./api";

export const columnApi = api.injectEndpoints({
    endpoints: builder => ({
        getColumns: builder.query({
            query: ({type, isolate})=> ({
                url: `/api/column/getAll/${type}/${isolate}`,
            }),
            providesTags: ['Column'],
        }),

        getOneColumn: builder.query({
            query: (target)=> ({
                url: `/api/column/getOne/${target}`,
            }),
            providesTags: ['Column'],
        }),
        takeColumn: builder.mutation({ 
            query: ({target, body})=> ({
                url: `/api/column/take/${target}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['Column'],
        }),
        returnColumn: builder.mutation({
            query: ({target, body})=> ({
                url: `/api/column/return/${target}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Column'],
        }),
        favoriteColumn: builder.mutation({
            query: (target)=> ({
                url: `/api/column/favorite/${target}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Column'],
        }),
        unfavoriteColumn: builder.mutation({
            query: (target)=> ({
                url: `/api/column/unfavorite/${target}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Column'],
        }),
        addColumn: builder.mutation({
            query: (body)=> ({
                url: `/api/column/createOne`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Column'],
        }),

        deleteColumn: builder.mutation({ //////////done
            query: (target) => ({
                url: `/api/column/delete/${target}`,
                method: 'DELETE'
            }) ,
            invalidatesTags: ['Column'],
        }),

        isolateColumn: builder.mutation({ //////////done
            query: (target) => ({
                url: `/api/Column/isolate/${target}`,
                method: 'PATCH'
            }) ,
            invalidatesTags: ['Column'],
        }),
        changeColumn: builder.mutation({
            query: ({target, body}) => ({ //////////done
                url: `/api/Column/change/${target}`,
                method: 'PATCH',
                body,
            }) ,
            invalidatesTags: ['Column'],
        }),
        getPassport: builder.mutation({
            query: (target)=> ({
                url: `/api/column/getPassport/${target}`,
                method: "GET",
                responseHandler: async (response) => window.open(window.URL.createObjectURL(await response.blob()), '_blank'),
                cache: "no-cache",
            }),
        }),
    })
})

export const { 
    useAddColumnMutation,
    useChangeColumnMutation,
    useDeleteColumnMutation,
    useFavoriteColumnMutation,
    useGetColumnsQuery,
    useGetOneColumnQuery,
    useGetPassportMutation,
    useIsolateColumnMutation,
    useTakeColumnMutation,
    useReturnColumnMutation,
    useUnfavoriteColumnMutation,
    
} = columnApi