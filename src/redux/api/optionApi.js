import { api } from "./api";

export const optionApi = api.injectEndpoints({
    endpoints: builder => ({
        getOptions: builder.query({
            query: ()=> ({
                url: `/api/options/getAll/`,
            }),
            providesTags: ['Option',]
        }),
        addOption: builder.mutation({
            query: (body)=> ({
                url: `/api/options/addOne/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ['Option',]
        }),
        deleteOptions: builder.mutation({
            query: ({target, body})=> ({
                url: `/api/options/deleteOne/${target}`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ['Option',]
        }),

    })
})

export const { useAddOptionMutation, useDeleteOptionsMutation, useGetOptionsQuery  } = optionApi