import { getBackendURL } from '@src/services/common/utils/apiUtils.ts';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';
import {
  getManufacturerProductByKeyRequest,
  getManufacturerProductByKeyResponse,
} from '@src/services/models.ts';

const ROOT_MANUFACTURER_PRODUCT_URL = 'product';

export const MANUFACTURER_ENDPOINTS = {
  getProductByKey: getBackendURL(`${ROOT_MANUFACTURER_PRODUCT_URL}`),
};

export const productApi = createApi({
  reducerPath: 'manufacturerProduct',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['manufacturerProduct'],
  endpoints: (build) => ({
    getManufacturerProductByKey: build.query<
      getManufacturerProductByKeyRequest,
      getManufacturerProductByKeyResponse
    >({
      query: ({ productKey }) => ({
        url: `${MANUFACTURER_ENDPOINTS.getProductByKey}/${productKey}`,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetManufacturerProductByKeyQuery } = productApi;
