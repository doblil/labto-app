import { api } from "./api";

export const projectApi = api.injectEndpoints({
    endpoints: builder => ({
        getProjects: builder.query({
            query: ()=> ({
                url: `/api/project/getProjects/`,
            }),
        }),
    })
})

export const { useGetProjectsQuery } = projectApi