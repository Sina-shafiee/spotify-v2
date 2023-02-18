import { useState, useEffect } from 'react';
import { Width } from './useWindowWidth.types';

function useWindowWidth(): Width {
  const [windowSize, setWindowSize] = useState<Width>({ width: undefined });
  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default useWindowWidth;
