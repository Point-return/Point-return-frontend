import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';
import { getBackendAuthURL } from '@src/services/common/utils/apiUtils.ts';
import { setUser } from '@src/store/reducers/userSlice';
import { IUser } from './models';

const ROOT_USER_URL = 'users/me';

export const PROPOSED_ENDPOINTS = {
  getUser: getBackendAuthURL(`${ROOT_USER_URL}`),
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => ({
        url: `${PROPOSED_ENDPOINTS.getUser}`,
        method: 'GET',
        credentials: 'include',
      }),
      transformResponse: (result: IUser) => result,
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
