import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi=createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://contact-app.mmsdev.site/api/v1'}),
    tagTypes: ['authApi'],
    endpoints: (builder)=>({
        register:builder.mutation({
            query:(data)=>({
                url:"/register",
                method:"POST",
                body:data
            }),
            invalidatesTags:['authApi']

        }),
        login:builder.mutation({
            query:(data)=>({
                url:"/login",
                method:"POST",
                body:data
            }),
            invalidatesTags:['authApi']
        }),
        logout:builder.mutation({
            query:(token)=>({
                url:"/user-logout",
                method:"POST",
                headers:{authorization:`Bearer ${token}`},
            }),
            invalidatesTags:['authApi'],
        })  
    }
)})

export const {useRegisterMutation,useLoginMutation,useLogoutMutation} = authApi;