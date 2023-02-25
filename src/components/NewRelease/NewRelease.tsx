import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { useNewReleaseQuery } from '../../redux';
import { List } from './List';
import Skeleton from './skeleton';

export const NewRelease = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const { data, isLoading, isError } = useNewReleaseQuery({ token });

  let content: React.ReactNode;

  if (isLoading) {
    content = <Skeleton />;
  }
  if (isError) {
    content = (
      <div className='h-[40vh] flex items-center justify-center'>
        <p>Something went wrong please try again later..</p>
      </div>
    );
  }
  if (data) {
    content = <List data={data?.albums?.items} />;
  }

  return (
    <>
      <h2 className='my-4 text-xl font-semibold'>New Release</h2>
      {content}
    </>
  );
};
