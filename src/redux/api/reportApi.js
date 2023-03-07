import { api } from "./api";

export const draftApi = api.injectEndpoints({
    endpoints: builder => ({
        projectReport: builder.mutation({
            query: (body)=> ({
                url: `/api/report/project/`,
                body,
                method: 'POST',
            }),
        }),
    })
})

export const { useProjectReportMutation } = draftApi