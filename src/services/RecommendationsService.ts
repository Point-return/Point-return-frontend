import { getBackendURL } from '@src/services/common/utils/apiUtils.ts';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';

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
    // TODO check types after backend updating
    chooseProduct: build.mutation<any, any>({
      query: ({ dealerId, productId }) => ({
        url: `${RECOMMENDATIONS_ENDPOINTS.chooseProduct}/${dealerId}/choose`,
        params: { product_id: productId },
        method: 'PATCH',
      }),
    }),
    // TODO check types after backend updating
    skipProduct: build.mutation<any, { dealerId: number }>({
      query: ({ dealerId }) => ({
        url: `${RECOMMENDATIONS_ENDPOINTS.skipProduct}/${dealerId}/skip`,
        method: 'PATCH',
      }),
    }),
  }),
});

export const { useChooseProductMutation, useSkipProductMutation } = recommendationsAPI;
