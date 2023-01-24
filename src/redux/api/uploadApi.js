import { api } from "./api";

export const uploadApi = api.injectEndpoints({
    endpoints: builder => ({
        upload: builder.mutation({
            query: ({userId, itemId, formData}) => ({
                url: `/api/upload/${userId}/${itemId}`,
                method: 'PATCH',
                body: formData,
            }),
            
        }),
       
    }),
});

export const { useUploadMutation } = uploadApi;