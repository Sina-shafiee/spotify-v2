import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
      <p>Page not found</p>
      <Link to={'/home'}>Back to Home</Link>
    </div>
  );
};
