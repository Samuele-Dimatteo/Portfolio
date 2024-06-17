'use client';

import { ReactElement, useEffect, useState } from 'react';
import Text from '@/components/common/Text';

const Preloader = (): ReactElement => {
  return (
    <div className='flex flex-col items-center w-full h-screen bg-[#0B0B0B]'>
      <Text elemType={'h1'} cl={'secondary'}>Loading...</Text>
      <Text elemType={'h1'} cl={'secondary'}>100%</Text>
    </div>
  );
}

export default Preloader;
