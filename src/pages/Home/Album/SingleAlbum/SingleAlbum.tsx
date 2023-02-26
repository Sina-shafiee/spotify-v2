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
      if (containerRef.current!.scrollTop > 100) {
        dispatch(toggleIsPageScrolled(true));
      } else {
        dispatch(toggleIsPageScrolled(false));
      }
    };

    el!.addEventListener('scroll', handleScroll);

    return () => {
      el!.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <div ref={containerRef} className={` overflow-y-auto`}>
      <Helmet>
        <title>Spotify - {data?.name ?? 'Loading..'}</title>
      </Helmet>
      <ColorExtractor
        rgb={true}
        getColors={(colors: number[][]) => {
          setColor(colors[0]);
        }}
      >
        <img
          className='h-56 rounded-md w-56 ml-20 mt-28'
          src={data?.images[1]?.url ?? PlaceholderImage}
          alt='imm'
        />
      </ColorExtractor>

      <div className='min-h-[70vh]'></div>
    </div>
  );
};
