import { api } from "./api";

export const projectApi = api.injectEndpoints({
    endpoints: builder => ({
        getProjects: builder.query({
            query: (close)=> ({
                url: `/api/project/getProjects/${close}`,
            }),
        providesTags: ['Project',],
        }),
        addProject: builder.mutation({
            query: (body)=> ({
                url: `/api/project/addProject/`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Project',],
        }),
        closeProject: builder.mutation({
            query: ({target, body})=> ({
                url: `/api/project/close/${target}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ['Project',],
        }),
        changeProject: builder.mutation({
            query: ({target, body})=> ({
                url: `/api/project/changeOne/${target}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ['Project',],
        }),
        
        deleteProject: builder.mutation({
            query: (target)=> ({
                url: `/api/project/deleteOne/${target}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Project',],
        })
        
    })
})

export const { useGetProjectsQuery, useAddProjectMutation, useCloseProjectMutation, useDeleteProjectMutation, useChangeProjectMutation } = projectApi;