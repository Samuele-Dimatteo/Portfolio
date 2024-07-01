'use client'

import { useState, useEffect, useRef, ReactElement } from 'react';
import { IconMenu, IconX } from '@tabler/icons-react';
import useResponsive from '@/hooks/useResponsive';

const Navbar = (): ReactElement => {
  const { isMobile } = useResponsive();
  const navRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isNavOutOfView, setIsNavOutOfView] = useState<boolean>(false);

  const itemsList = [
    { title: 'About', href: '/about' },
    { title: 'Work', href: '/work' },
    { title: 'Contact', href: '/contact' }
  ];

  const NavItems = (): ReactElement => (
    <div className={`flex ${isMenuOpen ? 'flex-col' : ''} items-center gap-8`}>
      {itemsList.map((item) => (
        <a key={item.href} href={item.href} className='text-base text-secondary font-semibold'>
          {item.title}
        </a>
      ))}
    </div>
  );

  const NavMenu = (): ReactElement => (
    <div
      className={`fixed inset-0 ${isMobile ? '' : 'w-96 inset-y-0 right-0 left-auto'} flex justify-center items-center bg-primary`}
    >
      <IconX 
        size={26} 
        className='absolute top-4 right-4 text-secondary' 
        onClick={toggleMenu} 
      />
      <NavItems />
    </div>
  );

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsNavOutOfView(!entry.isIntersecting);
    }, {
      threshold: 0
    });

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className='flex justify-between items-center pt-4'>
        <h1 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-secondary`}>
          Samuele Dimatteo
        </h1>
        {isMobile ? (
          <IconMenu 
            size={22} 
            className='text-secondary' 
            onClick={toggleMenu} 
          />
        ) : (
          <NavItems />
        )}
      </nav>
      {isMenuOpen && <NavMenu />}
      {isNavOutOfView && !isMenuOpen && (
        <button className='fixed right-4 flex justify-center items-center w-16 h-16 rounded-full text-secondary bg-primary' onClick={toggleMenu}>
          <IconMenu size={26} />
        </button>
      )}
    </>
  );
};

export default Navbar;
