'use client'

import { ReactElement, useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';
import Lenis from 'lenis';
import NoiseyBackground from '@/components/three/NoiseyBackground';
import Preloader from '@/components/layout/Preloader';

const App = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const lenis = new Lenis()
  
  // function raf(time: number) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }
  
  // requestAnimationFrame(raf)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <NoiseyBackground />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default App;
