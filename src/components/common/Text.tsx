import React, { ElementType, ReactNode, forwardRef, ReactElement } from 'react';
import { TextSizes, TextWeights, TextColors } from '@/types/types';

interface TextProps {
  textElement: ElementType;
  size?: keyof typeof TextSizes;
  weight?: keyof typeof TextWeights;
  color?: keyof typeof TextColors;
  customStyle?: string;
  children: ReactNode;
}

const Text = forwardRef<HTMLHeadingElement, TextProps>(({
  textElement: TextElement,
  size = 'bs',
  weight = 'nr',
  color = 'foreground',
  customStyle,
  children,
}, ref) => {  
  return (
    <TextElement
      ref={ref}
      className={`${TextSizes[size]} ${TextWeights[weight]} ${TextColors[color]} ${customStyle}`}
    >
      {children}
    </TextElement>
  );
});

export default Text;
