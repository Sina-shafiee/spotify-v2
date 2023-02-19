import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from './authSlice.types';

const initialState: InitialState = {
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    }
  }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
