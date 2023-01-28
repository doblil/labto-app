import { api } from "./api";

export const userApi = api.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: ()=> ({
                url: `/api/users/getAll/`,
            }),
        }),
    })
})

export const { useGetUsersQuery } = userApi