import { SingleAlbum } from '../../types/album';
import { api } from '../api';

type GetAlbumDetailProps = { token: string | null; id: string | undefined };

const albumApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAlbumDetail: builder.query<SingleAlbum, GetAlbumDetailProps>({
      query: ({ token, id }) => ({
        url: `albums/${id}`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }),
    getAlbumTracks: builder.query({
      query: ({ token, id }) => ({
        url: `albums/${id}/tracks`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
  })
});

export const { useGetAlbumDetailQuery, useGetAlbumTracksQuery } = albumApi;
