import { api } from "./api";

export const projectApi = api.injectEndpoints({
    endpoints: builder => ({
        getProjects: builder.query({
            query: (close)=> ({
                url: `/api/project/getProjects/${close}`,
            }),
        }),
    })
})

export const { useGetProjectsQuery } = projectApi