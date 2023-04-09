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
        uploadEqPassport: builder.mutation({
            query: ({itemId, formData}) => ({
                url: `/api/uploadEquipment/passport/${itemId}`,
                method: 'PATCH',
                body: formData,
            }),
            invalidatesTags: ['Equipment']
            
        }),
        uploadEqManual: builder.mutation({
            query: ({itemId, formData}) => ({
                url: `/api/uploadEquipment/manual/${itemId}`,
                method: 'PATCH',
                body: formData,
            }),
            invalidatesTags: ['Equipment']
            
        }),
        uploadEqCert: builder.mutation({
            query: ({itemId, formData}) => ({
                url: `/api/uploadEquipment/cert/${itemId}`,
                method: 'PATCH',
                body: formData,
            }),
            invalidatesTags: ['Equipment']
            
        }),
       
    }),
});

export const { useUploadMutation, useUploadColMutation, useUploadEqCertMutation, useUploadEqManualMutation, useUploadEqPassportMutation } = uploadApi;