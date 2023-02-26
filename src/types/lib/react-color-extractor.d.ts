declare module 'react-color-extractor' {
  import { ComponentType } from 'react';

  interface ColorExtractorProps {
    src?: string;
    rgb?: boolean;
    children: ReactNode;
    getColors: (colors: number[][]) => void;
    options?: {
      quality?: number;
      colorCount?: number;
      backgroundColor?: string;
      minWidth?: number;
      minHeight?: number;
      maxWidth?: number;
      maxHeight?: number;
    };
  }

  const ColorExtractor: ComponentType<ColorExtractorProps>;

  export { ColorExtractor, ColorExtractorProps };
}
