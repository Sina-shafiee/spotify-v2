import { api } from '../api';
import { NewReleaseType } from './musicApi.types';

const musicApi = api.injectEndpoints({
  endpoints: (builder) => ({
    newRelease: builder.query<NewReleaseType, { token: string | null }>({
      query: ({ token }) => {
        return {
          url: '/browse/new-releases',
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
      }
    }),
    topTracks: builder.query({
      query: ({ token }) => ({
        url: '/browse/categories/toplists/playlists',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useNewReleaseQuery, useTopTracksQuery } = musicApi;
