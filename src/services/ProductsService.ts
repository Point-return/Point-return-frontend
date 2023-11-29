import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: /* APIURL */ '' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '' /* ENDPOINT */,
    }),
  }),
});
