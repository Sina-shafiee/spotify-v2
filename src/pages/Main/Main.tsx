import { useNavigate } from 'react-router-dom';
import { useGetTokenMutation } from '../../redux';

import { Helmet } from 'react-helmet';

import HomeBg from '../../assets/images/home-bg.jpg';
import { toast } from 'react-toastify';

const Main = () => {
  const navigate = useNavigate();
  const [login] = useGetTokenMutation();

  const handleLogin = async () => {
    try {
      await login().unwrap();
      navigate('/home');
      toast.success('logged in successfully');
    } catch (error) {
      toast.error("Something went wrong, can't login");
    }
  };

  return (
    <main className=' h-screen text-gray-50 overflow-hidden '>
      <Helmet>
        <title>Spotify Clone</title>
        <meta name='description' content='Spotify Clone' />
        <meta name='author' content='Sina Shafiee' />
        <meta property='og:title' content='Spotify Clone' />
        <meta
          property='og:description'
          content='Spotify Clone using react redux toolkit'
        />
        <meta name='keywords' content='Spotify Clone' />
      </Helmet>
      <section
        className={`h-full relative bg-no-repeat before:absolute before:top-0 before:left-0 b bg-cover bg-center before:w-full before:h-full before:bg-gradient-to-bl before:from-black before:to-[#443b3b] before:opacity-60 w-full flex flex-col items-center justify-center gap-4`}
        style={{ backgroundImage: `url(${HomeBg})` }}
      >
        <h2 className='text-2xl z-20'>Welcome to spotify Clone</h2>
        <button
          className='btn bg-gray-50 z-20 px-12 text-black rounded-2xl'
          onClick={handleLogin}
        >
          Login
        </button>
      </section>
    </main>
  );
};
export default Main;
