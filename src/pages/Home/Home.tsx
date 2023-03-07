import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleIsPageScrolled, setHeaderBG } from '../../redux';

import { Helmet } from 'react-helmet';

import { NewRelease } from '../../components';

const Home = () => {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(setHeaderBG('0,0,0'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(toggleIsPageScrolled(false));
  }, [dispatch]);

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
    <div ref={containerRef} className='overflow-y-auto pt-4 px-6 pb-14'>
      <Helmet>
        <title>Spotify - home</title>
      </Helmet>
      <NewRelease />

      <div className='min-h-[15vh]'></div>
    </div>
  );
};

export default Home;
