import { Navigation } from '../../../components';
import { HeaderProps } from './Header.types';

const buttons = [
  { title: 'Premium', id: 1 },
  { title: 'Support', id: 2 },
  { title: 'Download', id: 3 }
];

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className='bg-[rgba(0,0,0,0.6)] p-5 flex justify-between items-center'>
      <Navigation />
      <section className='hidden md:inline-block'>
        {buttons.map((b) => (
          <button className='btn text-bold' key={b.id}>
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
