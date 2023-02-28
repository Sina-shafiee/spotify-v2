import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setHeaderBG } from '../../redux';

export const NotFound = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderBG('0,0,0'));
  }, [dispatch]);

  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
      <Helmet>
        <title>Spotify - page not found</title>
      </Helmet>
      <p className='text-xl -mt-24 text-center'>
        Sorry Dear Visitor this Page is not available right now
      </p>
      <Link className='btn bg-white text-black rounded-md mt-4' to={'/home'}>
        Back to Home
      </Link>
    </div>
  );
};
