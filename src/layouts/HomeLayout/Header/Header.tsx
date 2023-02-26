import { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { HeaderProps } from './Header.types';

import { Navigation } from '../../../components';

const buttons = [
  { title: 'Premium', id: 1 },
  { title: 'Support', id: 2 },
  { title: 'Download', id: 3 }
];

const Header = ({ toggleSidebar }: HeaderProps) => {
  const {
    header: { bg: bgColor },
    isPageScrolled
  } = useSelector((state: RootState) => state.rootReducer.theme);

  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isPageScrolled) {
      headerRef.current!.style.backgroundColor = `rgba(${bgColor}, 0.4)`;
    } else {
      headerRef.current!.style.backgroundColor = `rgba(${bgColor}, 0)`;
    }
  }, [isPageScrolled, bgColor]);

  return (
    <header
      ref={headerRef}
      className={` p-5 flex justify-between duration-300 transition-all items-center`}
    >
      <Navigation />
      <section className='hidden md:inline-block'>
        {buttons.map((b) => (
          <button className='btn font-semibold' key={b.id}>
            {b.title}
          </button>
        ))}
      </section>
      <button className='md:hidden' onClick={toggleSidebar}>
        X
      </button>
    </header>
  );
};

export default Header;
