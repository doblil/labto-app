import { api } from "./api";

export const uploadApi = api.injectEndpoints({
    endpoints: builder => ({
        upload: builder.mutation({
            query: ({itemId, formData}) => ({
                url: `/api/upload/${itemId}`,
                method: 'PATCH',
                body: formData,
            }),
            invalidatesTags: ['Reagent']
            
        }),
        uploadCol: builder.mutation({
            query: ({itemId, formData}) => ({
                url: `/api/uploadCol/${itemId}`,
                method: 'PATCH',
                body: formData,
            }),
            invalidatesTags: ['Column']
            
        }),
       
    }),
});

export const { useUploadMutation, useUploadColMutation } = uploadApi;