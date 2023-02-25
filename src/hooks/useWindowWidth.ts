import { useState, useEffect } from 'react';
import { Width } from './hooks.types';

function useWindowWidth(): Width {
  const [windowSize, setWindowSize] = useState<Width>({ width: 0 });
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
