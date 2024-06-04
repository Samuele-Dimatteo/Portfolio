// TODO Get a method for implement BorderColors in UnderlineStyles

import { ReactNode, forwardRef, ReactElement } from 'react';
import { TextSizes, TextWeights, TextColors, BorderColors } from '@/types/types';

interface LinkProps {
  href: string;
  isExternal?: boolean;
  size?: keyof typeof TextSizes;
  weight?: keyof typeof TextWeights;
  color?: keyof typeof TextColors;
  underline?: keyof typeof UnderlineStyles;
  customStyle?: string;
  children: ReactNode;
}

enum UnderlineStyles {
  'hover' = 'hover:border-b-2 hover:border-black dark:hover:border-white',
  'always' = 'border-b-2 border-black dark:border-white',
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
  href,
  isExternal = false,
  size = 'bs',
  weight = 'nr',
  color = 'foreground',
  underline,
  customStyle,
  children,
}, ref): ReactElement => {  
  return (
    <a
      ref={ref}
      href={href} 
      target={isExternal ? '_blank' : '_self'}
      className={`${TextSizes[size]} ${TextWeights[weight]} ${TextColors[color]} ${underline && UnderlineStyles[underline]} ${customStyle}`}
    >
      {children}
    </a>
  );
});

export default Link;
