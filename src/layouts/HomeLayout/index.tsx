import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

import useWindowWidth from '../../hooks/useWindowWidth';

const HomeLayout = () => {
  const { width } = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (width > 800) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [width]);

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar isOpen={isOpen} screenWidth={width} />
      <div className='h-full w-full flex flex-col bg-[#121212] text-gray-50'>
        <Header toggleSidebar={toggleSideBar} />
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
