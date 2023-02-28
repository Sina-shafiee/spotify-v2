import { createSlice } from '@reduxjs/toolkit';

type Track = {
  name: string;
  musicSrc: string;
  cover: string;
  id: string;
};

type AddToPlayListAction = {
  type: string;
  payload: Track;
};

type InitialState = {
  tracks: Track[];
};

const initialState: InitialState = {
  tracks: [
    {
      name: 'Macan band 2',
      musicSrc:
        'https://media-vip.my-pishvaz.com/musicfa/tagdl/8e401/Mastan%20-%20Ye%20Zan%20(320).mp3?st=TErM-5-mNFcP8So2OlxtnA&e=1677496905',
      cover:
        'https://music-fa.com/wp-content/uploads/2022/09/Macan-Band-Music-fa.com_.jpg',
      id: '2'
    },
    {
      name: 'Journey',
      musicSrc:
        'https://ts2.tarafdari.com/contents/user558662/content-sound/11._mark_eliyahu_-_journey_mahmut_orhan_remix.mp3',
      cover:
        'https://istanbulmusic1.xyz/wp-content/uploads/2021/12/7fef0dd53edbd3f58fe3d8cff69d7de8-6.jpg',
      id: '23'
    },
    {
      name: 'Death of me',
      musicSrc:
        'https://ts9.tarafdari.com/contents/user707836/content-sound/light_the_torch_-_death_of_me.mp3',
      cover:
        'https://ts9.tarafdari.com/contents/user707836/content-sound/unnadmed.jpg',
      id: '3'
    }
  ]
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addToPlayList: (state, { payload }: AddToPlayListAction) => {
      state.tracks = [payload, ...state.tracks];
    },
    removeTrack: (state, { payload }: { type: string; payload: string }) => {
      const temp = state.tracks.filter((track) => track.id !== payload);
      state.tracks = temp;
    }
  }
});

export const { addToPlayList, removeTrack } = playlistSlice.actions;

export default playlistSlice.reducer;
