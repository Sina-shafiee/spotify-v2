import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from './icons';

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <section className='flex gap-2 sticky top-0 left-0'>
      <button
        className='p-2 inline-block rounded-full bg-black'
        onClick={() => navigate(-1)}
      >
        <ArrowLeft classNames='h-6 w-6' />
      </button>
      <button
        className='p-2 inline-block rounded-full bg-black'
        onClick={() => navigate(1)}
      >
        <ArrowRight classNames='h-6 w-6' />
      </button>
    </section>
  );
};
