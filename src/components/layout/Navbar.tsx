'use client'

import { ReactElement, useState } from 'react';
import useResponsive from '@/hooks/useResponsive';

const Navbar = (): ReactElement => {
  const { isMobile } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const itemsList = [
    { title: 'About', href: '#about' },
    { title: 'Work', href: '#work' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <nav className='flex justify-between items-center pt-4 w-full'>
      <h1 className='text-xl font-bold text-secondary'>Samuele Dimatteo</h1>
      <div className='flex gap-10'>
        {itemsList.map((item, idx) => (
          <a key={idx} href={item.href} className='text-base text-secondary font-semibold'>{item.title}</a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
