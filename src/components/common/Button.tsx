import { ComponentSizes, TextWeights, ComponentColors, ComponentRadiues, TextColors } from '@/types/types';
import React, { ReactNode, ReactElement } from 'react';

interface ButtonProps {
  size?: keyof typeof ComponentSizes;
  bgColor?: keyof typeof ComponentColors;
  variant?: keyof typeof VariantStyles;
  radius?: keyof typeof ComponentRadiues;
  txtWeight?: keyof typeof TextWeights;
  txtColor?: keyof typeof TextColors;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
  children: ReactNode;
}

enum VariantStyles {
  'bordered' = 'border-2 border-black dark:border-white',
}

const Button = ({
  size = 'md',
  bgColor = 'foreground',
  variant,
  radius = 'md',
  txtWeight = 'nr',
  txtColor = 'foreground',
  isIconOnly = false,
  isDisabled = false,
  onPress,
  children,
}: ButtonProps): ReactElement => {  
  return (
    <button 
      className={`${isIconOnly || ComponentSizes[size]} ${(isIconOnly || variant) || ComponentColors[bgColor]} ${variant && VariantStyles[variant]} ${ComponentRadiues[radius]} ${TextWeights[txtWeight]} ${TextColors[txtColor]}`} 
      disabled={isDisabled} 
      onClick={onPress}
    >
      {children}
    </button>
  );
};

export default Button;
