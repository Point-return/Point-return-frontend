import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';
import { getBackendURL } from '@src/services/common/utils/apiUtils.ts';
import { DealersResponse } from '@src/services/models.ts';

const ROOT_DEALER_PRODUCTS_URL = 'dealer';
const ROOT_DEALERS_URL = 'dealers';

export const DEALER_ENDPOINTS = {
  getDealerProductsById: getBackendURL(`${ROOT_DEALER_PRODUCTS_URL}`),
  getDealers: getBackendURL(`${ROOT_DEALERS_URL}`),
};

export const dealerApi = createApi({
  reducerPath: 'dealerProducts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['dealerProducts'],
  endpoints: (build) => ({
    // TODO: fixed type (remove any)
    getDealerProductsById: build.query<any, any>({
      query: ({ id, size, page }) => ({
        url: `${DEALER_ENDPOINTS.getDealerProductsById}/${id}?size=${size}&page=${page}`,
        method: 'GET',
      }),
    }),
    // TODO: fixed type (remove any)
    getDealers: build.query<DealersResponse, void>({
      query: () => ({
        url: `${DEALER_ENDPOINTS.getDealers}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDealerProductsByIdQuery, useGetDealersQuery } = dealerApi;
