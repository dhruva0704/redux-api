import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://devapi.proxtera.app/v4/openSearch?limit=25&query_string=food&offset=0&platform_country=null'
     }),
    endpoints: (builder) => ({
      getAllPost: builder.query({
        query: () => ({
            url:'posts',
            method: 'get'
        })
      }),
    }),
  })

  export const {useGetAllPostQuery} = postApi;