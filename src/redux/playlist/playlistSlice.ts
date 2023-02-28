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
      name: 'Begging',
      musicSrc:
        'https://ts7.tarafdari.com/contents/user35197/content-sound/glass_animals_-_heat_waves_320.mp3',
      cover:
        'https://i1.sndcdn.com/artworks-opFumb3EMod9o4vQ-A0f97w-t500x500.jpg',
      id: '1'
    },
    {
      name: 'Blinding Lights (2020)',
      musicSrc:
        'https://dl.musicfaz.ir/1398/12/The%20Weeknd%20-%20Blinding%20Lights_320.mp3',
      cover:
        'https://i1.sndcdn.com/artworks-T5KqOdidfrbpyddU-sGIJsA-t500x500.jpg',
      id: '2'
    },
    {
      name: 'Levitating',
      musicSrc:
        'https://ts9.tarafdari.com/contents/user698141/content-sound/05._dua_lipa_-_levitating.mp3',
      cover:
        'https://i1.sndcdn.com/artworks-IeJj19bzbXIrLiE3-Foa40Q-t500x500.jpg',
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
