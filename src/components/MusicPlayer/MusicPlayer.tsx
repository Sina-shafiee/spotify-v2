import ReactJkMusicPlayer, {
  ReactJkMusicPlayerAudioListProps
} from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

import { useDispatch, useSelector } from 'react-redux';
import { removeTrack, RootState } from '../../redux';

export const MusicPlayer = () => {
  const playlist = useSelector(
    (state: RootState) => state.rootReducer.playlist.tracks
  );
  const dispatch = useDispatch();

  const handleAudioListsChange = (
    _: any,
    audioLists: ReactJkMusicPlayerAudioListProps[],
    __: any
  ) => {
    const playlistTrackIds = playlist.map((track) => track.id);
    const playerTrackIds = audioLists.map((track) => track.id);

    const removedTrackIds = playlistTrackIds.filter(
      (id) => !playerTrackIds.includes(id)
    );

    removedTrackIds.forEach((id) => dispatch(removeTrack(id)));
  };

  return (
    <ReactJkMusicPlayer
      audioLists={playlist}
      responsive={false}
      autoPlay
      showDestroy={false}
      showReload={false}
      showThemeSwitch={false}
      showDownload={false}
      showMediaSession={false}
      clearPriorAudioLists
      autoPlayInitLoadPlayList
      showMiniProcessBar={false}
      defaultVolume={0.4}
      toggleMode={false}
      glassBg
      mode='full'
      autoHiddenCover={false}
      onAudioListsChange={handleAudioListsChange}
    />
  );
};
