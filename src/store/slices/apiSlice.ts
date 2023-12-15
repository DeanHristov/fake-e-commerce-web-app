import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductsResponse } from '@/types';

//@see: https://redux-toolkit.js.org/rtk-query/api/created-api/overview
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, void>({
      query: () => '/products',
      transformResponse: ({ products }) => products,
    }),

    getProductById: builder.query<IProduct, number>({
      query: (productId) => `/products/${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = apiSlice;
