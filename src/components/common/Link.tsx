import { AnchorHTMLAttributes, ReactNode, forwardRef, ReactElement } from 'react';
import { VariantProps } from 'class-variance-authority';
import { TextStyles } from '@/types';
import mergeClasses from '@/utils/mergeClasses';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof TextStyles> {
  children: ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ cl, sz, wt, className, children, ...props }, ref) => {
  return (
    <a ref={ref} className={mergeClasses(TextStyles({ cl, sz, wt, className }))} {...props}>
      {children}
    </a>
  );
});

export default Link;
