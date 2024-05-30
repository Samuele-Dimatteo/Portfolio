import { ReactElement } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from '@/providers/ThemeProvider';
import Button from '@/components/common/Button';
import Link from '@/components/common/Link';

const Navbar = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  const itemList = ['About', 'Works', 'Contact'];

  return (
    <nav className="flex justify-between items-center p-4 mt-4 w-full rounded-lg bg-zinc-800">
      <Link href='/' size='lg' underline='none'>
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
