'use client';

import { ReactElement, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import WorksSection from '@/components/sections/WorksSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

const App = (): ReactElement => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  return (
    <>
      <Navbar />
      <motion.div ref={container} className=''>
        <HomeSection scrollYProgress={scrollYProgress} index={0} />
        <AboutSection scrollYProgress={scrollYProgress} index={1} />
        <WorksSection scrollYProgress={scrollYProgress} index={2} />
        <ContactSection scrollYProgress={scrollYProgress} index={3} />
      </motion.div>
      <Footer />
    </>
  );
};

export default App;
