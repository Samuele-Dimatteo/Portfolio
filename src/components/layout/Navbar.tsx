'use client'

import { ReactElement, useState } from 'react';
import useResponsive from '@/hooks/useResponsive';
import { IconMenu } from '@tabler/icons-react';

const Navbar = (): ReactElement => {
  const { isMobile } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const itemsList = [
    { title: 'About', href: '#about' },
    { title: 'Work', href: '#work' },
    { title: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className='flex justify-between items-center pt-4 w-full px-4'>
      <h1 className='text-xl font-bold text-secondary'>Samuele Dimatteo</h1>
      {isMobile ? (
        <div className='relative'>
          <button onClick={toggleMenu} className='text-secondary'>
            <IconMenu />
          </button>
          {isMenuOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2'>
              {itemsList.map((item, idx) => (
                <a key={idx} href={item.href} className='block px-4 py-2 text-base text-secondary font-semibold hover:bg-gray-100'>
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className='flex gap-10'>
          {itemsList.map((item, idx) => (
            <a key={idx} href={item.href} className='text-base text-secondary font-semibold'>
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
