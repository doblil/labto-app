import { api } from "./api";

export const orderApi = api.injectEndpoints({
    endpoints: builder => ({
        getMyOrders: builder.query({
            query: ()=> ({
                url: `/api/order/getMy/`,
            }),
            providesTags: ['Order'],
        }),
        getOrders: builder.query({
            query: (status)=> ({
                url: `/api/order/getAll/${status}`,
            }),
            providesTags: ['Order'],
            cache: "no-cache",
        }),
        createOrder: builder.mutation({ 
            query: (body)=> ({
                url: `/api/order/create/`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Order'],
        }),

        statusOrder: builder.mutation({ 
            query: ({target, status}) => ({
                url: `/api/order/status/${target}/${status}`,
                method: 'PATCH'
            }) ,
            invalidatesTags: ['Order'],
        }),
        archiveOrder: builder.mutation({ 
            query: (target) => ({
                url: `/api/order/archive/${target}`,
                method: 'PATCH'
            }) ,
            invalidatesTags: ['Order'],
        }),
        redirectOrder: builder.mutation({ 
            query: ({targetUser, target}) => ({
                url: `/api/order/redirect/${targetUser}/${target}`,
                method: 'PATCH'
            }) ,
            invalidatesTags: ['Order'],
        }),
        deleteOrder: builder.mutation({ 
            query: (target) => ({
                url: `/api/order/delete/${target}`,
                method: 'DELETE'
            }) ,
            invalidatesTags: ['Order'],
        }),
        messageOrder: builder.mutation({ 
            query: ({target, body}) => ({
                url: `/api/order/message/${target}`,
                method: 'PUT',
                body
            }) ,
            invalidatesTags: ['Order'],
        }),
    })
})

export const {
    useCreateOrderMutation,
    useDeleteOrderMutation,
    useGetMyOrdersQuery,
    useGetOrdersQuery,
    useMessageOrderMutation,
    useStatusOrderMutation,
    useRedirectOrderMutation,
    useArchiveOrderMutation,
} = orderApi