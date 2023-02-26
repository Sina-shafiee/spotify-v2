import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

import useWindowWidth from '../../hooks/useWindowWidth';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import tinycolor from 'tinycolor2';

const HomeLayout = () => {
  const { width } = useWindowWidth();
  const bgColor = useSelector(
    (state: RootState) => state.rootReducer.theme.header.bg
  );
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
      <div
        className={`h-full w-full flex flex-col`}
        style={{
          color: `${
            tinycolor('rgb(' + bgColor + ')').isLight() ? '#000000' : '#fefefe'
          }`,
          background: `linear-gradient(0deg, rgba(10, 10, 10, 1) 0%,rgba(${bgColor}, 0.8) 100%)`
        }}
      >
        <Header toggleSidebar={toggleSideBar} />
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
