import { ReactElement } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from '@/providers/ThemeProvider';

const Navbar = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  const itemList = ['About', 'Works', 'Contact'];

  return (
    <nav className="flex justify-between items-center p-4 mt-4 w-full rounded-lg bg-zinc-800">
      <a className="text-white text-xl font-extrabold uppercase" href="/">
        Samuele Dimatteo
      </a>
      <ul className="flex gap-8 text-white text-sm font-semibold uppercase">
        {itemList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <button className="p-1.5 border-2 border-white rounded-" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <IconSun size={20} color="#FFFFFF" /> : <IconMoon size={20} color="#FFFFFF" />}
      </button>
    </nav>
  );
};

export default Navbar;
