'use client';

import { ReactElement, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import HomeSection from '@/components/sections/HomeSection';
import Footer from '@/components/layout/Footer';
import { motion, useScroll } from 'framer-motion';
import AboutSection from '@/components/sections/AboutSection';
import WorksSection from '@/components/sections/WorksSection';
import ContactSection from '@/components/sections/ContactSection';

const App = (): ReactElement => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <>
      <Navbar />
      <motion.div ref={container} className='flex flex-col flex-1'>
        <HomeSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </motion.div>
      <Footer />
    </>
  );
};

export default App;
