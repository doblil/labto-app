import { api } from "./api";

export const equipmentApi = api.injectEndpoints({
    endpoints: builder => ({
        getEquipments: builder.query({
            query: (type)=> ({
                url: `/api/equipment/getAll/${type}`,
            }),
            providesTags: ['Equipment'],
        }),

        getOneEquipment: builder.query({
            query: (target)=> ({
                url: `/api/equipment/getOne/${target}`,
            }),
            providesTags: ['Equipment'],

        }),

        getEqPassport: builder.mutation({
            query: (target)=> ({
                url: `/api/equipment/getPassport/${target}`,
                method: "GET",
                responseHandler: async (response) => window.open(window.URL.createObjectURL(await response.blob()), '_blank'),
                cache: "no-cache",
            }),
        }),

        getEqManual: builder.mutation({
            query: (target)=> ({
                url: `/api/equipment/getManual/${target}`,
                method: "GET",
                responseHandler: async (response) => window.open(window.URL.createObjectURL(await response.blob()), '_blank'),
                cache: "no-cache",
            }),
        }),

        getEqCert: builder.mutation({
            query: (target)=> ({
                url: `/api/equipment/getCert/${target}`,
                method: "GET",
                responseHandler: async (response) => window.open(window.URL.createObjectURL(await response.blob()), '_blank'),
                cache: "no-cache",
            }),
        }),
        favoriteEq: builder.mutation({
            query: (target)=> ({
                url: `/api/equipment/favorite/${target}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Equipment'],
        }),
        unfavoriteEq: builder.mutation({
            query: (target)=> ({
                url: `/api/equipment/unfavorite/${target}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Equipment'],
        }),
        changeEquipment: builder.mutation({
            query: ({target, body})=> ({
                url: `/api/equipment/change/${target}`,
                body,
                method: 'PATCH',
            }),
            invalidatesTags: ['Equipment'],
        }),
        verifyEquipment: builder.mutation({
            query: ({target, body})=> ({
                url: `/api/equipment/verify/${target}`,
                body,
                method: 'PATCH',
            }),
            invalidatesTags: ['Equipment'],
        }),
        trainEquipment: builder.mutation({
            query: ({target, body})=> ({
                url: `/api/equipment/train/${target}`,
                body,
                method: 'PATCH',
            }),
            invalidatesTags: ['Equipment'],
        }),
        
        logEquipment: builder.mutation({
            query: ({target, body})=> ({
                url: `/api/equipment/log/${target}`,
                body,
                method: 'PATCH',
            }),
            invalidatesTags: ['Equipment'],
        }),

        statusEquipment: builder.mutation({
            query: ({target, body})=> ({
                url: `/api/equipment/status/${target}`,
                body,
                method: 'PATCH',
            }),
            invalidatesTags: ['Equipment'],
        }),
        addEquipment: builder.mutation({
            query: (body)=> ({
                url: `/api/equipment/add/`,
                body,
                method: 'POST',
            }),
            invalidatesTags: ['Equipment'],
        }),

        
        
    })
})

export const { 
    useAddEquipmentMutation,
    useGetEquipmentsQuery, 
    useGetOneEquipmentQuery, 
    useGetEqCertMutation, 
    useGetEqManualMutation, 
    useGetEqPassportMutation, 
    useFavoriteEqMutation, 
    useUnfavoriteEqMutation,
    useChangeEquipmentMutation,
    useLogEquipmentMutation,
    useTrainEquipmentMutation,
    useVerifyEquipmentMutation,
    useStatusEquipmentMutation,
} = equipmentApi