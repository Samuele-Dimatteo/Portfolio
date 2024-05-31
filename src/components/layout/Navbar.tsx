import { ReactElement } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import Link from '@/components/common/Link';
import Button from '@/components/common/Button';
import { IconSun, IconMoon } from '@tabler/icons-react';

const Navbar = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  const itemList = ['About', 'Works', 'Contact'];

  return (
    <nav className='flex justify-between items-center py-4 px-8 bg-neutral-900'>
      <Link href='/' size='xl' weight='bold' color='primary' underline='none'>
        Samuele Dimatteo
      </Link>
      <ul className="flex gap-8 text-white text-sm font-semibold uppercase">
        {itemList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <Button size='sm' variant='bordered' radius='md' onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <IconSun size={20} color="#FFFFFF" /> : <IconMoon size={20} color="#FFFFFF" />}
      </Button>
    </nav>
  );
};

export default Navbar;
