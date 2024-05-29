import { ReactNode, ReactElement } from 'react';

enum Size {
  'sm' = 'p-1',
  'md' = 'p-2',
  'lg' = 'p-3',
  'xl' = 'p-4',
}

enum Color {
  'forground' = '#FFFF00'
}

enum Variant {
  'solid' = ''
}

interface ButtonProps {
  size?: Size;
  color?: Color | string;
  variant?: 'solid' | 'bordered';
  children: ReactNode;
}

const Button = ({ size = 'md', color = 'black', variant = 'solid', children }: ButtonProps): ReactElement => {
  const className = `
    ${size === 'sm' ? 'text-sm' : ''}
    ${size === 'md' ? 'text-md' : ''}
    ${size === 'lg' ? 'text-lg' : ''}
    ${size === 'xl' ? 'text-xl' : ''}
    ${color ? `bg-${color}` : 'bg-black'}
    ${isFilled ? '' : 'border border-solid border-black'}
  `;

  return (
    <button className={'border'} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
