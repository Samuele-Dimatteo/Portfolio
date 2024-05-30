import React, { ReactNode, ReactElement } from 'react';

interface LinkProps {
  href: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'foreground';
  underline?: 'none' | 'hover' | 'always';
  isExternal?: boolean;
  children: ReactNode;
}

enum SizeLink {
  'sm' = 'text-sm',
  'md' = 'text-md',
  'lg' = 'text-lg',
}

enum ColorLink {
  'foreground' = 'bg-green-500',
}

enum UnderlineLink {
  'none' = '',
  'hover' = 'hover:bg-green-900',
  'always' = 'bg-red-700',
}

const Link = ({ href, size = 'md', color, underline = 'none', isExternal, children }: LinkProps): ReactElement => {  
  return (
    <a href={href} target={isExternal ? '_blank' : undefined} className={`${SizeLink[size]} ${color ? ColorLink[color] : ''} ${UnderlineLink[underline]}`}>
      {children}
    </a>
  );
};

export default Link;
