import { ReactElement } from 'react';
import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';
import Text from '@/components/common/Text';
import Link from '@/components/common/Link';

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
      <Text elemType={'h1'} cl={'primary'} sz={'sm'} wt={'sb'}>Samuele Dimatteo 2024. All Rights Reserved</Text>
      <div className='flex gap-10'>
        {itemsList.map((item, idx) => (
          <Link key={idx} href={item.href} target='_blank' cl={'primary'} wt={'sb'}>{item.icon}</Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
