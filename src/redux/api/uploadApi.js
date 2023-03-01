import { api } from "./api";

export const uploadApi = api.injectEndpoints({
    endpoints: builder => ({
        upload: builder.mutation({
            query: ({itemId, formData}) => ({
                url: `/api/upload/${itemId}`,
                method: 'PATCH',
                body: formData,
            }),
            
        }),
        uploadCol: builder.mutation({
            query: ({itemId, formData}) => ({
                url: `/api/uploadCol/${itemId}`,
                method: 'PATCH',
                body: formData,
            }),
            
        }),
       
    }),
});

export const { useUploadMutation, useUploadColMutation } = uploadApi;