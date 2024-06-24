import { ReactNode, ReactElement } from 'react';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/common/SmoothScroll';

interface RootLayoutProps {
  children: ReactNode;
}

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Samuele Dimatteo - Portfolio",
  description: "Samuele Dimatteo's portfolio",
  icons: '/images/favicon.ico'
};

const RootLayout = ({ children }: RootLayoutProps): ReactElement => {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
};

export default RootLayout;
