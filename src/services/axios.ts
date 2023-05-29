import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies';
import { signOutAxios } from '../context/AuthContext';

let coockies = parseCookies();
let isRefreshing = false;

type FailedRequestQueue = {
  onSuccess: (token: string) => void;
  onFailure: (error: AxiosError) => void;
};

let failedRequestsQueue = Array<FailedRequestQueue>();

export const api = axios.create({
  baseURL: 'https://easy-schebule-service.onrender.com/',
  headers: {
    Authorization: `Bearer ${coockies['auth.token']}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      if (error?.response?.data === 'Not authorization') {
        coockies = parseCookies();

        const { 'auth.refreshTokenId': refreshToken } = coockies;
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;
          api
            .post('/token/refresh', {
              refreshToken,
            })
            .then((response) => {
              setCookie(undefined, 'auth.token', response.data.token, {
                maxAge: 60 * 45 * 1,
                path: '/',
              });

              setCookie(
                undefined,
                'auth.refreshTokenId',
                response.data.refreshToken.id,
                {
                  maxAge: response.data.refreshToken.expiresIn,
                  path: '/',
                }
              );
              api.defaults.headers[
                'Authorization'
              ] = `Bearer ${response.data.token}`;

              failedRequestsQueue.forEach((request) =>
                request.onSuccess(response.data.token)
              );

              failedRequestsQueue = [];
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure(err));
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              if (!originalConfig?.headers) {
                return;
              }
              originalConfig.headers['Authorization'] = `Bearer ${token}`;

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      } else {
        signOutAxios();
      }
    }

    return Promise.reject(error);
  }
);
