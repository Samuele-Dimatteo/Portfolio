import { ReactElement, useEffect, useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Text from '@/components/common/Text';

const Preloader = (): ReactElement => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState<number>(0);
  const [currProgress, setCurrProgress] = useState<string>('0%');

  const progressValues = ['30%', '70%', '100%'];

  useEffect(() => {
    const interval = setInterval(() => {
    setIdx((prevIdx) => (prevIdx + 1));
    }, 1000);
    
    setCurrProgress(progressValues[idx]);
    
    if (idx === progressValues.length - 1) {
    clearInterval(interval);
    }
    
    return () => clearInterval(interval);
    }, [idx]);

  useEffect(() => {       
    if (progressRef.current) {
      const textSplited = new SplitType(progressRef.current, {types: 'chars'});
      
      gsap.from(textSplited.chars, { 
        y: 40,
        stagger: 0.15,
        ease: 'power3.out',
        duration: 0.5,
        onComplete: () => textSplited.revert(),
      });
    }
  }, [currProgress]);

  return (
    <div className="absolute left-0 flex flex-col justify-between items-start p-8 w-full h-screen bg-[#0B0B0B] overflow-hidden">
      <Text elemType={'h1'} cl={'secondary'} wt={'bd'} className='text-4xl'>
        Loading...
      </Text>
      <Text
        ref={progressRef}
        elemType={'h1'}
        cl={'secondary'}
        wt={'bd'}
        className='text-9xl'
      >
        {currProgress}
      </Text>
    </div>
  );
};

export default Preloader;
