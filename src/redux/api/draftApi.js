import { api } from "./api";

export const draftApi = api.injectEndpoints({
    endpoints: builder => ({
        getDrafts: builder.query({
            query: ()=> ({
                url: `/api/draft/getAll/`,
            }),
            providesTags: ['Draft'],
        }),

        draftReagent: builder.mutation({
            query: (body)=> ({
                url: `/api/draft/add/`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Draft'],
        }),

        deleteDraft: builder.mutation({
            query: (target) => ({
                url: `/api/draft/delete/${target}`,
                method: 'DELETE'
            }) ,
            invalidatesTags: ['Draft'],
        }),

    })
})

export const { useDeleteDraftMutation, useDraftReagentMutation, useGetDraftsQuery } = draftApi