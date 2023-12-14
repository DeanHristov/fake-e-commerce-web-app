import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProductsResponse } from '@/types';

//@see: https://redux-toolkit.js.org/rtk-query/api/created-api/overview
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, null>({
      query: () => '/products',
      transformResponse: ({ products }) => products,
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
