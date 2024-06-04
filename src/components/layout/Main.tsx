'use client'

import { ReactElement } from 'react';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import WorksSection from '@/components/sections/WorksSection';
import ContactSection from '@/components/sections/ContactSection';

const Main = (): ReactElement => {
  const sections = [
    { idx: 0, Component: HomeSection },
    { idx: 1, Component: AboutSection },
    { idx: 2, Component: WorksSection },
    { idx: 3, Component: ContactSection }
  ];

  return (
    <main className='px-8 py-4 my-4 rounded-lg bg-neutral-200 dark:bg-neutral-900'>
      {sections.map(({ Component, idx }) => (
        <Component key={idx} />
      ))}
    </main>
  );
};

export default Main;
