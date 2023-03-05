import { TokenResponse } from '../../types/token';
import { api } from '../api';
import { setToken } from './authSlice';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getToken: builder.mutation<TokenResponse, void>({
      query: () => ({
        url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token',
        method: 'POST',
        headers: {
          mode: 'no-cors',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            btoa(
              '0b1ed6a950864dbe87c65844faa578ec:1709527a40a84462819b1c4a8d975fd5'
            )
        },
        body: 'grant_type=client_credentials'
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
