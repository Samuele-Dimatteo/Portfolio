import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const mergeClasses = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(...inputs));
}

export default mergeClasses;
