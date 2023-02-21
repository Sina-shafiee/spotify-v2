import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialState = {
  token: null | string;
};

const initialState: InitialState = {
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    }
  }
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
