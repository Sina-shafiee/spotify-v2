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

export type SingleAlbum = Album & {
  tracks: {
    href: string;
    items: {
      artists: {
        name: string;
        id: string;
        href: string;
      }[];
      preview_url: string;
      id: string;
      duration_ms: number;
      href: string;
      name: string;
    }[];
  };
};
