import { TokenResponse } from '../../types/token';
import { api } from '../api';
import { setToken } from './authSlice';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getToken: builder.mutation<TokenResponse, void>({
      query: () => ({
        url: 'https://spotify-token-delta.vercel.app/getToken',
        method: 'GET'
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // on mutation success
          dispatch(setToken(data.access_token));
        } catch (err) {
          // on mutation error
          console.error('Error from auth api', err);
        }
      }
    })
  })
});

export const { useGetTokenMutation } = authApi;
