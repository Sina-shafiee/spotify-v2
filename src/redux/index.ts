import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { api } from './api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { setToken } from './auth/authSlice';
export { useGetTokenMutation } from './auth/authApi';
export { useNewReleaseQuery, useTopTracksQuery } from './music/musicApi';
