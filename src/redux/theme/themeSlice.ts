import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  header: {
    bg: '0,0,0'
  }
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setHeaderBG: (state, action) => {
      state.header.bg = action.payload;
    }
  }
});
export const { setHeaderBG } = themeSlice.actions;

export default themeSlice.reducer;
