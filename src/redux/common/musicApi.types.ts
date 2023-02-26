import { Album } from '../../types/album';

export type NewReleaseType = {
  albums: {
    items: Album[];
  };
};
