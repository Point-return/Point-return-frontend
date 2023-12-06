import {
  POINT_RETURN_API_AUTH_URL,
  POINT_RETURN_API_URL,
} from '@src/services/common/consts/ApiConsts.ts';

export const getBaseUrl = (baseUrl: string) => new URL('', baseUrl).href;

export const getBackendURL = (url: string) =>
  new URL(url, getBaseUrl(`${POINT_RETURN_API_URL}/`)).href;

export const getBackendAuthURL = (url: string) =>
  new URL(url, getBaseUrl(`${POINT_RETURN_API_AUTH_URL}/`)).href;
