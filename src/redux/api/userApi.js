import { api } from "./api";

export const userApi = api.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: ()=> ({
                url: `/api/users/getAll/`,
            }),
            providesTags: ['User',],
        }),
        getUnactiveUsers: builder.query({
            query: ()=> ({
                url: `/api/users/getAllUnactive/`,
            }),
            providesTags: ['User',],
        }),

        createUser: builder.mutation({
            query: (body)=> ({
                url: `/api/users/create/`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['User',],
        }),

        changeCredentials: builder.mutation({
            query: ({body, target})=> ({
                url: `/api/users/chCr/${target}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['User',],
        }),
        changeRole: builder.mutation({
            query: ({body, target})=> ({
                url: `/api/users/chRl/${target}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['User',],
        }),
        changeUD: builder.mutation({
            query: ({body, target})=> ({
                url: `/api/users/chUD/${target}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['User',],
        }),
        unactiveUser: builder.mutation({
            query: (target)=> ({
                url: `/api/users/unactive/${target}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['User',],
        }),
        activeUser: builder.mutation({
            query: (target)=> ({
                url: `/api/users/active/${target}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['User',],
        }),
        deleteUser: builder.mutation({
            query: (target)=> ({
                url: `/api/users/deleteOne/${target}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User',],
        }),
        
    })
})

export const { 
    useGetUsersQuery, 
    useGetUnactiveUsersQuery, 
    useCreateUserMutation, 
    useChangeCredentialsMutation, 
    useChangeRoleMutation, 
    useChangeUDMutation, 
    useUnactiveUserMutation,
    useActiveUserMutation,
    useDeleteUserMutation,
} = userApi