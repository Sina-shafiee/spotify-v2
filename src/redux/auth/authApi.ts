import { TokenResponse } from '../../types/token';
import { api } from '../api';
import { setToken } from './authSlice';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getToken: builder.mutation<TokenResponse, void>({
      query: () => ({
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            btoa(
              '32e39cf3bbde483aaa69da638138a5d0:7a7b42b44b514aa5a09e271f4364b86e'
            )
        },
        body: 'grant_type=client_credentials'
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // on mutation success
          dispatch(setToken(data.access_token));
          console.log('data received', data);
        } catch (err) {
          // on mutation error
          console.error('Error from auth api', err);
        }
      }
    })
  })
});

export const { useGetTokenMutation } = authApi;
