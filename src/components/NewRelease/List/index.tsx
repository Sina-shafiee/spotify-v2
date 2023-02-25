import { Item } from '../Item';
import { ListProps } from './index.types';

export const List = ({ data }: ListProps) => {
  return (
    <section className='grid-layout'>
      {data.map((album) => (
        <Item key={album.id} data={album} />
      ))}
    </section>
  );
};
