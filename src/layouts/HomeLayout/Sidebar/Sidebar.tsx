import { BsSpotify } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import { HomeIcon, SearchIcon, TopRatedIcon } from './icons';
import { SideBarProps } from './Sidebar.types';

const menuItems = [
  { title: 'Home', icon: HomeIcon, id: 1, to: '/home' },
  { title: 'Search', icon: SearchIcon, id: 2, to: '/home/bye' },
  { title: 'Top Rated', icon: TopRatedIcon, id: 3, to: '/home/hi' }
];

const footerPages = [
  { title: 'legal', to: '#', id: 1 },
  { title: 'privacy center', to: '#', id: 2 },
  { title: 'cookie setting', to: '#', id: 4 },
  { title: 'about ads', to: '#', id: 3 }
];

const Sidebar = ({ screenWidth: width, isOpen }: SideBarProps) => {
  return (
    <aside
      className={`w-[240px] sm:min-w-[270px] z-20 ${
        width < 800 ? 'absolute' : null
      } ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-[#000] text-gray-50 h-full transition-transform duration-300`}
    >
      <nav className='p-6 flex flex-col h-full'>
        <section className='flex items-center gap-1 text-2xl font-semibold'>
          <BsSpotify className='w-10 h-10' /> Spotify
        </section>
        <ul className='mt-9 flex flex-col gap-4'>
          {menuItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-gray-50' : 'text-gray-400'
              }
              to={item.to}
              key={item.id}
              end
            >
              {({ isActive }) => (
                <li className='flex gap-3 text-2xl items-center'>
                  <item.icon
                    classNames={`w-6 h-6 ${
                      isActive ? 'fill-gray-50' : 'fill-gray-400'
                    }`}
                  />{' '}
                  <span className='text-sm font-medium'>{item.title}</span>
                </li>
              )}
            </NavLink>
          ))}
        </ul>
        <section className='mt-auto'>
          {footerPages.map((page) => (
            <p
              key={page.id}
              className='text-xs text-gray-400 inline-block pr-3 cursor-pointer'
            >
              {page.title}
            </p>
          ))}
        </section>
      </nav>
    </aside>
  );
};

export default Sidebar;
