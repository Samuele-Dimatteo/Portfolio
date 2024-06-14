'use client'

import { ReactElement, useState } from 'react';
import useResponsive from '@/hooks/useResponsive';
import Text from '@/components/common/Text';
import Link from '@/components/common/Link';

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
      <Text elemType={'h1'} cl={'primary'} sz={'xl'} wt={'eb'}>Samuele Dimatteo</Text>
      <div className='flex gap-10'>
        {itemsList.map((item, idx) => (
          <Link key={idx} href={item.href} cl={'primary'} sz={'bs'} wt={'sb'}>{item.title}</Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
