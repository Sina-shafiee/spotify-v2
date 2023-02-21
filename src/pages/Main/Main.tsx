import { useNavigate } from 'react-router-dom';
import { useGetTokenMutation } from '../../redux';

// import homeBg from '../../assets/images/home-bg.jpg';

export const Main = () => {
  const navigate = useNavigate();
  const [login] = useGetTokenMutation();

  const handleLogin = async () => {
    await login().unwrap();
    navigate('/home');
  };

  return (
    <div className=' h-screen text-gray-50 overflow-hidden '>
      <div
        className={`h-full bg-no-repeat bg-cover bg-top w-full bg-[url('https://i.ytimg.com/vi/MJt_Z11Ug8E/maxresdefault.jpg')]`}
      >
        <div className='bg-[#121212] h-full bg-opacity-95 flex flex-col items-center justify-center gap-4'>
          <h2>Welcome to spotify Clone</h2>
          <button
            className='btn bg-gray-50 text-black rounded-2xl'
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
