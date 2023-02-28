import { CiTimer } from 'react-icons/ci';
import TrackItem from '../TrackItem';

import { TrackProps } from './index.types';

const TrackList = ({ tracks, cover }: TrackProps) => {
  return (
    <div className='p-4 md:p-16 pb-0 relative'>
      <div
        className={`track-table text-base p-2 rounded-sm border-b border-black py-4 my-4 font-bold`}
      >
        <h6 className='text-lg md:text-xl'>#</h6>
        <h6 className='text-lg md:text-xl'>Name</h6>
        <h6 className='text-center'>
          <CiTimer className='w-min ml-auto text-2xl md:text-4xl' />
        </h6>
      </div>
      <div>
        {tracks?.items?.map((track, index) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              index={index}
              cover={cover}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrackList;
