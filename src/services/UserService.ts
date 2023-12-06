import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';
import { getBackendAuthURL } from '@src/services/common/utils/apiUtils.ts';
import { IUser, setUser } from '@src/store/reducers/userSlice';

const ROOT_USER_URL = 'users/me';

export const PROPOSED_ENDPOINTS = {
  getUser: getBackendAuthURL(`${ROOT_USER_URL}`),
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUser: builder.query<any, any>({
      query: () => ({
        url: `${PROPOSED_ENDPOINTS.getUser}`,
        method: 'GET',
        credentials: 'include',
      }),
      transformResponse: (result: IUser) => result,
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(setUser(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
