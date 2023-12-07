import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';
import { getBackendURL } from '@src/services/common/utils/apiUtils.ts';

const ROOT_PROPOSED_URL = 'recommendations';

export const PROPOSED_ENDPOINTS = {
  getProposedProducts: getBackendURL(`${ROOT_PROPOSED_URL}`),
};

export const proposedApi = createApi({
  reducerPath: 'proposedApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getProposedProducts: build.query({
      query: ({ dealerPriceId, limit }) => ({
        url: `${PROPOSED_ENDPOINTS.getProposedProducts}/${dealerPriceId}?limit=${limit}`,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetProposedProductsQuery } = proposedApi;
