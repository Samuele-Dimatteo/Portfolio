import { ReactElement } from 'react';
import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';

const Footer = (): ReactElement => {
  const itemsList = [
    {
      icon: <IconBrandLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/samuele-dimatteo/',
    },
    {
      icon: <IconBrandGithub size={20} />,
      href: 'https://github.com/Samuele-Dimatteo',
    },
    {
      icon: <IconBrandInstagram size={20} />,
      href: 'http://instagram.com/samu_dima_',
    },
  ];

  return (
    <footer className='flex justify-between items-center pb-4 w-full'>
      <h1 className='text-sm font-semibold text-primary'>Samuele Dimatteo 2024. All Rights Reserved</h1>
      <div className='flex gap-10'>
        {itemsList.map((item, idx) => (
          <a key={idx} href={item.href} target='_blank' className='text-primary font-semibold'>{item.icon}</a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
