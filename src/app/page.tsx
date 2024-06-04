// TODO Make animation for Navbar and Main Components

'use client'

import { ReactElement } from 'react';
import Navbar from '@/components/layout/Navbar';
import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';

const App = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default App;
