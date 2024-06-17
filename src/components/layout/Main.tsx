import { ReactElement } from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import WorkSection from '../sections/WorkSection';

const Main = (): ReactElement => {
  return (
    <main className=''>
      <HeroSection />
      <AboutSection />
      <WorkSection />
    </main>
  );
};

export default Main;
