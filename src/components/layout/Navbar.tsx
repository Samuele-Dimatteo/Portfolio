// TODO Optimize this component

'use client'

import { ReactElement, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { IconSun, IconMoon, IconMenu, IconX } from '@tabler/icons-react';
import useResponsive from '@/hooks/useResponsive';
import { useTheme } from '@/providers/ThemeProvider';
import Link from '@/components/common/Link';
import Button from '@/components/common/Button';

const Navbar = (): ReactElement => {
  const { isMobile } = useResponsive();
  const { theme, setTheme } = useTheme();
  const navMobile = useRef<HTMLDivElement>(null);
  const navItems = useRef<HTMLAnchorElement[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const itemsList = [
    { title: 'About', href: '#' },
    { title: 'Works', href: '#' },
    { title: 'Contact', href: '#' }
  ];

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const NavItems = () => (
    itemsList.map(({ title, href }, idx) => (
      <Link
        key={idx}
        ref={(item) => { item && (navItems.current[idx] = item) }}
        href={href}
        size={isMobile ? 'lg' : 'sm'}
        weight='md'
        color='foreground'
        underline='hover'
      >
        {title}
      </Link>
    ))
  );

  useGSAP(() => {
    (isMenuOpen && !isMenuClosing) && gsap.fromTo(navMobile.current, { y: '-100%' }, { y: '0%', ease: 'sine.inOut', duration: 0.75 });
    (isMenuOpen && !isMenuClosing) && gsap.from(navItems.current, { y: -50, autoAlpha: 0, stagger: 0.25, ease:'sine.out', duration: 0.3, delay: 0.5 });

    isMenuClosing && gsap.to(navItems.current, { y: -50, autoAlpha: 0, stagger: 0.25, ease: 'sine.out', duration: 0.3 });
    isMenuClosing && gsap.fromTo(navMobile.current, { y: '0%' }, { y: '-100%', ease: 'sine.inOut', duration: 0.75, delay: 0.5, onComplete: () => { setIsMenuOpen(false); setIsMenuClosing(false) } });
  }, [isMenuOpen, isMenuClosing]);

  return (
    <>
      <nav className={`relative flex justify-between items-center py-4 ${isMobile ? 'px-6' : 'px-12'} mt-4 z-0 rounded-lg bg-neutral-200 dark:bg-neutral-900`}>
        <Link href='/' size={isMobile ? 'bs' : 'xl'} weight='bd' color='foreground'>
          Samuele Dimatteo
        </Link>
        {!isMobile && (
          <div className='absolute inset-x-0 flex justify-center -z-[1]'>
            <div className='flex gap-8'>
              <NavItems />
            </div>
          </div>
        )}
        <div className={`flex items-center ${isMobile ? 'gap-2' : ''}`}>
          {isMobile && (
            <Button txtColor='foreground' isIconOnly onPress={() => setIsMenuOpen(true)}>
              <IconMenu size={26} />
            </Button>
          )}
          <Button txtColor='foreground' isIconOnly onPress={toggleTheme}>
            {theme === 'dark' ? <IconSun size={26} /> : <IconMoon size={26} />}
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div ref={navMobile} className='fixed inset-0 flex flex-col justify-center items-center gap-8 z-[9999] bg-neutral-200 dark:bg-neutral-900'>
          <>
            <Button
              txtColor='foreground'
              customStyle='fixed top-4 right-4 z-[9999]'
              isIconOnly
              onPress={() => setIsMenuClosing(true)}
            >
              <IconX size={26} />
            </Button>
            <NavItems />
          </>
        </div>
      )}
    </>
  );
};

export default Navbar;
