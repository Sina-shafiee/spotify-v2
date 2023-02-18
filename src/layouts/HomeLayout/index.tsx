import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';

const HomeLayout = () => {
  return (
    <div className='flex gap-4 h-screen'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
