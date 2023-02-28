import { useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToPlayList } from '../../../../../redux';

export type TrackItemProps = {
  track: {
    artists: {
      name: string;
      id: string;
      href: string;
    }[];
    preview_url: string;
    id: string;
    duration_ms: number;
    href: string;
    name: string;
  };
  index: number;
  cover: string;
};

const TrackItem = ({ track, index, cover }: TrackItemProps) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = () => {
    console.log(track.preview_url);
    if (!track.preview_url) return toast.info('No preview available');

    const formattedTrack = {
      id: track.id,
      name: track.name,
      musicSrc: track.preview_url,
      cover
    };

    dispatch(addToPlayList(formattedTrack));
  };

  return (
    <div
      key={track.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='track-table px-2 py-4 rounded-sm transition-colors duration-300 hover:bg-[rgba(0,0,0,0.2)]'
    >
      {isHovered ? (
        <button onClick={handlePlay} className='w-full -ml-1 text-start'>
          <BsPlay className='text-2xl' />
        </button>
      ) : (
        <p>{index}</p>
      )}
      <p className='font-semibold'>{track.name}</p>
      <p className='text-end tracking-tighter whitespace-nowrap'>
        {(track.duration_ms / 60000)
          .toFixed(2)
          .toString()
          .split('.')
          .join(' : ')}
      </p>
    </div>
  );
};

export default TrackItem;
