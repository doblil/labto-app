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
            providesTags: ['Draft'],
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
                url: `/api/draft/delete/${target}/${status}`,
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
} = orderApi