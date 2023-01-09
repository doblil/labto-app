import { api } from "./api";

export const reagentApi = api.injectEndpoints({
    endpoints: builder => ({
        getReagents: builder.query({
            query: ({type, carantin})=> ({
                url: `/api/reagent/getAll/${type}/${carantin}`,
            }),
            providesTags: ['Reagent'],
        }),

        getOneReagent: builder.query({
            query: (target)=> ({
                url: `/api/reagent/getOne/${target}`,
            }),
        }),

        createOrder: builder.mutation({
            query: (orderData) => ({
                url: `/api/order/create`,
                method: 'POST',
                body: orderData,
            }),
            invalidatesTags: ['Order'],
            async onQueryStarted (_, {dispatch}){
                try {
                    // dispatch(orReset());
                } catch (error) {
                    console.error(error, ' couldnt reset orderState')
                }
            }
        })
    })
})

export const { useGetOneReagentQuery, useGetReagentsQuery } = reagentApi