'use client';

import useResponsive from '@/hooks/useResponsive';
import useTextWriter from '@/hooks/useTextWriter';
import { ReactElement } from 'react';

const HeroSection = (): ReactElement => {
  const { isMobile } = useResponsive();

  const text = useTextWriter({
    words: ['CREATIVE', 'VERSATILE', 'INNOVATE'],
    typeSpeed: 70,
    erasingSpeed: 35,
    delay: 3000,
  });

  return (
    <section className='flex justify-center items-center h-screen'>
      <div>
        <h1 className={`${isMobile ? 'text-5xl' : 'text-9xl'} font-bold text-secondary`}>
          {text}
        </h1>
          <h1 className={`${isMobile ? '-ml-[2.25rem] text-5xl' : '-ml-[6.125rem] text-9xl'} font-bold text-secondary`}>
          DESIGNER
        </h1>
        <h1 className={`${isMobile ? 'text-5xl' : 'text-9xl'} font-bold text-secondary`}>
          DEVELOPER
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
