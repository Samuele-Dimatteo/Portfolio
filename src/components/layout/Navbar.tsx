import { ReactElement, useState } from 'react';
import useResponsive from '@/hooks/useResponsive';
import { useTheme } from '@/providers/ThemeProvider';
import Link from '@/components/common/Link';
import Button from '@/components/common/Button';
import { motion } from 'framer-motion';
import { IconSun, IconMoon, IconMenu, IconX } from '@tabler/icons-react';

const Navbar = (): ReactElement => {
  const { isMobile } = useResponsive();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const itemsList = [
    { title: 'About', href: '#' },
    { title: 'Works', href: '#' },
    { title: 'Contact', href: '#' }
  ];

  const NavItems = () => (
    itemsList.map(({ title, href }, idx) => (
      <motion.div key={idx} initial={isMobile && { y: -50, opacity: 0 }} animate={isMobile && { y: 0, opacity: 1 }} transition={isMobile ? { delay: idx * 0.1 } : undefined}>
        <Link href={href} size={isMobile ? 'lg' : 'sm'} weight='md' color='foreground' underline='hover'>
          {title}
        </Link>
      </motion.div>
    ))
  );

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>
      <nav className={`relative flex justify-between items-center py-4 ${isMobile ? 'px-6' : 'px-12'} mt-4 rounded-lg bg-neutral-200 dark:bg-neutral-900`}>
        <Link href='/' size='xl' weight='bd' color='foreground'>
          Samuele Dimatteo
        </Link>
        {!isMobile && (
          <div className='absolute inset-x-0 flex justify-center pointer-events-none'>
            <div className='flex gap-8 pointer-events-auto'>
              <NavItems />
            </div>
          </div>
        )}
        <div className={`flex items-center ${isMobile ? 'gap-2' : 'ml-auto'}`}>
          {isMobile && (
            <Button txtColor='foreground' isIconOnly onPress={() => setIsMenuOpen(!isMenuOpen)}>
              <IconMenu size={26} color='#FFFFFF' />
            </Button>
          )}
          <Button txtColor='foreground' isIconOnly onPress={toggleTheme}>
            {theme === 'dark' ? <IconSun size={26} /> : <IconMoon size={26} />}
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className='fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 py-4 px-6 bg-neutral-200 dark:bg-neutral-900'
        >
          <>
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className='fixed top-4 right-4 z-50'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconX size={26} color='#FFFFFF' />
            </motion.button>
            <NavItems />
          </>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;


