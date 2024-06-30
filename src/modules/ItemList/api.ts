import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3030"}),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => 'posts',
        }),
        getItem: builder.query({
            query: (id) => `posts/${id}`,
        }),
    }),
});

export const {useGetItemsQuery, useGetItemQuery} = apiSlice;
