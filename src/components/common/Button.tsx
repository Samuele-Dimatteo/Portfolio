import React, { ReactNode, ReactElement } from 'react';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'foreground';
  variant?: 'solid' | 'bordered';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  isDisabled?: boolean;
  onPress?: () => void;
  children: ReactNode;
}

enum SizeButton {
  'sm' = 'px-2 py-2 text-sm',
  'md' = 'px-4 py-2 text-md',
  'lg' = 'px-5 py-2 text-lg',
}

enum ColorButton {
  'foreground' = 'bg-green-500',
}

enum VariantButton {
  'solid' = '',
  'bordered' = 'border-2 border-green-500 bg-transparent',
}

enum RadiusButton {
  'none' = 'rounded-none',
  'sm' = 'rounded-sm',
  'md' = 'rounded-md',
  'lg' = 'rounded-lg',
  'xl' = 'rounded-xl',
  'full' = 'rounded-full',
}

const Button = ({ size = 'md', color, variant = 'solid', radius = 'md', isDisabled = false, onPress, children }: ButtonProps): ReactElement => {  
  return (
    <button className={`${SizeButton[size]} ${color && ColorButton[color]} ${VariantButton[variant]} ${RadiusButton[radius]}`} disabled={isDisabled} onClick={onPress}>
      {children}
    </button>
  );
};

export default Button;
