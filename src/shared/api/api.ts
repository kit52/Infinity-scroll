import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com/',
});

export const api = createApi({
  baseQuery,
  reducerPath: 'splitApi',
  tagTypes: ['Post', 'Posts'],
  endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({});
