import { ReactNode, ReactElement } from 'react';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  isFilled?: boolean;
  action: () => void;
  children: ReactNode;
}

const Button = ({ size = 'md', color = 'black', isFilled = false, action, children }: ButtonProps): ReactElement => {
  const className = `
    ${size === 'sm' ? 'text-sm' : ''}
    ${size === 'md' ? 'text-md' : ''}
    ${size === 'lg' ? 'text-lg' : ''}
    ${size === 'xl' ? 'text-xl' : ''}
    ${color ? `bg-${color}` : 'bg-black'}
    ${isFilled ? '' : 'border border-solid border-black'}
  `;

  return (
    <button className={className} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
