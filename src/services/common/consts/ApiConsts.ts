export const BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:8000'
    : 'https://point-return.sytes.net';

export const POINT_RETURN_API_URL = `${BASE_URL}/api/v1`;

export const POINT_RETURN_API_AUTH_URL = BASE_URL;
