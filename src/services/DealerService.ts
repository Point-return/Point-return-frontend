import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';
import { getBackendURL } from '@src/services/common/utils/apiUtils.ts';
import {
  DealerProductsByIdRequest,
  DealerProductsByIdResponse,
  DealersResponse,
} from '@src/services/models.ts';

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
  refetchOnMountOrArgChange: 1,
  tagTypes: ['dealerProducts'],
  endpoints: (build) => ({
    getDealerProductsById: build.query<
      DealerProductsByIdResponse,
      DealerProductsByIdRequest
    >({
      query: ({ id, size, page }) => ({
        url: `${DEALER_ENDPOINTS.getDealerProductsById}/${id}?size=${size}&page=${page}`,
        method: 'GET',
      }),
    }),
    getDealers: build.query<DealersResponse, void>({
      query: () => ({
        url: `${DEALER_ENDPOINTS.getDealers}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDealerProductsByIdQuery, useGetDealersQuery } = dealerApi;
