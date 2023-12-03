import { getBackendURL } from '@src/services/common/utils/apiUtils.ts';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';

const ROOT_RECOMMENDATIONS_URL = 'recommendations';

export const RECOMMENDATIONS_ENDPOINTS = {
  postProduct: getBackendURL(`${ROOT_RECOMMENDATIONS_URL}`),
};

export const recommendationsAPI = createApi({
  reducerPath: 'recommendations',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['recomendations'],
  endpoints: (build) => ({
    postProduct: build.mutation<any, any>({
      query: ({ dealerId, productId }) => ({
        url: `${RECOMMENDATIONS_ENDPOINTS.postProduct}/${dealerId}/choose?product_id=${productId}`,
        method: 'PATCH',
        body: productId,
      }),
    }),
  }),
});

export const { usePostProductMutation } = recommendationsAPI;
