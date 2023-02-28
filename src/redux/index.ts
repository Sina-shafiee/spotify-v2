import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import themeReducer from './theme/themeSlice';
import playlistReducer from './playlist/playlistSlice';
import { api } from './api';
const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  playlist: playlistReducer
});

export const store = configureStore({
  reducer: {
    rootReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { setToken } from './auth/authSlice';
export { setHeaderBG, toggleIsPageScrolled } from './theme/themeSlice';
export { addToPlayList } from './playlist/playlistSlice';

export { useGetTokenMutation } from './auth/authApi';
export { useNewReleaseQuery, useTopTracksQuery } from './common/musicApi';
export {
  useGetAlbumDetailQuery,
  useGetAlbumTracksQuery
} from './album/albumApi';
