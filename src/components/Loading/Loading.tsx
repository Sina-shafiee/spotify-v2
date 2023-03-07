import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='min-h-[80vh] grid place-content-center'>
      <ThreeDots
        height='40'
        width='50'
        color='#02020'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default Loading;
