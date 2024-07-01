'use client';

import { useState, useEffect, useRef, useLayoutEffect, ReactNode, ReactElement } from 'react';
import gsap from 'gsap';
import useResponsive from '@/hooks/useResponsive';

interface PreloaderProps {
  children: ReactNode;
}

const Preloader = ({ children }: PreloaderProps): ReactElement => {
  const { isMobile } = useResponsive();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [animationCompl, setAnimationCompl] = useState<boolean>(false);
  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLHeadingElement | null>(null);
  const [idx, setIdx] = useState<number>(0);
  const [currProgress, setCurrProgress] = useState<string>('0%');

  const progressValues = ['30%', '70%', '100%'];

  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      setIdx((prevIdx) => {
        if (prevIdx === progressValues.length - 1) {
          clearInterval(intervalId);
          return prevIdx;
        }
        return prevIdx + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setCurrProgress(progressValues[idx]);

    if (idx === progressValues.length - 1) {
      gsap.to(preloaderRef.current, { 
        y: '100%',
        duration: 1,
        delay: 0.75, 
        ease: 'power2.inOut', 
        onStart: () => setIsLoading(false), 
        onComplete: () => setAnimationCompl(true)
      });
    }
  }, [idx]);

  useEffect(() => {
    if (progressRef.current) {
      const chars = progressRef.current.querySelectorAll('span');
      gsap.fromTo(chars, {
        opacity: 0 
      },
      { 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.15,
        ease: 'power3.inOut' 
      });
    }
  }, [currProgress]);

  return (
    <>
      {!animationCompl && (
        <div ref={preloaderRef} className='absolute left-0 z-[1] flex flex-col justify-between items-start p-8 w-full h-screen bg-primary'>
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-secondary`}>
            Loading...
          </h1>
          <h1 ref={progressRef} className={`${isMobile ? 'text-8xl' : 'text-9xl'} font-bold text-secondary`}>
            {currProgress.split('').map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
        </div>
      )}
      {!isLoading && <>{children}</>}
    </>
  );
};

export default Preloader;
