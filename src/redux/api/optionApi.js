import { api } from "./api";

export const optionApi = api.injectEndpoints({
    endpoints: builder => ({
        getOptions: builder.query({
            query: ()=> ({
                url: `/api/options/getAll/`,
            }),
        }),
        addOption: builder.mutation({
            query: (body)=> ({
                url: `/api/options/addOne/`,
                method: "PATCH",
                body,
            }),
        }),
        deleteOptions: builder.mutation({
            query: (body)=> ({
                url: `/api/options/addOne/`,
                method: "PATCH",
                body,
            }),
        }),

    })
})

export const { useAddOptionMutation, useDeleteOptionsMutation, useGetOptionsQuery  } = optionApi