export type Album = {
  artists: {
    name: string;
    id: string;
    href: string;
  }[];
  id: string;
  release_date: string;
  total_tracks: number;
  name: string;
  images: { height: number; width: number; url: string }[];
};
