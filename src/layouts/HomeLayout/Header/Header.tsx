import { Navigation } from '../../../components';

const buttons = [
  { title: 'Premium', id: 1 },
  { title: 'Support', id: 2 },
  { title: 'Download', id: 3 }
];

const Header = () => {
  return (
    <header className='bg-[rgba(0,0,0,0.6)] p-5 flex justify-between items-center'>
      <Navigation />
      <section>
        {buttons.map((b) => (
          <button className='btn text-bold' key={b.id}>
            {b.title}
          </button>
        ))}
      </section>
    </header>
  );
};

export default Header;
