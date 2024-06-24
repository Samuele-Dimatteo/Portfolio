'use client';

import { ReactElement, ReactNode } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps): ReactElement => {
  return <ReactLenis root>{children}</ReactLenis>
}

export default SmoothScroll;
