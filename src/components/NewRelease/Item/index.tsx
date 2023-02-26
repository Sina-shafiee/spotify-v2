import { Link } from 'react-router-dom';
import { ItemProps } from './index.types';

export const Item = ({ data: { name, images, artists, id } }: ItemProps) => {
  return (
    <div className='card'>
      <img
        alt={name}
        src={images[0].url}
        className='w-full h-52 object-cover rounded-sm'
      />
      <Link to={`album/${id}`} className='pb-4'>
        <h4 className='text-base mt-4 font-bold'>
          {name.length >= 20 ? name.slice(0, 20) + ' ...' : name}
        </h4>
        <h5 className='text-sm text-gray-300'>{artists[0].name}</h5>
      </Link>
    </div>
  );
};
