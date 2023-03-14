import { api } from "./api";

export const reportApi = api.injectEndpoints({
    endpoints: builder => ({
        projectReport: builder.mutation({
            query: (body)=> ({
                url: `/api/report/project/`,
                body,
                method: 'POST',
            }),
        }),
        directionReport: builder.mutation({
            query: (body)=> ({
                url: `/api/report/direction/`,
                body,
                method: 'POST',
            }),
        }),
    })
})

export const { useProjectReportMutation, useDirectionReportMutation } = reportApi