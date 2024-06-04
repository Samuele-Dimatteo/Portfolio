import { ReactNode, forwardRef, ReactElement } from 'react';
import { ComponentSizes, ComponentColors, BorderColors, ComponentRadiues, TextSizes, TextWeights, TextColors } from '@/types/types';

interface ButtonProps {
  size?: keyof typeof ComponentSizes;
  color?: keyof typeof ComponentColors;
  variant?: keyof typeof ButtonStyle;
  radius?: keyof typeof ComponentRadiues;
  txtSize?: keyof typeof  TextSizes;
  txtWeight?: keyof typeof TextWeights;
  txtColor?: keyof typeof TextColors;
  customStyle?: string;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
  children: ReactNode;
}

enum ButtonStyle {
  'bordered' = 'border-b-2'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  size = 'md',
  color = 'foreground',
  variant,
  radius = 'md',
  txtSize = 'bs',
  txtWeight = 'nr',
  txtColor = 'foreground',
  customStyle,
  isIconOnly = false,
  isDisabled = false,
  onPress,
  children,
}, ref): ReactElement => {
  return (
    <button 
      ref={ref}
      className={`${isIconOnly || ComponentSizes[size]} ${(isIconOnly || variant) || ComponentColors[color]} ${variant && (ButtonStyle[variant] && BorderColors[color])} ${ComponentRadiues[radius]} ${TextSizes[txtSize]} ${TextWeights[txtWeight]} ${TextColors[txtColor]} ${customStyle}`} 
      disabled={isDisabled} 
      onClick={onPress}
    >
      {children}
    </button>
  );
});

export default Button;
