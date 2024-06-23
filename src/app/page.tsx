import { ReactElement, useState, useEffect } from 'react';
import Preloader from '@/components/common/Preloader'
import NoiseyBackground from '@/components/three/NoiseyBackground';
import Navbar from '@/components/layout/Navbar';
import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';

const App = (): ReactElement => {
  return (
    <Preloader>
      <NoiseyBackground />
      <Navbar />
      <Main />
      <Footer />
    </Preloader>
  );
};

export default App;
