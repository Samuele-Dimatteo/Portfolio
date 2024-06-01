import { TextSizes, TextWeights, TextColors } from '@/types/types';
import { ReactNode, ReactElement } from 'react';

interface LinkProps {
  href: string;
  isExternal?: boolean;
  size?: keyof typeof TextSizes;
  weight?: keyof typeof TextWeights;
  color?: keyof typeof TextColors;
  underline?: keyof typeof UnderlineStyles;
  children: ReactNode;
}

enum UnderlineStyles {
  'hover' = 'hover:border-b-2 hover:border-black dark:hover:border-white',
  'always' = 'border-b-2 border-black dark:border-white',
}

const Link = ({
  href,
  isExternal = false,
  size = 'bs',
  weight = 'nr',
  color = 'foreground',
  underline,
  children,
}: LinkProps): ReactElement => {  
  return (
    <a 
      href={href} 
      target={isExternal ? '_blank' : '_self'} 
      className={`${TextSizes[size]} ${TextWeights[weight]} ${TextColors[color]} ${underline && UnderlineStyles[underline]}`}
    >
      {children}
    </a>
  );
};

export default Link;
