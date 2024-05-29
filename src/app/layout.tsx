import { ReactNode, ReactElement } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/providers/ThemeProvider';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Samuele Dimatteo's - Homepage",
  description: "Samuele Dimatteo's portfolio",
  icons: '/images/favicon.ico'
};

const RootLayout = ({ children }: RootLayoutProps): ReactElement => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider defaultTheme='dark'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
