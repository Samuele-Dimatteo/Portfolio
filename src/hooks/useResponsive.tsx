import { useState, useEffect } from 'react';

const useResponsive = (): { isMobile: boolean } => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
};

export default useResponsive;
