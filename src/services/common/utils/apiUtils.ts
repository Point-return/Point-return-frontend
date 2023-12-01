import { BASE_URL } from '@src/services/common/consts/ApiConsts.ts';

export const getBaseUrl = (baseUrl: string) => new URL('', baseUrl).href;

export const getBackendURL = (url: string) =>
  new URL(url, getBaseUrl(`${BASE_URL}/`)).href;
