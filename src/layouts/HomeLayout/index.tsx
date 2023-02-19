import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

const HomeLayout = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='h-full w-full flex flex-col bg-[#121212] text-gray-50'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
