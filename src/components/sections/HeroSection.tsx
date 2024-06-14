import { ReactElement, useState, useEffect } from 'react';
import Text from '@/components/common/Text';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const HeroSection = (): ReactElement => {
  const [changableWords] = useTypewriter({
    words: ['CREATIVE', 'EXPERT', 'SKILLED'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 35,
    delaySpeed: 3000,
  })

  return (
    <section className='flex justify-center items-center h-screen'>
      <div>
        <Text elemType={'h1'} cl={'primary'} wt={'bd'} className='text-9xl'>
          {changableWords}
          <Cursor cursorStyle='|' />
        </Text>
        <Text elemType={'h1'} cl={'primary'} wt={'bd'} className='text-9xl -ml-[6.125rem]'>
          DESIGNER
        </Text>
        <Text elemType={'h1'} cl={'primary'} wt={'bd'} className='text-9xl'>
          DEVELOPER
        </Text>
      </div>
    </section>
  );
};

export default HeroSection;
