import React, { ReactNode, ReactElement } from 'react';

interface LinkProps {
  href: string;
  isExternal?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'foreground' | 'tailwind' | 'custom';
  underline?: 'none' | 'hover' | 'always';
  children: ReactNode;
}

enum SizeLink {
  'sm' = 'text-sm',
  'md' = 'text-base',
  'lg' = 'text-lg',
  'xl' = 'text-xl',
}

enum ColorLink {
  'foreground' = '',
  'tailwind' = '',
  'custom' = '',
}

enum UnderlineLink {
  'none' = '',
  'hover' = 'hover:border-b-2 hover:border-green-500',
  'always' = 'border-b-2 border-green-500',
}

const Link = ({ href, isExternal, size = 'md', color = 'foreground', underline = 'none', children }: LinkProps): ReactElement => {  
  return (
    <a href={href} target={isExternal ? '_blank' : undefined} className={`${SizeLink[size]} ${ColorLink[color]} ${UnderlineLink[underline]}`}>
      {children}
    </a>
  );
};

export default Link;
