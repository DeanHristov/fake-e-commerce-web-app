import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '@/types';

export interface IAPIResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

//@see: https://redux-toolkit.js.org/rtk-query/api/created-api/overview
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => '/products',
      transformResponse: ({ products }) => products,
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
