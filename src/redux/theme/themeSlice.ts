import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  header: {
    bg: string;
  };
  isPageScrolled: boolean;
};

const initialState: InitialState = {
  header: {
    bg: '0,0,0'
  },
  isPageScrolled: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setHeaderBG: (state, action: { payload: string; type: string }) => {
      state.header.bg = action.payload;
    },
    toggleIsPageScrolled: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      state.isPageScrolled = action.payload;
    }
  }
});
export const { setHeaderBG, toggleIsPageScrolled } = themeSlice.actions;

export default themeSlice.reducer;
