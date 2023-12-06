import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';
import { getBackendURL } from '@src/services/common/utils/apiUtils.ts';
import { StatisticRequest, StatisticResponse } from './models';

const ROOT_GLOBAL_STATISTICS_URL = 'statistics';
const ROOT_DEALER_STATISTICS_URL = 'statistics';

export const PROPOSED_ENDPOINTS = {
  getGlobalStatistic: getBackendURL(`${ROOT_GLOBAL_STATISTICS_URL}`),
  getDealerStatistic: getBackendURL(`${ROOT_DEALER_STATISTICS_URL}`),
};

export const statisticsApi = createApi({
  reducerPath: 'statisticsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  refetchOnMountOrArgChange: 1,
  endpoints: (build) => ({
    getGlobalStatistic: build.query<StatisticResponse, void>({
      query: () => ({
        url: `${PROPOSED_ENDPOINTS.getGlobalStatistic}`,
        method: 'GET',
      }),
    }),
    getDealerStatistic: build.query<StatisticResponse, StatisticRequest>({
      query: ({ dealerId }) => ({
        url: `${PROPOSED_ENDPOINTS.getDealerStatistic}/${dealerId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetGlobalStatisticQuery, useGetDealerStatisticQuery } =
  statisticsApi;
