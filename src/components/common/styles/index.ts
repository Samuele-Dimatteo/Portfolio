import { cva } from "class-variance-authority";

export const ComponentStyles = cva('', {
  variants: {
    bg: {
      primary: 'bg-[#F2F2F2]',
      secondary: 'bg-[#0B0B0B]',
    },
    sz: {
      sm: 'px-2 py-1',
      md: 'px-3 py-1.5',
      xl: 'px-5 py-2',
    },
  },
  defaultVariants: {
    bg: 'primary',
    sz: 'md',
  },
});

export const TextStyles = cva('', {
  variants: {
    cl: {
      primary: 'text-[#0B0B0B]',
      secondary: 'text-[#C7C7C7]',
    },
    sz: {
      sm: 'text-sm',
      bs: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      xxl: 'text-2xl',
    },
    wt: {
      md: 'font-medium',
      sb: 'font-semibold',
      bd: 'font-bold',
      eb: 'font-extrabold',
    },
  },
  defaultVariants: {
    cl: 'primary',
    sz: 'bs',
    wt: 'md',
  },
});
