import { ReactNode, ReactElement } from 'react';

interface LinkProps {
  href: string;
  isExternal?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'foreground' | 'primary' | 'secondary';
  underline?: 'none' | 'hover' | 'always';
  children: ReactNode;
}

enum SizeLink {
  'sm' = 'text-sm',
  'md' = 'text-base',
  'lg' = 'text-lg',
  'xl' = 'text-xl',
}

enum Weightink {
  'normal' = 'font-normal',
  'medium'= 'font-medium',
  'semibold' = 'font-semibold',
  'bold' = 'font-bold',
}

enum ColorLink {
  'foreground' = 'text-blue-500',
  'primary' = 'text-green-500',
  'secondary' = 'text-red-500',
}

enum UnderlineLink {
  'none' = '',
  'hover' = 'hover:border-b-2 hover:border-green-500',
  'always' = 'border-b-2 border-green-500',
}

const Link = ({ href, isExternal = false, size = 'md', weight = 'normal', color = 'foreground', underline = 'none', children }: LinkProps): ReactElement => {  
  return (
    <a href={href} target={isExternal ? '_blank' : '_self'} className={`${SizeLink[size]} ${Weightink[weight]} ${ColorLink[color]} ${underline !== 'none' && UnderlineLink[underline]}`}>
      {children}
    </a>
  );
};

export default Link;
