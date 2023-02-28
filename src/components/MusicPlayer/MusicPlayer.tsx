import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

export const MusicPlayer = () => {
  const playlist = useSelector(
    (state: RootState) => state.rootReducer.playlist.tracks
  );
  return (
    <ReactJkMusicPlayer
      audioLists={playlist}
      autoPlay={false}
      responsive={false}
      showDestroy={false}
      showReload={false}
      showThemeSwitch={false}
      showDownload={false}
      showMediaSession={false}
      showMiniProcessBar={false}
      defaultVolume={2}
      toggleMode={false}
      glassBg
      mode='full'
      autoHiddenCover={false}
    />
  );
};
