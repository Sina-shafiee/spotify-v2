import { useEffect, useState, useRef } from 'react';

import { ColorExtractor } from 'react-color-extractor';
import { Helmet } from 'react-helmet';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  RootState,
  useGetAlbumDetailQuery,
  setHeaderBG,
  toggleIsPageScrolled
} from '../../../../redux';

import { arrToStr } from '../../../../utils/arrayToRgb';

import PlaceholderImage from '../../../../assets/images/placeholder.png';
import TrackList from './TrackList';
import Loading from './Loading';

export const SingleAlbum = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.rootReducer.auth.token);

  const { id } = useParams();
  const { data } = useGetAlbumDetailQuery({ token, id });

  const [color, setColor] = useState([87, 87, 87]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(setHeaderBG(arrToStr(color)));
  }, [color, dispatch]);

  useEffect(() => {
    dispatch(toggleIsPageScrolled(false));
  }, [color, dispatch]);

  useEffect(() => {
    const el = containerRef.current;

    const handleScroll = () => {
      if (containerRef.current && containerRef.current?.scrollTop > 100) {
        dispatch(toggleIsPageScrolled(true));
      } else {
        dispatch(toggleIsPageScrolled(false));
      }
    };

    el?.addEventListener('scroll', handleScroll);

    return () => {
      el?.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div ref={containerRef} className={` overflow-y-auto`}>
      <Helmet>
        <title>Spotify - {data?.name ?? 'Loading..'}</title>
      </Helmet>
      <div className='flex gap-8 p-16 pb-0 flex-wrap'>
        <ColorExtractor
          rgb={true}
          getColors={(colors: number[][]) => {
            setColor(colors[0]);
          }}
        >
          <img
            className='h-56 rounded-md w-56'
            src={data?.images[1]?.url ?? PlaceholderImage}
            alt='imm'
          />
        </ColorExtractor>

        <div className='self-end font-semibold space-y-2'>
          <p>{data && 'Album'}</p>
          <h2>{data?.name}</h2>
          <p>{data?.release_date?.split('-').join(' - ')}</p>
        </div>
      </div>
      <TrackList
        tracks={data?.tracks}
        cover={data?.images[2]?.url ?? data?.images[0].url}
      />

      <div className='min-h-[20vh]'></div>
    </div>
  );
};
