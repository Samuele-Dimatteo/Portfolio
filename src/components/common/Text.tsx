import { ElementType, HTMLAttributes, ReactNode, forwardRef, ReactElement } from 'react';
import { VariantProps } from 'class-variance-authority';
import { TextStyles } from '@/types';
import mergeClasses from '@/utils/mergeClasses';

interface TextProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof TextStyles> {
  elemType: ElementType;
  children: ReactNode;
}

const Text = forwardRef<HTMLElement, TextProps>(({ elemType, cl, sz, wt, className, children, ...props }, ref): ReactElement => {
  const Element = elemType

  return (
    <Element ref={ref} className={mergeClasses(TextStyles({ cl, sz, wt, className }))} {...props}>
      {children}
    </Element>
  );
});

export default Text;
