import { ReactElement } from 'react';
import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';

const Footer = (): ReactElement => {
  const itemList = [
    {
      icon: <IconBrandLinkedin size={20} color='#FFFFFF' />,
      link: 'https://www.linkedin.com/in/samuele-dimatteo/',
    },
    {
      icon: <IconBrandGithub size={20} color='#FFFFFF' />,
      link: 'https://github.com/TheSmager',
    },
    {
      icon: <IconBrandInstagram size={20} color='#FFFFFF' />,
      link: 'http://instagram.com/samu_dima_',
    },
  ];

  return (
    <footer>
      <div className="flex justify-between items-center p-4 w-full rounded-lg bg-zinc-800">
        <p className="text-white text-xs font-semibold">
          © 2024 Samuele Dimatteo. All rights reserved.
        </p>
        <div className="flex gap-6">
          {itemList.map((item, idx) => (
            <a key={idx} href={item.link} aria-label={`Link to ${item.link}`}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
