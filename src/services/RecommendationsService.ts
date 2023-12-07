import { getBackendURL } from '@src/services/common/utils/apiUtils.ts';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';
import {
  chooseProductRequest,
  skipProductRequest,
} from '@src/services/models.ts';

const ROOT_RECOMMENDATIONS_URL = 'recommendations';

export const RECOMMENDATIONS_ENDPOINTS = {
  chooseProduct: getBackendURL(`${ROOT_RECOMMENDATIONS_URL}`),
  skipProduct: getBackendURL(`${ROOT_RECOMMENDATIONS_URL}`),
};

export const recommendationsAPI = createApi({
  reducerPath: 'recommendations',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['recomendations'],
  endpoints: (build) => ({
    chooseProduct: build.mutation<void, chooseProductRequest>({
      query: ({ dealerId, productId }) => ({
        url: `${RECOMMENDATIONS_ENDPOINTS.chooseProduct}/${dealerId}/choose`,
        params: { productId: productId },
        method: 'PATCH',
        credentials: 'include',
      }),
    }),
    skipProduct: build.mutation<void, skipProductRequest>({
      query: ({ dealerId }) => ({
        url: `${RECOMMENDATIONS_ENDPOINTS.skipProduct}/${dealerId}/skip`,
        method: 'PATCH',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useChooseProductMutation, useSkipProductMutation } =
  recommendationsAPI;
