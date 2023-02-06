import { api } from "./api";

export const userApi = api.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: ()=> ({
                url: `/api/users/getAll/`,
            }),
        }),

        createUser: builder.mutation({
            query: (body)=> ({
                url: `/api/users/create/`,
                method: 'POST',
                body
            }),
        })
    })
})

export const { useGetUsersQuery, useCreateUserMutation } = userApi