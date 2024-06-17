import { ButtonHTMLAttributes, ReactNode, forwardRef, ReactElement } from 'react';
import { VariantProps } from 'class-variance-authority';
import { ComponentStyles } from '@/components/common/styles';
import mergeClasses from '@/utils/mergeClasses';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ComponentStyles> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ bg, sz, className, children, ...props }, ref): ReactElement => {
  return (
    <button ref={ref} className={mergeClasses(ComponentStyles({ bg, sz, className }))} {...props}>
      {children}
    </button>
  );
});

export default Button;
