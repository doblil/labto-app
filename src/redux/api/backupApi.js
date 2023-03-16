import { api } from "./api";

export const backupApi = api.injectEndpoints({
    endpoints: builder => ({
        getBackups: builder.query({
            query: ()=> ({
                url: `/api/backups/getall/`,
            }),
            providesTags: ['Backup'],
        }),

        backupDB: builder.mutation({
            query: ()=> ({
                url: `/api/backup`,
                method: 'POST',
            }),
            invalidatesTags: ['Backup'],
        }),

        restoreDB: builder.mutation({
            query: (body) => ({
                url: `/api/restore`,
                method: 'POST',
                body
            }) ,
        }),

        downloadLocaly: builder.mutation({
            query: (body) => ({
                url: `/api/backups/download`,
                method: "POST",
                body,
                responseHandler: async (response) => window.open(window.URL.createObjectURL(await response.blob()), '_blank'),
                cache: "no-cache",
            }) ,
        }),

        deleteBackup: builder.mutation({
            query: (body) => ({
                url: `/api/backups/delete`,
                method: 'DELETE',
                body
            }),
            invalidatesTags: ['Backup'],
        }),
        

    })
})

export const { useBackupDBMutation, useRestoreDBMutation, useDownloadLocalyMutation, useGetBackupsQuery, useDeleteBackupMutation } = backupApi