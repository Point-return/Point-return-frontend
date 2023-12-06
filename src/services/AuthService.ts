import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';
import { getBackendAuthURL } from '@src/services/common/utils/apiUtils.ts';
/* import { userApi } from './UserService'; */
import { logout } from '@src/store/reducers/userSlice';

const ROOT_LOGIN_URL = 'auth/login';
const ROOT_LOGOUT_URL = 'auth/logout';

export const PROPOSED_ENDPOINTS = {
  loginUser: getBackendAuthURL(`${ROOT_LOGIN_URL}`),
  logoutUser: getBackendAuthURL(`${ROOT_LOGOUT_URL}`),
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<{ accessToken: string }, string>({
      query: (postBody) => ({
        url: `${PROPOSED_ENDPOINTS.loginUser}`,
        method: 'POST',
        body: postBody,
        credentials: 'include',
      }),
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: `${PROPOSED_ENDPOINTS.logoutUser}`,
        method: 'POST',
        credentials: 'include',
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation } = authApi;
