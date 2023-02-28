export type TrackProps = {
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
  cover: string;
};
